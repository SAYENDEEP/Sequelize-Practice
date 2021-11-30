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
Q1
sequelize.authenticate().then(()=>{
    console.log("Connected to database successfully");
}).catch(err=>{
    console.log("Unable to connect to db,because"+err);
}).finally(()=>{
    sequelize.close();
})
Q2
let StudentTable=sequelize.define('StudentTable',{
    student_id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
      name:Sequelize.STRING,
      stream:Sequelize.STRING,
      marks:Sequelize.INTEGER,
      
},{
    timestamps:false, 
    freezeTableName:true
}
);
   StudentTable.bulkCreate([
            {student_id:10,name:'rohan',stream:'Cse',marks:90},
            {student_id:11,name:'rita',stream:'It',marks:85},
            {student_id:12,name:'Shivam',stream:'ECE',marks:95},
            {student_id:13,name:'suraj',stream:'EEE',marks:80}
        ]).then((data)=>{
            console.log("Records inserted Successfully");
        }).catch((err)=>{
            console.error("Error generated");
        })
Q3
StudentTable.sync({force:true}).then(()=>{
console.log("Table is created successfully");
}).catch((err)=>{
    console.log("Error occurred"+err)
})
Q4
let MovieTable=sequelize.define('MovieTable',{
    MovieId:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    MovieName:Sequelize.STRING,
    TypeofMovie :Sequelize.STRING,
    Language:Sequelize.STRING,
    Cast :Sequelize.STRING
},{
    timestamps:false, 
    freezeTableName:true
}
);
MovieTable.sync().then(()=>{
console.log("Table is created successfully");
}).catch((err)=>{
    console.log("Error occurred"+err)
})
   MovieTable.bulkCreate([
        {MovieId:10,MovieName:'Pink',TypeofMovie:'Comedy',Language:'Hindi',Cast:'Charan'},
        {MovieId:11,MovieName:'Yellow',TypeofMovie:' Triller',Language:'English',Cast:'Charan Singh'},
        {MovieId:12,MovieName:'Blue',TypeofMovie:'Action',Language:'Hindi',Cast:'Tarun'},
        {MovieId:13,MovieName:'Pink',TypeofMovie:'Comedy',Language:'Tamil',Cast:'Sayendeep'},
    ]).then((data)=>{
        console.log("Records inserted Successfully");
    }).catch((err)=>{
        console.error("Error generated");
    })
    MovieTable.findAll().then((data)=>{
    console.log(data);
   }).catch((err)=>{
    console.error("Error is:"+err);
   })
   Q5
let EmployeeTable=sequelize.define('EmployeeTable',{
EmpId:{
        primaryKey:true,
        type:Sequelize.INTEGER
},
    name:Sequelize.STRING,
    dept :Sequelize.STRING,
    designation:Sequelize.STRING
},{
    timestamps:false, 
    freezeTableName:true
}
);
EmployeeTable.sync().then(()=>{
console.log("Table is created successfully");
}).catch((err)=>{
    console.log("Error occurred"+err)
})
  EmployeeTable.bulkCreate([
        {EmpId:1200,name:'Riva', det:'IT',designation:'Fullstack'},
        {EmpId:11,name:'Charan Kumar', dept:'IT',designation:'Fresher'},
        {EmpId:12,name:'Shivam', dept:'MECH',designation:'Trainer'},
        {EmpId:13,name:'Rohan', dept:'CSE',designation:'Consultant'}
    ]).then((data)=>{
        console.log("Records inserted Successfully");
    }).catch((err)=>{
        console.error("Error generated");
    })
    EmployeeTable.findAll({raw:true}).then((data)=>{
    console.log(data);
   }).catch((err)=>{
    console.error("Error is:"+err);
   })

Q6
EmployeeTable.findByPk(1200).then((data)=>{
    console.log(data.dataValues);
}).catch((err)=>{
  console.log("Error is:"+err);
});

Q7
EmployeeTable.findAll({where:{name:'Shivam'},raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is:"+err);
})
Q8
EmployeeTable.findAll({attributes:['name','dept'],raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is:"+err);
})
Q9
EmployeeTable.findAll({where:{dept:'IT'},raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is:"+err);
})
Q10
EmployeeTable.findAndCountAll().then((data)=>{
    console.log("Number of records in Employee Table:"+data.count);
}).catch((err)=>{
    console.error("Error is:"+err);
});
Q11
 EmployeeTable.findAll({order:[['name']],raw:true}).then((data)=>{
     console.log(data);  
}).catch((err)=>{
    console.log("Error is:"+err);
})
Q12 
const value1 =Sequelize.Op;
EmployeeTable.findAll({
    where:{
        name:{
            [value1.like]:'%va'
        }
    },raw:true
}).then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.error("Error is :"+err);
})
Q13
sequelize.query("SELECT * FROM `EmployeeTable`",{type:sequelize.QueryTypes.SELECT}).
then(function(data){
    console.log(data);
})
Q14
const Op= Sequelize.Op;
StudentTable.findAll({
    where:{
        [Op.or]:[{stream:'Cse'},{marks:{[Op.gt]:75}}]
    },
    raw:true
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is:"+err);
})
Q15
 StudentTable.create({
    student_id:14,
    name:'Shiva',
    stream:'Civil',
    marks:50
}).then((data)=>{
    console.log("Record inserted successfully");
}).catch((err)=>{
    console.log("There is an error...");
})
Q16
let StudentObj =StudentTable.build(  {student_id:15,name:'Zeeshan',stream:'Chemical',marks:60});
StudentObj.save();
Q17
StudentTable.bulkCreate([
                {student_id:10,name:'rohan',stream:'Cse',marks:90},
                {student_id:11,name:'rita',stream:'It',marks:85},
                {student_id:12,name:'Shivam',stream:'ECE',marks:95},
                {student_id:13,name:'suraj',stream:'EEE',marks:80}
            ]).then((data)=>{
                console.log("Records inserted Successfully");
            }).catch((err)=>{
                console.error("Error generated");
            })
Q18
 EmployeeTable.update(
    {name:'Bhidi'},
    {where:{name:'Shivam'}}
).then((data)=>{
      console.log("Record Updated Successfully")
}).catch(err=>{
    console.error("Error is"+err);
})
Q19
EmployeeTable.destroy({
    where:{dept:null}

}).then((data)=>{
    console.log("Record deleted successfully...");
}).catch(err=>{
    console.log("Error is:"+err);
});
Q20
StudentTable.drop().then(()=>{
    console.log("Table dropped");
})
Q21
CREATE TABLE Customer1(
    ID int NOT NULL,
    Name_Customer varchar(50),
    Location varchar(50),
    PRIMARY KEY (ID)
    );
    
    CREATE TABLE ProductOrders(
     ProductNumber int NOT NULL,
     ProductDescription varchar (50),
    Cost int,
    ID int,
    PRIMARY KEY (ProductNumber),
    FOREIGN KEY (ID) REFERENCES Customer1 (ID)
    );
    
    INSERT INTO Customer1 VALUE(101,'Sayendeep','Pakisthan');
    INSERT INTO Customer1 VALUE(102,'Tarun','Hyderbad');
    INSERT INTO Customer1 VALUE(103,'Shivam','Srilanka');
    
    INSERT INTO ProductOrders VALUE(1,'Good icecream',19999,101);
    INSERT INTO ProductOrders VALUE(2,'Good cream',19999,102);
    INSERT INTO ProductOrders VALUE(3,'Good buttercream',19999,103);
    
    SELECT c1.Name_Customer,c2.ProductDescription FROM Customer1 c1, ProductOrders c2 WHERE  c1.ID=c2.ID;












   



