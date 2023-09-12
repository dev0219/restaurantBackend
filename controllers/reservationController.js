const { database , ObjectId} = require("../config/db.js");
const reservationCollection = database.collection("reservations");

const getAll = async (req, res) => {
    const user_id = req.body.userId;
    console.log("-- user id", user_id);
    const resvationLst = await reservationCollection.find({userId:user_id}).toArray();
    let result = {status:1, results:resvationLst }
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

const CheckResevation = async (req, res) => {
    const new_reservation = req.body;
    console.log(new_reservation);
    // const new_reservation_obj = await reservationCollection.insertOne(new_reservation);
    const sumSeats = await reservationCollection.find({day: new_reservation.day, restaurantId: new_reservation.restaurantId}).toArray()
    console.log(sumSeats);
    let seatsCounter = 0;
    if (sumSeats.length) {
        for (var i=0;i<sumSeats.length;i++) {
            seatsCounter = seatsCounter+ Number(sumSeats[i].seats)
        }
    }
    let results = {status:2, seats: seatsCounter};
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
module.exports = { getAll, Create, Delete, CheckResevation};