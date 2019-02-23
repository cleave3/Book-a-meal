import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

chai.should();

describe('API ENDPOINTS FOR MENU', () => {
  describe('GETTING ALL MEALS', () => {
    it('should get the available menu', (done) => {
      chai.request(app)
        .get('/api/v1/menu')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
        });
      done();
    });
  });
  describe('POSTING A MENU', () => {
    it('should not add meal to menu when required fields are empty', (done) => {
      chai.request(app)
        .post('/api/v1/menu')
        .send({
          name: '',
          size: '',
          price: '',
        })
        .end((error, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
        });
      done();
    });
    it('should not add meal to menu when only name is provided', (done) => {
      chai.request(app)
        .post('/api/v1/menu')
        .send({
          name: 'Rice',
          size: '',
          price: '',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
        });
      done();
    });
    it('should not add meal to menu when the price field is ommited', (done) => {
      chai.request(app)
        .post('/api/v1/menu')
        .send({
          name: 'Rice',
          size: 'Small',
          price: '',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
        });
      done();
    });
    it('should add meal to menu', (done) => {
      chai.request(app)
        .post('/api/v1/menu')
        .send({
          name: 'Rice',
          size: 'Small',
          price: '2000',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
        });
      done();
    });
  });
});
