const request = require('supertest');
const { app, server } = require('./app');

describe('API Tests', () => {
  afterAll((done) => {
    server.close(done);
  });

  test('GET / should return success message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBeDefined();
  });

  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});