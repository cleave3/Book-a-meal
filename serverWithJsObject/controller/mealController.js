import Joi from 'joi';
import dummydb from '../Dummydb/dummydb';

const validateMeal = (meals) => {
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

  return Joi.validate(meals, schema);
};

// TO GET ALL MEAL OPTIONS
const getAllMeals = (req, res) => {
  if (!dummydb.meals) {
    return res.json({
      status: 404,
      message: 'No meal was found',
    });
  }
  return res.json({
    status: 200,
    data: dummydb.meals,
  });
};

// TO ADD A MEAL OPTION
const addMeal = (req, res) => {
  const same = dummydb.meals.find(data => data.name === String(req.body.name) && data.size === String(req.body.size));
  if (same) {
    return res.status(409).json({
      status: 409,
      message: 'This meal already exist',
    });
  }
  const { error } = validateMeal(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const meal = {
    id: dummydb.meals.length + 1,
    name: req.body.name,
    size: req.body.size,
    price: req.body.price,
  };

  dummydb.meals.push(meal);
  return res.json({
    status: 201,
    data: meal,
  });
};

// TO GET A SINGLE MEAL OPTION
const getAmeal = (req, res) => {
  const meal = dummydb.meals.find(data => data.id === Number(req.params.id));
  if (!meal) {
    return res.status(404).json({
      status: 404,
      message: 'Meal with the given id was not found',
    });
  }
  return res.json({
    status: 200,
    data: meal,
  });
};

// TO UPDATE A MEAL OPTION
const updateAmeal = (req, res) => {
  const meal = dummydb.meals.find(data => data.id === Number(req.params.id));
  if (!meal) {
    return res.status(404).json({
      status: 404,
      message: 'Meal with the given id was not found',
    });
  }

  const { error } = validateMeal(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  meal.name = req.body.name;
  meal.size = req.body.size;
  meal.price = req.body.price;

  return res.json({
    status: 201,
    data: meal,
  });
};

// TO REMOVE A MEAL OPTION
const deleteAmeal = (req, res) => {
  const meal = dummydb.meals.find(data => data.id === Number(req.params.id));
  if (!meal) {
    return res.status(404).json({
      status: 404,
      message: 'Meal with the given id was not found',
    });
  }

  const index = dummydb.meals.indexOf(meal);
  dummydb.meals.splice(index, 1);

  return res.json({
    status: 200,
    data: dummydb.meals,
  });
};

const mealControl = {
  getAllMeals,
  addMeal,
  getAmeal,
  updateAmeal,
  deleteAmeal,
};

export { mealControl };
