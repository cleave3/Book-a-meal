import Joi from 'joi';
import dummydb from '../Dummydb/dummydb';

const validateMenu = (menu) => {
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

// TO GET MENU
const getMenu = (req, res) => {
  if (!dummydb.menus) {
    return res.json({
      status: 404,
      message: 'Menu not found',
    });
  }
  return res.json({
    status: 200,
    data: dummydb.menus,
  });
};

// TO SET MENU
const addToMenu = (req, res) => {
  const same = dummydb.menus.find(data => data.name === String(req.body.name) && data.size === String(req.body.size));
  if (same) {
    return res.status(409).json({
      status: 409,
      message: 'This meal already exist in menu',
    });
  }

  const { error } = validateMenu(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const menu = {
    id: dummydb.menus.length + 1,
    name: req.body.name,
    size: req.body.size,
    price: req.body.price,
  };

  dummydb.menus.push(menu);
  return res.json({
    status: 201,
    data: menu,
  });
};
const menuControl = {
  getMenu,
  addToMenu,
};

export { menuControl };
