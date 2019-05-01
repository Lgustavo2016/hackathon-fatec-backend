const UserModel = require('../models/User');

const HelperController = {
    isEmailRegistered: async (req, res) => {
        let u = await UserModel.findOne({ email: req.body.email });

        return u
            ? res.status(200).json({ message: 'E-mail already registered' })
            : res.status(404).json({ message: '' });
    }
};

module.exports = HelperController;