const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');

const AuthController = {
    signup: async (req, res) => {
        try {
            let u = await UserModel.findOne({email: req.body.email});
            if (!u) {
                const USER = new UserModel(req.body);
                user.password = bcrypt.hashSync(req.body.password, consts.bcryptSalts);
                await USER.save();
                delete user.password;

                res.status(200).json(user);
            } else {
                res.status(403).json({message: 'User already registered', error: {}});
            }
        } catch(err) {
            res.status(500).json({message: 'Error while saving the user', error: err});
        }
    },
    login: async (req, res) => {

    }
};

module.exports = AuthController;