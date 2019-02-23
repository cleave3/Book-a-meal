import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe('API ENDPOINTS FOR MEALS', () => {
  describe('POSTING A MEAL OPTION', () => {
    it('should not create a single meal option when all fields are empty', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
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
    it('should not create a meal option when only name is provided', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
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
    it('should not create a single meal option when the price field is ommited', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
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
    it('should create a meal option', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
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
  describe('GETTING ALL MEALS', () => {
    it('should get all meal options ', (done) => {
      chai.request(app)
        .get('/api/v1/meals')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('data');
        });
      done();
    });
  });
  describe('GETTING A SINGLE MEAL OPTION', () => {
    it('should not get a single meal option', (done) => {
      chai.request(app)
        .get('/api/v1/meals/fakeId')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
        });
      done();
    });
    it('should get a single meal option', (done) => {
      chai.request(app)
        .get('/api/v1/meals/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('data');
        });
      done();
    });
  });
  describe('UPDATING A MEAL OPTION', () => {
    it('should update the meal option', (done) => {
      chai.request(app)
        .put('/api/v1/meals/1')
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
    it('should not update the meal option when all required field is empty', (done) => {
      chai.request(app)
        .put('/api/v1/meals/1')
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
    it('should not update the meal option when only the name field is given', (done) => {
      chai.request(app)
        .put('/api/v1/meals/1')
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
    it('should not update the meal option when the price field is ommitted', (done) => {
      chai.request(app)
        .put('/api/v1/meals/1')
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
    it('should not update the meal option', (done) => {
      chai.request(app)
        .put('/api/v1/meals/fakeid')
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
  describe('REMOVING A MEAL OPTION', () => {
    it('should not delete a single meal option when the given id does not match', (done) => {
      chai.request(app)
        .delete('/api/v1/meals/fakeId')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
        });
      done();
    });
    it('should delete the meal option', (done) => {
      chai.request(app)
        .delete('/api/v1/meals/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('data');
        });
      done();
    });
  });
});
