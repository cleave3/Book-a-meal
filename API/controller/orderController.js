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

const orderControl = {
  getAllOrders,
  addOrder,
};

export { orderControl };
