var request = require('supertest');

describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../app');
  });
  it('responds to /posts', function testPosts(done) {
  request(server)
    .get('/posts')
    .expect(200, done);
  });
  it('responds to /', function testHome(done) {
    request(server)
      .get('/')
      .expect(200, done);
    });
});