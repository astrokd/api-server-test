const supergoose = require('@code-fellows/supergoose');
const { server } = require('../../src/app.js');
const mockRequest = supergoose(server);

describe('API server errors', () => {
    it('responds with 404 on an invalid route', () => {
        return mockRequest
            .get('/api/v1/invalid')
            .then(results => {
                expect(results.status).toBe(404);
            })
    })
    it('responds with 500 when an internal server error is raised', () => {
        return mockRequest
            .get('/error')
            .then(results => {
                expect(results.status).toBe(500);
            })
    })

})
