const users = require('../models/userSchema')

// Register
exports.register = async (req, res) => {
    console.log("Register request received");
    console.log(req.body);

    // const file = req.file.filename
    const { email,password } = req.body

    if (!email || !password) {
        res.status(403).json("All inputs are required")
    }

    try {
        const preUser = await users.findOne({ email })
        console.log("PreUser", preUser);
        if (preUser) {
            res.status(406).json("Employee already registered")
        } else {
            console.log("inside else case");
            const newUser = new users({
                email,password
            })
            console.log("new user created");

            await newUser.save()
            console.log("New user", newUser);
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}