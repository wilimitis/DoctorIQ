const expect = require('chai').expect,
  request = require('supertest'),
  users = require('../../data/users');

describe('authentication', () => {
  const server = require('../../app');
  const tokenRoute = '/token';

  describe(`POST ${tokenRoute}`, () => {

    const user = users[0];

    it('expects parameters', done => {
      request(server)
        .post(tokenRoute)
        .expect(400, [
          '"email" is required',
          '"password" is required'
        ], done);
    });

    it('expects password matches', done => {
      request(server)
        .post(tokenRoute)
        .send({
          email: user.email,
          password: 'wrong password'
        })
        .expect(401, 'Unauthorized', done);
    });

    it('returns a verified auth token', done => {
      request(server)
        .post(tokenRoute)
        .send(user)
        .expect(res => {
          expect(res.body.token).to.exist;
          expect(res.body.grant).to.equal(user.grant);
          expect(res.body.id).to.equal(user.id);
          // try {
          //   var decoded = jwt.verify(token, secret);
          // } catch (err) {
          //   expect(err).to.not.exist;
          // }
        })
        .expect(200, done);
    });
  });
});
