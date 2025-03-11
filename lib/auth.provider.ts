import Nodemailer from "next-auth/providers/nodemailer";

export const providers = [ 
    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false, // Ignore self-signed certs
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    
]