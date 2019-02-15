import dummydb from '../Dummydb/dummydb';

const getAllMeals = (req, res) => {
  res.json({
    status: 200,
    data: dummydb.meals,
  });
};


const control = {
  getAllMeals,
};

export { control };
