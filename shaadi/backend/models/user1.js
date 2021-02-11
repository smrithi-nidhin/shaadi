const mongoose=require('mongoose');

const User1 = mongoose.model('User1',{
    username: String, 
    dob:String,
    martial_status:String,
    height:String,
    weight:String,
    disability:String,
    blood:String, 
    religion:String,
    mother_tongue:String,
    community:String,
    sub_community:String,
    fatherStatus:String,
    motherStatus:String,
    family_location:String,
    native_place:String,
    family_type:String,
    family_values:String,
    diet:String,
    highest_qualification:String,
    college_attened:String,
    working_with:String,
    working_as:String,
    annual_income:String,
    age:String,
    martial_status1:String,
    height1:String,
    religion1:String,
    country_livein:String,
    state_livein:String,
    city:String,
    education:String,
    occupation:String,
    income:String,
   
   
});

module.exports = {
    User1
}
