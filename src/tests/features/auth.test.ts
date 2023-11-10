// @ts-ignore
import request from 'supertest';


test('should get 200 code if everything is get', async () => {
    const api = request('http://localhost:3000');

    await api
        .post('/api/v1/auth/register')
        .send({
            name: 'ali',
            email: 'alihamzehei@gmail.com',
            password: '123456789'
        }).expect(200);
});

test('should get 500 code if email is not valid', async () => {
    const api = request('http://localhost:3000');

    await api
        .post('/api/v1/auth/register')
        .send({
            name: 'ali',
            email: 'alihamzehei',
            password: '123456789'
        }).expect(500);
});

test('should get 500 if password smaller than 6 character', async () => {
    const api = request('http://localhost:3000');

    await api
        .post('/api/v1/auth/register')
        .send({
            name: 'ali',
            email: 'alihamzehei2017@gmail.com',
            password: '123'
        }).expect(500);
});