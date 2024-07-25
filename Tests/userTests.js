// tests/userTests.js
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../model-layer/Model');

describe('User API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a user', async () => {
    const res = await request(app)
      .post('/worko/user')
      .send({
        email: 'test@example.com',
        name: 'Test User',
        age: 30,
        city: 'Test City',
        zipCode: '12345',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('email', 'test@example.com');
  });

  it('should get a user', async () => {
    const user = await User.create({
      email: 'test2@example.com',
      name: 'Test User 2',
      age: 25,
      city: 'Test City 2',
      zipCode: '67890',
    });
    const res = await request(app).get(`/worko/user/${user._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('email', 'test2@example.com');
  });

  it('should update a user', async () => {
    const user = await User.create({
      email: 'test3@example.com',
      name: 'Test User 3',
      age: 28,
      city: 'Test City 3',
      zipCode: '11223',
    });
    const res = await request(app)
      .put(`/worko/user/${user._id}`)
      .send({ name: 'Updated User' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Updated User');
  });

  it('should delete a user', async () => {
    const user = await User.create({
      email: 'test4@example.com',
      name: 'Test User 4',
      age: 32,
      city: 'Test City 4',
      zipCode: '33445',
    });
    const res = await request(app).delete(`/worko/user/${user._id}`);
    expect(res.statusCode).toEqual(204);
  });
});
