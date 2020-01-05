import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe('API ENDPOINTS FOR ORDERS', () => {
  describe('POSTING AN ORDER ', () => {
    it('should not create an order when all fields are empty', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
        .send({
          name: '',
          size: '',
          price: '',
        })
        .end((error, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
          done();
        });
    });
    it('should not create an order when only name is provided', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
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
    it('should not create an order when the price field is ommited', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
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
    it('should create an order', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
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
  describe('GETTING ALL ORDERS', () => {
    it('should get all orders ', (done) => {
      chai.request(app)
        .get('/api/v1/orders')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('data');
        });
      done();
    });
  });
  describe('GETTING A SINGLE ORDER', () => {
    it('should not get a single order', (done) => {
      chai.request(app)
        .get('/api/v1/orders/fakeId')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
        });
      done();
    });
    it('should get a single order', (done) => {
      chai.request(app)
        .get('/api/v1/orders/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('data');
        });
      done();
    });
  });
  describe('UPDATING AN ORDER', () => {
    it('should update the order', (done) => {
      chai.request(app)
        .put('/api/v1/orders/1')
        .send({
          name: 'Rice',
          size: 'small',
          price: '2000',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          done();
        });
    });
    it('should not update the order', (done) => {
      chai.request(app)
        .put('/api/v1/orders/1')
        .send({
          name: '',
          size: '',
          price: '',
        })
        .end((error, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
          done();
        });
    });
    it('should not update the order', (done) => {
      chai.request(app)
        .put('/api/v1/orders/1')
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
    it('should not update the order', (done) => {
      chai.request(app)
        .put('/api/v1/orders/1')
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
    it('should not update the order', (done) => {
      chai.request(app)
        .put('/api/v1/orders/fakeid')
        .send({
          name: 'Rice',
          size: 'Small',
          price: '2000',
        })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an('object');
        });
      done();
    });
  });
  describe('REMOVING AN ORDER', () => {
    it('should not delete a single order', (done) => {
      chai.request(app)
        .delete('/api/v1/orders/fakeId')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
        });
      done();
    });
    it('should delete the order', (done) => {
      chai.request(app)
        .delete('/api/v1/orders/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('data');
        });
      done();
    });
  });
});
