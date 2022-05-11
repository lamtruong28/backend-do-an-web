import User from "../models/User.js";
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10)

class UserController {

    getUserInfo = async (req, res) => {
        const user = await User.findOne({ _id: req.params.id });
        res.status(200).json(user);
    }

    createUser = async (req, res) => {
        const { userName, password } = req.body;
        const passwordHash = bcrypt.hashSync(password, salt);
        const user = new User({
            userName,
            password: passwordHash
        });
        await user.save();
        res.status(200).json(user);
    };

    updateUser = async (req, res) => {
        const user = await User.findByIdAndUpdate({ _id: req.params.id }, {
            displayName: req.body.displayName
        }, { new: true });
        res.status(200).json(user);
    }
};

export default new UserController();
