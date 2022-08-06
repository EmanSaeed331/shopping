import 'dotenv/config';
import cloudinary from '../CloudConfig/cloudinary';
import path from 'path';
import sgMail from '@sendgrid/mail';
import { Request } from 'express';
import DatauriParser from 'datauri/parser';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export function uploader(req:Request) {
   return new Promise((resolve, reject) => {
   // const dUri =  Datauri('test/myfile.png');
    const parser = new DatauriParser();
  /*   const orignalFile =req.file.originalname;*/
    /* const bufferFile =req.file.buffer;  */
  
    const filename = new Date()
    const image = parser.format(path.extname(`${filename}image.png`),req.body.file.buffer);
    cloudinary.uploader.upload(image.content as string , (err:any,url:any)=>{
        if(err) return reject(err);
        return resolve(url);

    })
}); 
}
 
function sendEmail(mailOptions:any) {
    return sgMail
    .send(mailOptions)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = {  sendEmail };