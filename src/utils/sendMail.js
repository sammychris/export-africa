const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
  'f0bda026c3eb028f5e07db52f2f3872d',
  '812093dd5bc913d7045e17e839a64a4e',
);
  //   const mailjet = Mailjet.apiConnect(
  //     process.env.MJ_APIKEY_PUBLIC,
  //     process.env.MJ_APIKEY_PRIVATE,
  // );







const sendVerificationEmail = async (email, verificationToken) => {
  // const transporter = nodemailer.createTransport({
  //   service: process.env.EMAIL_SERVICE, 
  //   auth: {
  //     user: process.env.EMAIL_USERNAME,
  //     pass: process.env.EMAIL_PASSWORD,
  //   },
  // });

  // const transporter = nodemailer.createTransport({
  //   host: "smtp-relay.brevo.com",
  //   port: 587,
  //   // secure: true,
  //   secure: false,
  //   auth: {
  //     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
  //     user: "ebusameric@gmail.com",
  //     pass: "K5xvDpfjWg9N6aVm",
  //   },
  // });

  // const mailOptions = {
  //   from: 'ebusameric@gmail.com', 
  //   to: email,
  //   subject: 'Verify your email',
  //   text: `Please click this link to verify: http://your-app.com/verify?token=${verificationToken}`,
  // };

  // try {
  //   const response = await transporter.sendMail(mailOptions);
  //   console.log('Verification email sent successfully!', {response}); // Optional success logging
  // } catch (error) {
  //   console.error('Error sending verification email:', error);
  //   throw error; // Propagate the error for handling in the caller
  // }

  const request = mailjet
    .post('send', { 'version': 'v3.1' })
    .request({
      'Messages': [
          {
              'From': {
                  'Email': 'ebusameric@gmail.com',
                  'Name': 'Samuel Christopher'
              },
              'To': [
                  {
                      'Email': email,
                      'Name': 'Recipient Name'
                  }
              ],
              // 'Subject': 'Email from Node.js and Mailjet',
              // 'TextPart': 'Hello there! This is a test email sent using Node.js and Mailjet.',
              'Subject': 'Welcome to Our App - Verify Your Email',
              'TextPart': `Please click this link to verify: http://localhost:3000/verify?token=${verificationToken}`,
              // You can also use 'HTMLPart' for html content
              HTMLPart: `
                <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Welcome to Our App - Verify Your Email</title>
                    </head>
                    <body>
                        <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; color: #333;">
                            <div style="width: 600px; margin: 50px auto; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); padding: 30px;"> 
                                <div style="text-align: center;">
                                    <img src="https://www.yourcompany.com/logo.png" alt="Your Company Logo" style="max-width: 150px;"> 
                                    <h1 style="color: #2196F3; margin-top: 0;">Welcome to Our App!</h1>
                                </div>

                                <p style="margin-bottom: 30px;">
                                    Thank you for joining our app! Please verify your email address to complete your registration.
                                </p>

                                <a href="http://localhost:3000/verify?token=${verificationToken}" 
                                  style="background-color: #2196F3; color: white; padding: 15px 30px; text-align: center; text-decoration: none; display: block; margin: 30px auto; border-radius: 5px; font-weight: bold;">
                                    Verify Your Email
                                </a>

                                <p style="margin-bottom: 30px;">
                                    If you did not sign up for our app, please ignore this email.
                                </p>

                                <div style="text-align: center; font-size: 12px; color: #666;">
                                    &copy; 2024 Your Company Name
                                </div>
                            </div>
                        </div>
                    </body>
                    </html>
              `,
          }
      ]
  });

request
  .then((result) => {
      console.log('Email sent successfully:', result.body);
  })
  .catch((err) => {
      console.error('Error sending email:', err);
  });
};

export { sendVerificationEmail };
