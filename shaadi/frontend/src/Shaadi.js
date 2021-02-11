import axios from 'axios';
const baseUrl = "http://localhost:4000";


class Shaadi{

   static registration(profilefor,username,gender,email,dob,religion,phn,password,confirmpassword){
    return axios.post(baseUrl+"/users/register",{
        profilefor,
        username,
        gender,
        email,
        dob,
        religion,
        phn, 
        password,
        confirmpassword,
       
    })
}
static registration1(username,dob,martial_status, height,weight,disability, blood, religion, 
    mother_tongue,community,sub_community,fatherStatus,motherStatus,family_location,native_place,
    family_type,family_values,diet,highest_qualification, college_attened,working_with,working_as,
    annual_income,age,martial_status1,height1,religion1,country_livein,state_livein,city,education,occupation,income){
    return axios.post(baseUrl+"/users/basic_details",{       
        username,      
        dob,
        martial_status,
        height,
        weight,
        disability,
        blood,
        religion,
        mother_tongue,community,
        sub_community,
        fatherStatus,motherStatus,
        family_location,native_place,family_type,family_values,diet,highest_qualification, 
        college_attened,working_with,working_as,annual_income,age,martial_status1,height1,
        religion1,country_livein,state_livein,city,education,occupation,income
    })
}

static login(username,password){
    return axios.post(baseUrl+"/users/login",{
        username,
        password
    }, { withCredentials:true })
}
static getUsers(){
      
    return axios.get(baseUrl+"/users",
    {withCredentials:true});
}



}
export default Shaadi;