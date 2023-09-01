const getAll = async (req, res) => {
    const user = req.body.username;

    console.log("retaurant user", user);
    const restauntLst = [
        {
            "name":"restaurant1",
            "category":"Isian food",
            "seats":[12,24,32,12],
            "date" :"20213-09-23",
            "restaurantImg":"https://test.com/test.png"
        },
        {
            "name":"restaurant1",
            "category":"Isian food",
            "seats":[12,24,32,12],
            "date" :"20213-09-23",
            "restaurantImg":"https://test.com/test.png"
        }
    ];
    return res.json({
        success: true,
        data: {
            results: restauntLst
        }
    });
};

const Create = async (req, res) => {
    const new_restaurant = req.body;

    console.log("new_restaurant", new_restaurant);
    return res.json({
        success: true,
        data: {
            UserID: "created successfully!!."
        }
    });
};

const Update = async (req, res) => {
    const update_restaurant = req.body;

    console.log("update_restaurant", update_restaurant);
    return res.json({
        success: true,
        data: {
            UserID: "updated successfully!!."
        }
    });
};

const Delete = async (req, res) => {
    const restaurnt_ID = req.body.id;

    console.log("deleting restaurnt ID", restaurnt_ID);
    return res.json({
        success: true,
        data: {
            DeletedID: restaurnt_ID
        }
    });
};

// Named export
module.exports = { getAll, Create, Update, Delete};