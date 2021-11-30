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
// let userSequelize= sequelize.define('UserSequelize',{
//   UserId:Sequelize.STRING,
//   password:Sequelize.STRING,
//   Role:Sequelize.STRING
// },{
//    timestamps:false,
//    freezeTablename:true
// });
// userSequelize.sync({force:true}).then(()=>{
//     console.log("Table created successfully...");
// }).finally(()=>{
//     sequelize.close();
// })


let productTable = sequelize.define('ProductSequelize',{
    Product_ID:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    ProductName :Sequelize.STRING,
    Description: Sequelize.STRING,
    cost:Sequelize.INTEGER
},{
    timestamps:false,
    freezeTableName:true
});


// productTable.sync().then(()=>{
//     console.log("Table crested successfully")
// }).catch((err)=>{
//     console.error("Error is "+err);
// }).finally(()=>{
//     sequelize.close();
// })
// productTable.findByPk(102).then((data)=>{
//     console.log(data.dataValues);
// }).catch((err)=>{
//   console.log("Error is:"+err);
// });
// productTable.findAll({raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("Error is:"+err);
// })

// productTable.findAll({where:{ProductName:'Mobile'},raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("Error is:"+err);
// })


// productTable.findAll({attributes:['ProductName','cost'],raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("Error is:"+err);
// })

// productTable.findAndCountAll().then((data)=>{
//     console.log("Number of records:"+data.count);
// }).catch((err)=>{
//     console.error("Error is:"+err);
// });
// productTable.findAndCountAll({where:{ProductName:'Ac'}}).then((data)=>{
//      console.log("Number of records are:"+data.count);  
// }).catch((err)=>{
//     console.log("Error is:"+err);
// })
//  productTable.findAll({order:['Productname'],raw:true}).then((data)=>{
//      console.log(data);  
// }).catch((err)=>{
//     console.log("Error is:"+err);
// })
// productTable.findAll(
//     {order:[['Productname',"DESC"]],raw:true}).then((data)=>{
//     console.log(data);  
// }).catch((err)=>{
//    console.log("Error is:"+err);
// })

//Like in Select

// const value1 =Sequelize.Op;

// productTable.findAll({
//     where:{
//         ProductName:{
//             [value1.like]:'%bile'
//         }
//     },raw:true
// }).then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.error("Error is :"+err);
// })

// sequelize.query("SELECT * FROM `ProductSequelize`",{type:sequelize.QueryTypes.SELECT}).
// then(function(data){
//     console.log(data);
// })
//Or operator
// const Op= Sequelize.Op;
// productTable.findAll({
//     where:{
//         [Op.or]:[{ProductName:'Mobile'},{cost:3200}]
//     },
//     raw:true
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("Error is:"+err);
// })
//And operator
// const Op= Sequelize.Op;
// productTable.findAll({
//     where:{
//         [Op.and]:[{ProductName:'Ac'},{cost:3200}]
//     },
//     raw:true
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("Error is:"+err);
// })
//  productTable.create({
//     Product_ID:107,
//     ProductName:'Cooler',
//     Description:'Good Cooler',
//     cost:5500
// }).then((data)=>{
//     console.log("Record inserted successfully");
// }).catch((err)=>{
//     console.log("There is an error...");
// })
// let productObj =productTable.build({Product_ID:109,ProductName:'Wall Clock',Description:'Good WallClock',cost:1088});
// productObj.save();


// productTable.bulkCreate([
//     {Product_ID:110,ProductName:'Smart Watch',Description:'Good Smart Watch',cost:1999},
//     {Product_ID:111,ProductName:'Router',Description:'Good Router',cost:5999},
//     {Product_ID:112,ProductName:'Laptop',Description:'Good Laptop',cost:29999},
//     {Product_ID:113,ProductName:'Generator',Description:'Good Generator',cost:9999}
// ]).then((data)=>{
//     console.log("Records inserted Successfully");
// }).catch((err)=>{
//     console.error("Error generated");
// })

// productTable.update(
//     {ProductName:'Smart Mobile'},
//     {where:{ProductName:'Mobile'}}
// ).then((data)=>{
//       console.log("Record Updated Successfully")
// }).catch(err=>{
//     console.error("Error is"+err);
// })
//  productTable.update(
//     {ProductName:'Alexa'},
//     {where:{ProductName:''}}
// ).then((data)=>{
//       console.log("Record Updated Successfully")
// }).catch(err=>{
//     console.error("Error is"+err);
// })
// productTable.destroy({
//     where:{ProductName:null}

// }).then((data)=>{
//     console.log("Record deleted successfully...");
// }).catch(err=>{
//     console.log("Error is:"+err);
// });
productTable.drop().then(()=>{
    console.log("Table dropped");
}
)

