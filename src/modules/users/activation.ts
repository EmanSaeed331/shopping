import sgMail from '@sendgrid/mail';
import "dotenv/config";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string )

export const activationMsg = (email:string,name:string,token:any) => {
    const msg = {
        to:   email, // Change to your recipient
        from: 'es9557403@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        link:`http://"+req.headers.host+"/api/auth/verify/+${token}`,
        html: 
        ` <body>
              <p>Hi ${name}<p><br><p>Please click on the following <a href="yoururl/email/activation/${token}">Verify account</a> to verify your account.</p>
          <body>
          `,
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
}
