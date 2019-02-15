import dummydb from '../Dummydb/dummydb';


// TO GET MENU
const getMenu = (req, res) => {
  if (!dummydb.menu) {
    res.json({
      status: 404,
      message: 'Menu not found',
    });
  }
  res.json({
    status: 200,
    data: dummydb.menu,
  });
};

const menuControl = {
  getMenu,
};

export { menuControl };
