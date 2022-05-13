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

    handleLogin = async (req, res) => {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        if (user) {
            const checkPass = bcrypt.compareSync(password, user.password);
            if (checkPass)
                return res.status(200).json(user);
            else
                return res.status(500).json({
                    code: 403,
                    message: "Tài khoản hoặc mật khẩu không chính xác!"
                });
        } else {
            return res.status(403).json({
                code: 403,
                message: "Tài khoản hoặc mật khẩu không chính xác!"
            });
        }
    }
};

export default new UserController();
