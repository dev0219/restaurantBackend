const Login = async (req, res) => {
    const user = req.body.username;
    console.log(" user", user);
    return res.json({
        success: true,
        data: {
            UserID: user
        }
    });
};

const Delete = async (req, res) => {
    const userID = req.body.userID;
    console.log(" deleting user", userID);
    return res.json({
        success: true,
        data: {
            UserID: userID
        }
    });
};

// Named export
module.exports = { Login, Delete };