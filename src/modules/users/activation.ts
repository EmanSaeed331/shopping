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
        html: `<p>Hi ${name}<p><br><p>Please click on the following <a href="#">link</a> to verify your account.</p>`,
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
