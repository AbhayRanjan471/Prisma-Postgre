# npm init -y   //to install package.json
# npm i express
# npm run server   // to start the server
# npm i dotenv

************* PRISMA *************
documention link: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql

# npm install prisma
# npx prisma init       // set up your Prisma ORM project by creating your Prisma Schema
# npx prisma migrate dev --name Name_of_the_DataBase // to create the schema in the database
# npm install @prisma/client       //The @prisma/client library provides a programmatic interface to work with your database. It allows you to perform operations like querying, inserting, updating, and deleting records without writing raw SQL.


/************************************ CRUD Command in PRISMA **************************************/
# .create
# .findMany()
# .findUnique()
# .update()
# .delete()


/********************************** Relationship command in PRISMA *******************************/
# where
# include
# select
# orderBy



/**************************** Search & filter ******************************************/
# https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting#sort-by-relevance-postgresql-and-mysql
# Prisma Client supports filtering with the "where" query option, and sorting with the "orderBy" query option.

# //Search only those data whose comment count > 0
      where:{
         // Filters records where the comment_count > 0"
         comment_count:{ // this field is present in the Post schema
           gt:0,  // greater then
         }
      }

#  // Filters records where the title starts with "hey buddy"
      where:{
        title: {
          startsWith: "hey buddy",
        }
      }      

#  // Filters records where the title endsWith with "hey buddy"
      where:{
        title: {
          endsWith: "hey buddy",
        }
      }       

/************************ Full-text search *****************************/
# https://www.prisma.io/docs/orm/prisma-client/queries/full-text-search  

# npx prisma generate



/************************** Paginatiuon *********************************/
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 100;  // (100 posts per page).

const skip = (page - 1) * limit;

Skip Records for Each Page
Page 1: (1 - 1) * 100 = 0 → Skip 0 records.
Page 2: (2 - 1) * 100 = 100 → Skip the first 100 records.
Page 3: (3 - 1) * 100 = 200 → Skip the first 200 records.

totalPosts = 450;
limit = 100
totalPages = Math.ceil(450 / 100) = 5;

/************************ Node Mailer *************************************/
# npm install nodemailer


import nodemailer from 'nodemailer'  //Nodemailer is used for sending emails
import dotenv from "dotenv"

dotenv.config();


const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io", // Mailtrap SMTP server
  port: 2525, // Mailtrap SMTP port, use for the connection

  auth: {   //auth: Authentication information (username and password) needed to authenticate with the SMTP server.
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default transporter;


// Send a welcome email to the user
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender email
    to: email, // Recipient email (new user's email)
    subject: "Welcome to Our Platform!",
    text: `Hi ${name},\n\nWelcome to our platform! We're excited to have you on board.\n\nBest regards,\nThe Team`,
  };

  //transporter.sendMail() sends an email based on the configurations set in mailOptions.
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
