var express = require('express');
const shaadi = require('../services/shaadi');
var router = express.Router();
var Shaadi = require('../services/shaadi');
function authMiddleware(req,res,next){
  console.log("Inside authMiddleware");
  if(req.session.currentUser){
    next();
  }
  else{    
    res.staus(401).send({message:"Please login"});
  }
}
/* GET users listing. */

router.get('/', function(req, res) {
  Shaadi.getUsers()
  .then(data=>{
    res.status(data.statusCode).send({message:data.message,users:data.users});
  });
});



router.post('/register',function(req, res) {
  let profilefor=req.body.profilefor;
  let usname=req.body.username;
  let gender=req.body.gender;
  let pwd=req.body.password;
  let phn=req.body.phn;
  let email=req.body.email;
  let dob=req.body.dob;
  let religion=req.body.religion;
  let confirmpassword=req.body.confirmpassword;
  if(pwd!=confirmpassword){
    res.status(400).send({message:"password and confirm password doesnot match"});
  }
  else{
    Shaadi.addUser(profilefor,usname,gender,email,dob,religion,phn,pwd)
    .then(data=>{
      res.status(data.statusCode).send({message:data.message});
    } )
   
  }

});
router.post('/basic_details',function(req, res) {


  let usname=req.body.username;
  let dob=req.body.dob;
  let martial_status=req.body.martial_status;
  let height=req.body.height;
  let weight=req.body.weight;
  let disability=req.body.disability;
  let blood=req.body.blood;
  let religion=req.body.religion;
  let mother_tongue=req.body.mother_tongue;
  let community=req.body.community;
  let sub_community=req.body.sub_community;
  let fatherStatus=req.body.fatherStatus;
  let motherStatus=req.body.motherStatus;
  let family_location=req.body.family_location;
  let native_place=req.body.native_place;
  let family_type=req.body.family_type;
  let family_values=req.body.family_values;
  let diet=req.body.diet;
  let highest_qualification=req.body.highest_qualification;
  let college_attened=req.body.college_attened;
  let working_with=req.body.working_with;
  let working_as=req.body.working_as;
  let annual_income=req.body.annual_income;
  let age=req.body.age;
  let martial_status1=req.body.martial_status1;
  let height1=req.body.height1;
  let religion1=req.body.religion1;
  let country_livein=req.body.country_livein;
  let state_livein=req.body.state_livein;
  let city=req.body.city;
  let education=req.body.education;
  let occupation=req.body.occupation;
  let income=req.body.income;
    Shaadi.addUserdetails(usname, dob,martial_status, height,weight,disability, blood, religion, mother_tongue,community,
      sub_community,fatherStatus,motherStatus,family_location,native_place,family_type,family_values,diet,highest_qualification,
      college_attened,working_with,working_as,annual_income,age,martial_status1,height1,religion1,
      country_livein,state_livein,city,education,occupation,income)
    .then(data=>{
      res.status(data.statusCode).send({message:data.message});
    } )
   
  

});

router.post('/login',function(req, res) {
  console.log("In Login Router");
  let username=req.body.username;
  let password=req.body.password;
  console.log(username);
  console.log(password);
  Shaadi.login(username,password)
  .then(data=>{
    if(data.statusCode==200){
      req.session.currentUser=username;
    }
    res.status(data.statusCode).send({message:data.message,record:data.record});
  }) 
});



module.exports = router;
