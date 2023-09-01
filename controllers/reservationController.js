const getAll = async (req, res) => {
    const user = req.body.username;

    console.log("reservations for member", user);
    const restauntLst_reservations = [
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
            results: restauntLst_reservations
        }
    });
};

const Create = async (req, res) => {
    const new_reservation = req.body;

    console.log("reserve restaurant", new_reservation);
    return res.json({
        success: true,
        data: {
            UserID: "reserved successfully!!."
        }
    });
};

const Delete = async (req, res) => {
    const reserve_id = req.body;

    console.log("deleting reserv ID", reserve_id);
    return res.json({
        success: true,
        data: {
            DeletedID: reserve_id
        }
    });
};

// Named export
module.exports = { getAll, Create, Delete};