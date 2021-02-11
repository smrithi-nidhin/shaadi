const { User } =  require("../models/user");
const { User1 } =  require("../models/user1");

let currentUser;


function getUsers(){
    return User1.find({}).select("username dob martial_status  height weight disability blood religion mother_tongue community sub_community fatherStatus motherStatus family_location native_place family_type family_values diet highest_qualification college_attened working_with working_as annual_income age martial_status1 height1 religion1 country_livein state_livein city education occupation income") 
    .then (users=>{
            return{
                statusCode:200,
                users:users
            }
    })
}





function addUser(profilefor,username,gender,email,dob,religion,phn,password){
    return User.findOne({
        username
    })
    .then(user=>{
        if(user){
            return {
                statusCode:400,
                message:"Account already exists"
            }
        }
        const newUser = new User({
            profilefor,username,gender,email,dob,religion,phn,password
        });
        newUser.save();
        return {
            statusCode:200,
            message:"Account created successfully"
        }
    })

}

function addUserdetails(username, dob,martial_status, height,weight,disability, blood, religion, mother_tongue,community,
    sub_community,fatherStatus,motherStatus,family_location,native_place,family_type,family_values,diet,highest_qualification,
    college_attened,working_with,working_as,annual_income,age,martial_status1,height1,religion1,
    country_livein,state_livein,city,education,occupation,income){
        return User1.findOne({
            username
        })
        .then(user1=>{
            if(user1){
                return {
                    statusCode:400,
                    message:"Account already exists"
                }
            }
    
        const newUser1 = new User1({username, dob,martial_status, height,weight,disability, blood, religion, mother_tongue,community,
            sub_community,fatherStatus,motherStatus,family_location,native_place,family_type,family_values,diet,highest_qualification,
            college_attened,working_with,working_as,annual_income,age,martial_status1,height1,religion1,
            country_livein,state_livein,city,education,occupation,income
        });
        newUser1.save();
        return {
            statusCode:200,
            message:"Account created successfully"
        }
    })

}

function login(username,password){
    return User.findOne({
        username,
        password
    })
    .then(user=>{
        if(user){
            let record1=user.username
            console.log(record1)
            return {
                statusCode:200,
                record:user,
                message:"Logged in successfully"
            };
        }
        return {
            statusCode:400,
            message:"Invalid credentials"
        }
    })
    
}
function setCurrentUser(username){
    console.log("Express Shaadi setCurrentUSer"+username)
    currentUser=username;
}

function getCurrentUser(){
    return currentUser;
}

module.exports={
    getUsers:getUsers,
    addUser:addUser,
    addUserdetails:addUserdetails,
    login:login,
    setCurrentUser:setCurrentUser,
    getCurrentUser:getCurrentUser,
 
}