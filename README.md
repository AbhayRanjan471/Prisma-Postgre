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
