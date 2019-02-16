import Joi from 'joi';
import dummydb from '../Dummydb/dummydb';

const validateOrder = (menu) => {
  const schema = {
    name: Joi.string().trim().min(3).max(20)
      .required(),
    size: Joi.string().trim().valid('small', 'medium', 'large').insensitive()
      .min(5)
      .max(15)
      .required(),
    price: Joi.number().integer().min(500).max(3000)
      .required(),
  };

  return Joi.validate(menu, schema);
};

// TO GET ALL ORDERS
const getAllOrders = (req, res) => {
  if (!dummydb.orders) {
    return res.json({
      status: 404,
      message: 'No order was found',
    });
  }
  return res.json({
    status: 200,
    data: dummydb.orders,
  });
};

// TO ADD AN ORDER
const addOrder = (req, res) => {
  const { error } = validateOrder(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const order = {
    id: dummydb.orders.length + 1,
    name: req.body.name,
    size: req.body.size,
    price: req.body.price,
  };

  dummydb.orders.push(order);
  return res.json({
    status: 201,
    data: order,
  });
};

// TO GET A SINGLE ORDER
const getAnOrder = (req, res) => {
  const order = dummydb.orders.find(data => data.id === Number(req.params.id));
  if (!order) {
    return res.status(404).json({
      status: 404,
      message: 'Order with the given id was not found',
    });
  }
  return res.json({
    status: 200,
    data: order,
  });
};

// TO UPDATE AN ORDER
const updateAnOrder = (req, res) => {
  const order = dummydb.orders.find(data => data.id === Number(req.params.id));
  if (!order) {
    return res.status(404).json({
      status: 404,
      message: 'Order with the given id was not found',
    });
  }

  const { error } = validateOrder(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  order.name = req.body.name;
  order.size = req.body.size;
  order.price = req.body.price;

  return res.json({
    status: 201,
    data: order,
  });
};

// TO REMOVE AN ORDER
const deleteAnOrder = (req, res) => {
  const order = dummydb.orders.find(data => data.id === Number(req.params.id));
  if (!order) {
    return res.status(404).json({
      status: 404,
      message: 'Order with the given id was not found',
    });
  }

  const index = dummydb.orders.indexOf(order);
  dummydb.orders.splice(index, 1);

  return res.json({
    status: 200,
    data: dummydb.orders,
  });
};

const orderControl = {
  getAllOrders,
  addOrder,
  getAnOrder,
  updateAnOrder,
  deleteAnOrder,
};

export { orderControl };
