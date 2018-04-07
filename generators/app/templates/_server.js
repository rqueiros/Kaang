const app = require('./app');
// Listen to port for connections
app.listen(app.get('port'), () => {
  console.log('Kaang App listening at port ' + app.get('port'));
});