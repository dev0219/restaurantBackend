const { database, ObjectId } = require("../config/db.js");
const userCollection = database.collection("users");

const Login = async (req, res) => {
    const user = req.body.username;
    console.log(" user", user);
    let lowerCaseUserName = user.toLowerCase();
    let userObj = {username:user, role:1, islogin:true};
    if (lowerCaseUserName.includes('restaurant')) {
        userObj.role = 2
    }
    const is_exist_user  = await userCollection.findOne({username:user});

    if (is_exist_user) {
        if (is_exist_user.islogin) {
            let results = {status:1,id:is_exist_user._id, role:is_exist_user.role}
            return res.json({
                success: true,
                data: {
                    result: results
                }
            });
        } else {
            const is_login_user  = await userCollection.updateOne({_id:is_exist_user._id},[{$set:{islogin:true}}]);
            let results = {status:2,id:is_exist_user._id, role:is_exist_user.role}
            return res.json({
                success: true,
                data: {
                    result: results
                }
            });
        }
    } else {
        const new_user = await userCollection.insertOne(userObj);
        let results = {status:3,id:new_user.insertedId, role:userObj.role}
        return res.json({
            success: true,
            data: {
                result: results
            }
        });
    }
};

const Signout = async (req, res) => {
    const user_id = req.body.id;
    const user_objectID = new ObjectId(user_id);
    const is_signout_user  = await userCollection.updateOne({_id: user_objectID},[{$set:{islogin:false}}]);
    let results = {status:0 ,id:user_id}
    return res.json({
        success: true,
        data: {
            result: results
        }
    });
};

const Delete = async (req, res) => {
    const user_id = req.body.id;
    const user_objectID = new ObjectId(user_id);
    const is_deleting_user  = await userCollection.deleteOne({_id: user_objectID});
    let results = {status: 4,id: user_id}
    return res.json({
        success: true,
        data: {
            result: results
        }
    });
};

// Named export
module.exports = { Login,Signout, Delete };