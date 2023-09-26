import admins from '../../../models/admins';
import connect from '../../../utils/mongoDBConnector';
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    try {
        await connect();


        if (req.method === "POST") {
            const {
                email,
                name,
                password
            } = req.body;
            const exists = await admins.findOne({
                email: email
            });
            
            if (exists) {
                return res.status(401).json({
                    error: "Admin Already Exists"
                });
            }
            let salt = await bcrypt.genSalt(10)
            let p = await bcrypt.hashSync(password, salt);
            const admin = new admins({
                email: email,
                name: name,
                password: p,
                adminLevel:'Admin'
            });
            await admin.save();


            return res.status(200).json({
                message: "Admin created Successfully"
            });
        } else {
            return res.status(404).end();
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "We can't process your request at the moment. Please try again later"
        });
    }
}


export default handler;