const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const User = require('../model/userSchema')
const format = require('date-format');
const authenticate = require('../middleware/authenticate')
require('../db/conn')


router.post('/signup', async (req, res) => {

    const { name, email, password, cpassword } = req.body

    if (!name || !email || !password || !cpassword) {
        return res.status(400).json({ error: "! plz filled all field" })
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(404).send({ error: "already exist" })
        } else {
            const user = new User({ name, email, password, cpassword })
            await user.save()
            return res.status(200).json({ msg: "you are in", noerror: "success" })
        }

    } catch (e) {
        console.log(e);
    }
})

router.post('/signin', async (req, res) => {

    try {

        const { email, password } = req.body;
        const userLogin = await User.findOne({ email })
        if (!userLogin) {
            res.status(400).json({ error: "! Invalid email / password" })
        } else {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            let token = await userLogin.generateAuthToken();
            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 8640000000),
                httpOnly: true
            })

            if (isMatch) {
                res.json({ message: "signed in successfuly" });
            }
            else {
                res.status(400).json({ error: "! Invalid email / password" })
            }
        }

    } catch (err) {
        console.log(err);
    }
})

router.get('/findEvent', authenticate, async (req, res) => {

    const allEvents = req.rootUser.events;
    if (Object.keys(allEvents).length !== 0) {
        var eve = allEvents.map(ele => JSON.parse(ele))
        const dd = format(new Date());

        for (let i = 0; eve && i < eve.length; i++) {
            if (eve[i].date > dd) {
                eve[i].passedAway = true;
            }
            else {
                eve[i].passedAway = false;
            }
        }
        res.send(eve);

    }
    else {
        res.send([{ event: "No Data found" }]);
    }

})

router.post('/addEvent', authenticate, async (req, res) => {
    
    const user = await User.findOne({ _id: req.userID })
    const data = JSON.stringify(req.body.data);
    user.events = user.events.concat(data)
    await user.save()
    res.send({msg : "Task added"})
})


module.exports = router;