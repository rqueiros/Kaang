const request = require('supertest');
const app = require('../app')

describe('Root path', () => {
    test('Test status code for GET method', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

// KAANG: other tests here
// ...