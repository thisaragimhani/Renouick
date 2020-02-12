//routes for authenticating when logging in
const express = require('express');
const router = express.Router();
const config = require('config');
//for json web token
const jwt = require('jsonwebtoken');

//user model
const User = require('../models/User.model');

const StreamChat = require('stream-chat').StreamChat;

//@route POST auth
//@desc authenticate user

router.post('/', (req,res) => {
    const { email, password } = req.body;

    //check if the user exist
    User.findOne({email})
        .then(user => {
            if(!user)  
                return res.status(400).json({msg: 'User does not exist'});

            if(password !== user.password)
                return res.status(400).json({msg: 'invalid username or password'});
            else {
                var n = email.indexOf("@");
                var name = email.slice(0, n);
                //console.log(name);
                const client = new StreamChat('', 'sxhtaj7v5b2ehk3paehfpn7k6w7jq6msp6jkndwvx5cf8p9prmn5ag34nyex4caj');
                const chatToken = client.createToken(name);
                jwt.sign(
                    {id: user.id},
                    config.get('jwtSecret'),
                    {expiresIn: 3600},
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            chatToken,
                            user: {
                                email: user.email,
                                userType: user.userType,
                                expiresIn: 3600
                            }
                        });
                    }
                )
            }        
        })
})

module.exports = router;