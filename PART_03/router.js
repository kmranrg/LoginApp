var express = require('express');
var router = express.Router();

const credential = {
    email: 'kmranrg@smartgurucool.com',
    password: 'anurag123'
};

// login user
router.post('/login', (req, res) => {
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        //res.redirect('/dashboard');
        res.end("Login Successful...!!");
    }else{
        res.end('Invalid Credential');
    }
});

module.exports = router;