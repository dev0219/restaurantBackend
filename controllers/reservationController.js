const { database , ObjectId} = require("../config/db.js");
const reservationCollection = database.collection("reservations");
const restaurantCollection = database.collection("restaurants");

const getAll = async (req, res) => {
    const reservation = req.body;
    
    const pipeline = [
        {
          $lookup: {
            from: "restaurants",
            localField: "_id",
            foreignField: "restaurantId",
            as: "matchedData",
          },
        },
      ];
      const result = await reservationCollection.aggregate(pipeline).toArray();
    return res.json({
        success: true,
        data: {
            results: result
        }
    });
};

const Create = async (req, res) => {
    const new_reservation = req.body;
    const new_reservation_obj = await reservationCollection.insertOne(new_reservation);
    let results = {status:2,id:new_reservation_obj.insertedId}
    return res.json({
        success: true,
        data: {
            result: results
        }
    });
};

const Delete = async (req, res) => {
    const reserve_id = req.body._id;
    const reserve_objectID = new ObjectId(reserve_id);
    const is_deleting_reservation  = await reservationCollection.deleteOne({_id: reserve_objectID});
    let results = {status: 4, id:reserve_objectID}
    return res.json({
        success: true,
        data: {
            result: results
        }
    });
};

// Named export
module.exports = { getAll, Create, Delete};