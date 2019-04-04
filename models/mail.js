const nodemailer = require("nodemailer");
var obj = {
    sendMail: async function (obj,callback) {
        console.log("sendMail() called " , obj);
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "medskyy@gmail.com", // generated ethereal user
                pass: "nopassword1234" // generated ethereal password
            }
        });
        let mailOptions = {
            from: 'GPSBased TOLL COLLECTION SYSTEM', // sender address
            to: obj.receiver, // list of receivers
            subject: obj.subject, // Subject line
            text: obj.text, // plain text body
            html: obj.text // html body
        };
        let info = await transporter.sendMail(mailOptions,callback);

        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    },
};
module.exports = obj;