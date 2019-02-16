import dummydb from '../Dummydb/dummydb';


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


const orderControl = {
  getAllOrders,
};

export { orderControl };
