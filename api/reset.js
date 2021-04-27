const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const crypto = require('crypto');
const isEmail = require('validator/lib/isEmail');
const baseUrl = require('../utils/baseUrl');

const options = {
  auth: {
    api_key: process.env.SEND_GRID_API_KEY,
  },
};

const mailer = nodemailer.createTransport(sendGridTransport(options));

//check if user exist and send email for reset password
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    if (!isEmail(email)) {
      return res.status(400).send('enter a correct email address');
    }

    const user = await UserModel.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).send('user not found');
    }

    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = token;
    //token is only going to be valid one hour from the time it was generated
    user.expireToken = Date.now() + 3600000;

    await user.save();

    const href = `${baseUrl}/reset/${token}`;

    var mailOptions = {
      to: user.email,
      from: 'admin@socialmedia.com',
      subject: 'Hi there Password reset request',
      html: `<p>Hey ${
        user.modelName.split(' ')[0]
      }, There was a request for password reset. <a href=${href}>Click this link to reset your password</a> </p>
      <p> This token is only valid for 1 hour  </p>
      `,
    };

    mailer.sendMail(mailOptions, function (err, res) {
      if (err) {
        console.log(err);
      }
      return res.status(200).send('Email sent successfully');
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('server error');
  }
});

//verify reset password token and reset password
router.post('/token', async (req, res) => {
  try {
    const { token, password } = req.body;
    //we can instead decide to send the token as a url parameter instead of from the body
    if (!token) {
      return res.status(403).send('Forbiden');
    }

    if (password.length < 6)
      return res
        .status(400)
        .send('password must be greater than six characters');

    const user = await UserModel.findOne({ resetToken: token });

    if (!user) {
      return res.status(404).send('user not found');
    }

    //check if token has expired

    if (Date.now() > user.expireToken) {
      return res.status(401).send('token expired.generate a new one');
    }

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    user.resetToken = '';
    user.expireToken = undefined;

    await user.save();

    return res.status(200).send('Password reseted');
    //we can also just send my email to tell the user the password was reseted
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('server error');
  }
});

module.exports = router;
