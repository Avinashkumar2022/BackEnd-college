const{Sequelize}=require('sequelize');

//Initialise sequelize with your PostgreSQL database credentials
const sequelize=new Sequelize('db1','postgres','1234',{
    host:'localhost',
    dialect:'postgres', //Specify the dialect for PostgreSQL
})

module.exports=sequelize;