const { database , ObjectId} = require("../config/db.js");
const restaurantCollection = database.collection("restaurants");

const getAll = async (req, res) => {
    const user_id = req.body.userId;
    const restauntLst = await restaurantCollection.find({userId:user_id}).toArray();
    let result = {status:1, results:restauntLst }
    return res.json({
        success: true,
        data: {
            results: result
        }
    });
};
const getMemberAll = async (req, res) => {
    const restauntLst = await restaurantCollection.find({}).toArray();
    let result = {status:1, results:restauntLst }
    return res.json({
        success: true,
        data: {
            results: result
        }
    });
};

const Create = async (req, res) => {
    const new_restaurant = req.body;
    const new_restaurant_obj = await restaurantCollection.insertOne(new_restaurant);
    let results = {status:2,id:new_restaurant_obj.insertedId}
    return res.json({
        success: true,
        data: {
            result: results
        }
    });
};

const Update = async (req, res) => {
    const update_restaurant = req.body;
    const update_obj = {$set:{name:req.body.name, days:req.body.days, categories:req.body.categories, seats:req.body.seats, date:req.body.date, restaurantImg:req.body.restaurantImg, userId:req.body.userId}}
    const restaurant_objectID = new ObjectId(update_restaurant._id);
    const update_restaurant_obj = await restaurantCollection.updateMany({_id:restaurant_objectID}, update_obj);
    console.log("=== update restaurnt");
    console.log(update_restaurant_obj)
    let results = {status:3,id:restaurant_objectID}
    return res.json({
        success: true,
        data: {
            result: results
        }
    });
};

const Delete = async (req, res) => {
    const restaurnt_ID = req.body._id;
    const restaurant_objectID = new ObjectId(restaurnt_ID);
    const is_deleting_restaurant  = await restaurantCollection.deleteOne({_id: restaurant_objectID});
    let results = {status: 4, id:restaurant_objectID}
    return res.json({
        success: true,
        data: {
            result: results
        }
    });
};

// Named export
module.exports = { getAll, getMemberAll, Create, Update, Delete};