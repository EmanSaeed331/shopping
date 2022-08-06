// Email Veriffication 
//  Resend Token 
//  Send  verification Email 
import sgMail from '@sendgrid/mail';
import "dotenv/config";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

 export const sendVerificationEmail  = (email:string, name:string, token:any) => {
    const msg:any = {
        to:   email, 
        from: process.env.FROM_EMAIL, 
        subject: 'Account Verification Token',
        text: 'and easy to do anywhere, even with Node.js',
        link:`http://"+req.headers.host+"/api/auth/verify/+${token}`,
        html: 
        `
             <p>Hi ${name}<p><br><p>Please click on the following <a href="yoururl/password/reset/${token}">Reset password</a> to verify your account.</p>
         
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
