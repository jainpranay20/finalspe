const request = require('supertest');
const server = require('./server');
describe('POST /register', function () {
    it('respond with json containing a list of all users', function (done) {
        let data = {
            "name":"jainpranay",
            "email":"jainpranay20@gmail.com",
            "password":"123456" 
        }
        request(server)
            .post('/api/users/register')
            .send(data)
            .expect(400, done)
    });
});

describe('GET /login', function () {
    it('respond with json containing a list of all users', function (done) {
        let data = {
            "email":"jainpranay20@gmail.com,
            "password":"123456" 
        }
        request(server)
            .post('/api/users/login')
            .send(data)
            .expect(200, done)
    })
})
