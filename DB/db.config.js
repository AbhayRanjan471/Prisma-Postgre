import {PrismaClient} from "@prisma/client"  //  PrismaClient: This is the class provided by Prisma that allows you to interact with your database. When you create an instance of PrismaClient, it provides you with methods to perform CRUD (Create, Read, Update, Delete) operations on your database. 

//This initializes a new instance of PrismaClient. This instance will be used to interact with your database (e.g., to make queries, mutations, etc.).
const prisma = new PrismaClient({
  log: ["query"], //["query"] means that Prisma will log the SQL queries sent to the database , in the terminal
});

export default prisma;