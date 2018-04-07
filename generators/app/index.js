'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing KAANG generator!');
  }
    
  prompting() {
    // Greetings
    this.log(
      yosay(`Welcome to the fantastic ${chalk.red('generator-kaang')} generator! A RESTful generator for the Modern Web!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name?',
        default: this.appname
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.name;
      this.props = props;
    });
  }

  // Scaffolding
  writing() {


      // ### Copy the configuration files ###
      this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json'), { name: this.props.name }
      );
      this.fs.copyTpl(
          this.templatePath('_bower.json'),
          this.destinationPath('bower.json'), { name: this.props.name }
      );
      this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      );
  

      // ### Copy application files ###

      // Server file
      this.fs.copyTpl(
        this.templatePath('_server.js'),
        this.destinationPath('server.js')
      );

      // Server app file
      this.fs.copyTpl(
        this.templatePath('_app.js'),
        this.destinationPath('app.js')
      );

      // Routes
      this.fs.copy(
        this.templatePath('_routes/_all.js'),
        this.destinationPath('routes/all.js'));

      // Model
      this.fs.copy(
        this.templatePath('_models/_movie.js'),
        this.destinationPath('models/movie.js'));

      // Views
      this.fs.copyTpl(
        this.templatePath('_views/_index.ejs'),
        this.destinationPath('views/index.ejs'), { name: this.props.name }
      );

      // Public
      this.fs.copy(
        this.templatePath('_public/_css/_app.css'),
        this.destinationPath('public/css/app.css')
      );
      this.fs.copy(
        this.templatePath('_tests/me.test.js'),
        this.destinationPath('tests/me.test.js')
      );
      this.fs.copy(
        this.templatePath('_public/_js/_app.js'),
        this.destinationPath('public/js/app.js')
      );
      this.fs.copy(
        this.templatePath('_public/_img/_kaang.png'),
        this.destinationPath('public/img/kaang.png')
      );
    }  

    install() {
      // Dependencies      
      this.installDependencies();           
    }
  
};
