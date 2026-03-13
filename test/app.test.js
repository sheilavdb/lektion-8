import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
  it('ska returnera status ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('GET /fruit', () => {
  it('ska returnera en lista med frukter', async () => {
    const res = await request(app).get('/fruit');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});