var Sequelize = require('sequelize');
var dbConfig =require('./db.config');

var sequelize= new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
   host:dbConfig.HOST,
   dialect:dbConfig.dialect,
   logging:false,
   pool:{
       min:dbConfig.pool.min,
       max:dbConfig.pool.max,
       acquire:dbConfig.pool.acquire,
       idle:dbConfig.pool.idle
   }
});
sequelize.authenticate().then(()=>{
    console.log("Connected to databse successfully..");
}).catch(err=>{
    console.log("Unable to connect to db,because"+err);
}).finally(()=>{
    sequelize.close();
})

