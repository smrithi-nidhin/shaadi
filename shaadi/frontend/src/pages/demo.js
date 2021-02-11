import React, { Component } from 'react';
import Shaadi from '../Shaadi';

import swal from 'sweetalert';

import { withRouter } from 'react-router';
import { Formik, Form, Field } from 'formik';
import * as Yup  from 'yup';
const RegisterSchema1 = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    dob: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    martial_status: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    height: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    weight: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    religion1: Yup.string(),
    blood:Yup.string()
  
  });
class Basic_details extends React.Component {
    state = {
        selectValue: "NA",
        religionValue:"NA",
        disability: "",
        family_type:"",
        family_values:"",
        diet:"",

      }
      
      onRadioChange1 = (event) => {
        this.setState({ disability: event.target.value });
        alert(event.target.value);
      }
      onRadioChange2 = (event) => {
        this.setState({ family_type: event.target.value });
        alert(event.target.value);
      }
      onRadioChange3 = (event) => {
        this.setState({ family_values: event.target.value });
        alert(event.target.value);
      }
      onRadioChange4 = (event) => {
        this.setState({ diet: event.target.value });
        alert(event.target.value);
      }

      martialChange = (event) => {
        this.setState({ maritalValue: event.target.value });
        alert(event.target.value);
      }
      religionChange = (event) => {
        this.setState({ religionValue: event.target.value });
        alert(event.target.value);
      }
      mothertongueChange = (event) => {
        this.setState({ mothertongueValue: event.target.value });
        alert(event.target.value);
      }
      communityChange = (event) => {
        this.setState({ communityValue: event.target.value });
        alert(event.target.value);
      }
      fatherStatusChange = (event) => {
        this.setState({ fatherStatusValue: event.target.value });
        alert(event.target.value);
      }
      motherStatusChange = (event) => {
        this.setState({ motherStatusValue: event.target.value });
        alert(event.target.value);
      }
      workingChange = (event) => {
        this.setState({ workingValue: event.target.value });
        alert(event.target.value);
      }
      onSubmit = (values) => {
          alert("hghg")
      //event.preventDefault();
        let usname = values.username;
        let dob = values.dob;
        let martial_status = this.state.maritalValue;
        let height = values.height;
        let weight = values.weight;
        let disability=this.state.disability;
        let blood = values.blood;

        let religion=this.state.religionValue;    
        let mother_tongue=this.state.mothertongueValue;       
        let community=this.state.communityValue;       
        let sub_community = values.sub_community;
        
        let fatherStatus=this.state.fatherStatusValue;       
        let motherStatus=this.state.motherStatusValue;       
        let family_location = values.family_location;
        let native_place = values.native_place;
        let family_type=this.state.family_type;
        let family_values=this.state.family_values;

        let diet=this.state.diet;

        let highest_qualification = values.highest_qualification;
        let college_attened = values.college_attened;
        let working_with=this.state.workingValue;
        let working_as = values.working_as;
        let annual_income = values.annual_income;

        let age = values.age;
        let martial_status1 = values.martial_status1;
        let height1 = values.height1;
        let religion1 = values.religion1;
        let country_livein = values.country_livein;
        let state_livein = values.state_livein;
        let city = values.city;
        let education = values.education;
        let occupation = values.occupation;
        let income = values.income;
    
        Shaadi.registration1(usname, dob,martial_status, height,weight,disability, blood, religion, mother_tongue,community,
            sub_community,fatherStatus,motherStatus,family_location,native_place,family_type,family_values,diet,highest_qualification,
            college_attened,working_with,working_as,annual_income,age,martial_status1,height1,religion1,
            country_livein,state_livein,city,education,occupation,income)
          .then(data => {
            this.setState({
              providerObject: data.data.providers
            });
            swal("Registration successful", "success", "success");
            this.props.history.push("/");
          })
          .catch(err => {
            swal("Registration failed", "failed", "error")
          });
    
    
      }
  render() {
    return (
        <div>
        <header>
          {/*  Navigation Start */}
          <div className="navbar navbar-inverse-blue navbar">
            {/*<div class="navbar navbar-inverse-blue navbar-fixed-top">*/}
            <div className="navbar-inner">
              <div className="container">
                <div className="menu">
                  <div className="cd-dropdown-wrapper">
                   <h1>Shaddi.com</h1>
                  </div> 
                </div>
                <div className="pull-right">
                  <nav className="navbar nav_bottom" role="navigation">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header nav_2">
                      <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">Menu
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div> 
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                      <ul className="nav navbar-nav nav_1">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="search.html">Search</a></li>
                        <li><a href="app.html" target="_blank">Mobile</a></li>
                       
                       
                        <li className="last"><a href="contact.html">Contacts</a></li>
                      </ul>
                    </div>{/* /.navbar-collapse */}
                  </nav>
                </div> {/* end pull-right */}
                <div className="clearfix"> </div>
              </div> {/* end container */}
            </div> {/* end navbar-inner */}
          </div> {/* end navbar-inverse-blue */}
          {/*  Navigation End */}
        </header>
        {/* /header */}
        {/* inner banner */}	
        <div className="w3layouts-inner-banner">
          <div className="container">
            <div className="logo">
              <h1><a className="cd-logo link link--takiri" href="index.html">Shaadi.com <span><i className="fa fa-heart" aria-hidden="true" />Made in heaven.</span></a></h1>
            <br></br> <br></br> <br></br>
            <h1 style={{color:"white",paddingLeft:"400px"}}>Let's create your Profile now</h1>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      




{/* sample */}



<div className="w3ls-list">       
          <div className="container" style={{backgroundColor:"white"}}>
           
            <p className="text-right"><span style={{ color: 'red', fontWeight: 100 }}>*</span>Mandatory</p>
            <Formik
              initialValues={{
                username: "",
                dob: "",
                martial_status:"",
                height: "",
                weight: "",
                disability: "",
                blood: "",
                religion:"",
                mother_tongue:"",
                community:"",
                sub_community:"",
                fatherStatus:"",
                motherStatus:"",
                family_location:"",
                native_place:"",
                family_type:"",
                family_values:"",
                diet:"",
                highest_qualification:"",
                college_attened:"",
                working_with:"",
                working_as:"",
                annual_income:"",
                age:"",
                martial_status1:"",
                height1:"",
                religion1:"",
                country_livein:"",
                state_livein:"",
                city:"",
                education:"",
                occupation:"",
                income:""
              }}
              validationSchema={RegisterSchema1}
              onSubmit={this.onSubmit} >
              {({ errors, touched }) => (
                <Form>
                  <div className="col-md-12"> 

                  <h1>Basic Info</h1>
                 
                  <div className="agileits" >
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Name:</label>
                      <Field name="username" className="form-control" /><br />
                      {errors.username ? <div>{errors.username}</div> : null}

                    </div>  
                  <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Date of Birth:</label>
                      <Field name="dob" className="form-control" /><br />
                      {errors.dob ? <div>{errors.dob}</div> : null}

                    </div>
                   
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Marital Status:</label>
                      <select name="marital_status"
                        value={this.state.maritalValue}
                        onChange={this.martialChange} className="form-control">
                        <option value="NA">--Select--</option>
                        <option value="Never_Married">Never Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Awaiting_Divorce">Awaiting Divorce</option>
                     
                      </select>
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Height:</label>
                      <Field name="height" className="form-control" /><br />
                      {errors.height ? <div>{errors.height}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Body weight:</label>
                      <Field name="weight" className="form-control" /><br />
                      {errors.weight ? <div>{errors.weight}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Any Disability :</label>
                      <Field 
                  type="radio"
                  value="none"
                  checked={this.state.disability === "none"}
                  onChange={this.onRadioChange1}
                />None
                <Field 
                  type="radio"
                  value="physical_disability"
                  checked={this.state.disability === "physical_disability"}
                  onChange={this.onRadioChange1}
                />Physical Disability
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Blood Group:</label>
                      <Field name="blood" className="form-control" /><br />
                      {errors.blood ? <div>{errors.blood}</div> : null}

                    </div>
                 
                    
                    
                    <br></br>
                    <h1>Religious Background</h1>
                  
                  <div className="agileits">
                  <label><span style={{color: 'red', fontWeight: 100}}>*</span>Religion:</label>
                  <select name="religion"
                        value={this.state.religionValue}
                        onChange={this.religionChange} className="form-control">
						<option value="select">--Select--</option>  
						<option value="Muslim">Muslim</option>   
						<option value="Hindu">Hindu</option>   
						<option value="Christian">Christian</option>   
						<option value="Sikh">Sikh</option>   
						<option value="Jain">Jain</option>
						<option value="Buddhist">Buddhist</option>  
						<option value="No_Religious_Belief">No Religious Belief</option>   					
					</select>
                </div> 
                <div className="agileits">
                  <label><span style={{color: 'red', fontWeight: 100}}>*</span>Mother Tongue:</label>
                  <select name="mother_tongue"
                        value={this.state.mothertongueValue}
                        onChange={this.mothertongueChange} className="form-control">
						<option value="select">--Select--</option>  
						<option value="Malayalam">Malayalam</option>   
						<option value="English">English</option>   
						<option value="Bengali">Bengali</option>   
						<option value="Hindi">Hindi</option>   
						<option value="Marathi">Marathi</option>
						<option value="Telugu">Telugu</option>  
						<option value="Tamil">Tamil</option>  
						<option value="Kannada">Kannada</option>   					
						<option value="Odia">Odia</option>   					
						<option value="Gujarati">Gujarati</option>   					

					</select>
                </div>
                   
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Community:</label>
                      <select name="community"
                        value={this.state.communityValue}
                        onChange={this.communityChange} className="form-control">
						<option value="select">--Select--</option>  
						<option value="Arabic">Arabic</option>   
						<option value="Hindi">Hindi</option>   
						<option value="Marathi">Marathi</option>   
						<option value="Punjabi">Punjabi</option>   
						<option value="Bengali">Bengali</option>
						<option value="Gujarati">Gujarati</option>  
						<option value="Urdu">Urdu</option>  
						<option value="Telugu">Telugu</option>   					
						<option value="Kannada">Kannada</option>   					
						<option value="Tamil">Tamil</option>   					

					</select>
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Sub Community:</label>
                      <Field name="sub_community" className="form-control" /><br />
                      {errors.sub_community ? <div>{errors.sub_community}</div> : null}

                    </div>
                   
                   
                    <br></br>
                  <h1>Family</h1>
               
                     
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Father's Status:</label>
                      <select name="fatherStatus"
                        value={this.state.fatherStatusValue}
                        onChange={this.fatherStatusChange} className="form-control">
                        <option value="NA">--Select--</option>
                        <option value="Employed">Employed</option>
                        <option value="Business">Business</option>
                        <option value="Retired">Retired</option>
                        <option value="Not-Employed">Not Employed</option>
                        <option value="Passed-Away">Passed Away</option>
                      
                      </select>
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Mother's Status:</label>
                      <select name="motherStatus"
                        value={this.state.motherStatusValue}
                        onChange={this.motherStatusChange} className="form-control">
                        <option value="NA">--Select--</option>
                        <option value="Homemaker">Homemaker</option>
                        <option value="Employed">Employed</option>
                        <option value="Business">Business</option>
                        <option value="Retired">Retired</option>
                        <option value="Passed-Away">Passed Away</option>
                      
                      </select>
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Family Location:</label>
                      <Field name="family_location" className="form-control" /><br />
                      {errors.family_location ? <div>{errors.family_location}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Native Place:</label>
                      <Field name="native_place" className="form-control" /><br />
                      {errors.native_place ? <div>{errors.native_place}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Family Type:</label>
                      <Field 
                  type="radio"
                  value="joint"
                  checked={this.state.family_type === "joint"}
                  onChange={this.onRadioChange2}
                />Joint
                <Field 
                  type="radio"
                  value="nuclear"
                  checked={this.state.family_type === "nuclear"}
                  onChange={this.onRadioChange2}
                />Nuclear
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Family values:</label>
                      <Field 
                  type="radio"
                  value="traditional"
                  checked={this.state.family_values === "traditional"}
                  onChange={this.onRadioChange3}
                />Traditional
                <Field 
                  type="radio"
                  value="moderate"
                  checked={this.state.family_values === "moderate"}
                  onChange={this.onRadioChange3}
                />Moderate
                 <Field 
                  type="radio"
                  value="liberal"
                  checked={this.state.family_values === "liberal"}
                  onChange={this.onRadioChange3}
                />Liberal
                    </div>
                 
                   
                    <br></br><h1>LIFE STYLE</h1><br></br>
                  
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Diet:</label>
                      <Field 
                  type="radio"
                  value="veg"
                  checked={this.state.diet === "veg"}
                  onChange={this.onRadioChange4}
                />Veg
                <Field 
                  type="radio"
                  value="non-veg"
                  checked={this.state.diet === "non-veg"}
                  onChange={this.onRadioChange4}
                />Non-Veg<br></br>
                 <Field 
                  type="radio"
                  value="occasionally_nonveg"
                  checked={this.state.diet === "occasionally_nonveg"}
                  onChange={this.onRadioChange4}
                />Occasionally Non-Veg 
                <Field 
                  type="radio"
                  value="eggetarian"
                  checked={this.state.diet === "eggetarian"}
                  onChange={this.onRadioChange4}
                />Eggetarian<br></br>
                <Field 
                  type="radio"
                  value="jain"
                  checked={this.state.diet === "jain"}
                  onChange={this.onRadioChange4}
                />Jain
                <Field 
                  type="radio"
                  value="vegan"
                  checked={this.state.diet === "vegan"}
                  onChange={this.onRadioChange4}
                />Vegan
                    </div>
                    
                    <br></br><h1>EDUCATION AND CARRER</h1>
                  
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Highest Qualification:</label>
                      <Field name="highest_qualification" className="form-control" />
                      {errors.highest_qualification ? <div>{errors.highest_qualification}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>College Attended:</label>
                      <Field name="college_attened" className="form-control" />
                      {errors.college_attened ? <div>{errors.college_attened}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Working With:</label>
                      <select name="working_with"
                        value={this.state.workingValue}
                        onChange={this.workingChange} className="form-control">
                        <option value="NA">--Select--</option>
                        <option value="Private_Company">Private Company</option>
                        <option value="Government">Government/Public Sector</option>
                        <option value="Defense">Defense/Civil Services</option>
                        <option value="Business">Business/Self Employed</option>
                        <option value="Not_Working">Not Working</option>
                      
                      </select>
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Working As:</label>
                      <Field name="working_as" className="form-control" />
                      {errors.working_as ? <div>{errors.working_as}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Annual Income:</label>
                      <Field name="annual_income" className="form-control" />
                      {errors.annual_income ? <div>{errors.annual_income}</div> : null}
                    </div>
                    
                    <br></br>
                    <h1> DESIRED PARTNER:</h1>
                 
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Age:</label>
                      <Field name="age" className="form-control" />
                      {errors.age ? <div>{errors.age}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Marital Status:</label>
                      <Field name="martial_status1" className="form-control" />
                      {errors.martial_status1 ? <div>{errors.martial_status1}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Height:</label>
                      <Field name="height1" className="form-control" />
                      {errors.height1 ? <div>{errors.height1}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Religion:</label>
                      <Field name="religion1" className="form-control" />
                      {errors.religion1 ? <div>{errors.religion1}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Country living in:</label>
                      <Field name="country_livein" className="form-control" />
                      {errors.country_livein ? <div>{errors.country_livein}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>State living in:</label>
                      <Field name="state_livein" className="form-control" />
                      {errors.state_livein ? <div>{errors.state_livein}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>City:</label>
                      <Field name="city" className="form-control" />
                      {errors.city ? <div>{errors.city}</div> : null}
                    </div>
                   
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Education:</label>
                      <Field name="education" className="form-control" />
                      {errors.education ? <div>{errors.education}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Occupation:</label>
                      <Field name="occupation" className="form-control" />
                      {errors.occupation ? <div>{errors.occupation}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Income:</label>
                      <Field name="income" className="form-control" />
                      {errors.income ? <div>{errors.income}</div> : null}

                    </div>
                   





                  </div> 
                   {/* col-md-12 */}
                  <div className="clearfix" />
                  <div className="w3_submit">
                    <button type="submit" className="btn btn-success"> Create Profile</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
</div>











{/* sample */}



        {/* <div className="w3ls-list">       
          <div className="container" style={{backgroundColor:"white"}}>
           
            <p className="text-right"><span style={{ color: 'red', fontWeight: 100 }}>*</span>Mandatory</p>
            <Formik
              initialValues={{
                username: "",
                dob: "",
                martial_status:"",
                height: "",
                weight: "",
                disability: "",
                blood: "",
                religion:"",
                mother_tongue:"",
                community:"",
                sub_community:"",
                fatherStatus:"",
                motherStatus:"",
                family_location:"",
                native_place:"",
                family_type:"",
                family_values:"",
                diet:"",
                highest_qualification:"",
                college_attened:"",
                working_with:"",
                working_as:"",
                annual_income:"",
                age:"",
                martial_status1:"",
                height1:"",
                religion1:"",
                country_livein:"",
                state_livein:"",
                city:"",
                education:"",
                occupation:"",
                income:""
              }}
              validationSchema={RegisterSchema}
              onSubmit={this.onSubmit} >
              {({ errors, touched }) => (
                <Form>
                  <div className="col-md-12"> 
                  <h1>Basic Info</h1>
                  <div className="container-fluid" style={{backgroundColor:"#dedbd3"}}>
                  <div className="agileits" hidden="true">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Name:</label>
                      <Field name="username" className="form-control" /><br />
                      {errors.username ? <div>{errors.username}</div> : null}

                    </div>  
                  <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Date of Birth:</label>
                      <Field name="dob" className="form-control" /><br />
                      {errors.dob ? <div>{errors.dob}</div> : null}

                    </div>
                   
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Marital Status:</label>
                      <select name="marital_status"
                        value={this.state.maritalValue}
                        onChange={this.martialChange} className="form-control">
                        <option value="NA">--Select--</option>
                        <option value="Never_Married">Never Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Awaiting_Divorce">Awaiting Divorce</option>
                     
                      </select>
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Height:</label>
                      <Field name="height" className="form-control" /><br />
                      {errors.height ? <div>{errors.height}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Body weight:</label>
                      <Field name="weight" className="form-control" /><br />
                      {errors.weight ? <div>{errors.weight}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Any Disability :</label>
                      <Field 
                  type="radio"
                  value="none"
                  checked={this.state.disability === "none"}
                  onChange={this.onRadioChange1}
                />None
                <Field 
                  type="radio"
                  value="physical_disability"
                  checked={this.state.disability === "physical_disability"}
                  onChange={this.onRadioChange1}
                />Physical Disability
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Blood Group:</label>
                      <Field name="blood" className="form-control" /><br />
                      {errors.blood ? <div>{errors.blood}</div> : null}

                    </div>
                 
                    
                    </div>
                    <br></br>
                    <h1>Religious Background</h1>
                  <div className="container-fluid" style={{backgroundColor:"#dedbd3"}}>
                  <div className="agileits">
                  <label><span style={{color: 'red', fontWeight: 100}}>*</span>Religion:</label>
                  <select name="religion"
                        value={this.state.religionValue}
                        onChange={this.religionChange} className="form-control">
						<option value="select">--Select--</option>  
						<option value="Muslim">Muslim</option>   
						<option value="Hindu">Hindu</option>   
						<option value="Christian">Christian</option>   
						<option value="Sikh">Sikh</option>   
						<option value="Jain">Jain</option>
						<option value="Buddhist">Buddhist</option>  
						<option value="No_Religious_Belief">No Religious Belief</option>   					
					</select>
                </div> 
                <div className="agileits">
                  <label><span style={{color: 'red', fontWeight: 100}}>*</span>Mother Tongue:</label>
                  <select name="mother_tongue"
                        value={this.state.mothertongueValue}
                        onChange={this.mothertongueChange} className="form-control">
						<option value="select">--Select--</option>  
						<option value="Malayalam">Malayalam</option>   
						<option value="English">English</option>   
						<option value="Bengali">Bengali</option>   
						<option value="Hindi">Hindi</option>   
						<option value="Marathi">Marathi</option>
						<option value="Telugu">Telugu</option>  
						<option value="Tamil">Tamil</option>  
						<option value="Kannada">Kannada</option>   					
						<option value="Odia">Odia</option>   					
						<option value="Gujarati">Gujarati</option>   					

					</select>
                </div>
                   
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Community:</label>
                      <select name="community"
                        value={this.state.communityValue}
                        onChange={this.communityChange} className="form-control">
						<option value="select">--Select--</option>  
						<option value="Arabic">Arabic</option>   
						<option value="Hindi">Hindi</option>   
						<option value="Marathi">Marathi</option>   
						<option value="Punjabi">Punjabi</option>   
						<option value="Bengali">Bengali</option>
						<option value="Gujarati">Gujarati</option>  
						<option value="Urdu">Urdu</option>  
						<option value="Telugu">Telugu</option>   					
						<option value="Kannada">Kannada</option>   					
						<option value="Tamil">Tamil</option>   					

					</select>
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Sub Community:</label>
                      <Field name="sub_community" className="form-control" /><br />
                      {errors.sub_community ? <div>{errors.sub_community}</div> : null}

                    </div>
                   
                   
                    
                    </div>
                    <br></br>
                  <h1>Family</h1>
                  <div className="container-fluid" style={{backgroundColor:"#dedbd3"}}>
                     
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Father's Status:</label>
                      <select name="fatherStatus"
                        value={this.state.fatherStatusValue}
                        onChange={this.fatherStatusChange} className="form-control">
                        <option value="NA">--Select--</option>
                        <option value="Employed">Employed</option>
                        <option value="Business">Business</option>
                        <option value="Retired">Retired</option>
                        <option value="Not-Employed">Not Employed</option>
                        <option value="Passed-Away">Passed Away</option>
                      
                      </select>
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Mother's Status:</label>
                      <select name="motherStatus"
                        value={this.state.motherStatusValue}
                        onChange={this.motherStatusChange} className="form-control">
                        <option value="NA">--Select--</option>
                        <option value="Homemaker">Homemaker</option>
                        <option value="Employed">Employed</option>
                        <option value="Business">Business</option>
                        <option value="Retired">Retired</option>
                        <option value="Passed-Away">Passed Away</option>
                      
                      </select>
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Family Location:</label>
                      <Field name="family_location" className="form-control" /><br />
                      {errors.family_location ? <div>{errors.family_location}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Native Place:</label>
                      <Field name="native_place" className="form-control" /><br />
                      {errors.native_place ? <div>{errors.native_place}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Family Type:</label>
                      <Field 
                  type="radio"
                  value="joint"
                  checked={this.state.family_type === "joint"}
                  onChange={this.onRadioChange2}
                />Joint
                <Field 
                  type="radio"
                  value="nuclear"
                  checked={this.state.family_type === "nuclear"}
                  onChange={this.onRadioChange2}
                />Nuclear
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Family values:</label>
                      <Field 
                  type="radio"
                  value="traditional"
                  checked={this.state.family_values === "traditional"}
                  onChange={this.onRadioChange3}
                />Traditional
                <Field 
                  type="radio"
                  value="moderate"
                  checked={this.state.family_values === "moderate"}
                  onChange={this.onRadioChange3}
                />Moderate
                 <Field 
                  type="radio"
                  value="liberal"
                  checked={this.state.family_values === "liberal"}
                  onChange={this.onRadioChange3}
                />Liberal
                    </div>
                 
                    
                    </div>
                    <br></br><h1>LIFE STYLE</h1><br></br>
                    <div style={{backgroundColor:"#dedbd3",padding:"5px"}}>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Diet:</label>
                      <Field 
                  type="radio"
                  value="veg"
                  checked={this.state.diet === "veg"}
                  onChange={this.onRadioChange4}
                />Veg
                <Field 
                  type="radio"
                  value="non-veg"
                  checked={this.state.diet === "non-veg"}
                  onChange={this.onRadioChange4}
                />Non-Veg<br></br>
                 <Field 
                  type="radio"
                  value="occasionally_nonveg"
                  checked={this.state.diet === "occasionally_nonveg"}
                  onChange={this.onRadioChange4}
                />Occasionally Non-Veg 
                <Field 
                  type="radio"
                  value="eggetarian"
                  checked={this.state.diet === "eggetarian"}
                  onChange={this.onRadioChange4}
                />Eggetarian<br></br>
                <Field 
                  type="radio"
                  value="jain"
                  checked={this.state.diet === "jain"}
                  onChange={this.onRadioChange4}
                />Jain
                <Field 
                  type="radio"
                  value="vegan"
                  checked={this.state.diet === "vegan"}
                  onChange={this.onRadioChange4}
                />Vegan
                    </div>
                    </div>
                    <br></br><h1>EDUCATION AND CARRER</h1>
                    <div style={{backgroundColor:"#9ed49d"}}>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Highest Qualification:</label>
                      <Field name="highest_qualification" className="form-control" />
                      {errors.highest_qualification ? <div>{errors.highest_qualification}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>College Attended:</label>
                      <Field name="college_attened" className="form-control" />
                      {errors.college_attened ? <div>{errors.college_attened}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Working With:</label>
                      <select name="working_with"
                        value={this.state.workingValue}
                        onChange={this.workingChange} className="form-control">
                        <option value="NA">--Select--</option>
                        <option value="Private_Company">Private Company</option>
                        <option value="Government">Government/Public Sector</option>
                        <option value="Defense">Defense/Civil Services</option>
                        <option value="Business">Business/Self Employed</option>
                        <option value="Not_Working">Not Working</option>
                      
                      </select>
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Working As:</label>
                      <Field name="working_as" className="form-control" />
                      {errors.working_as ? <div>{errors.working_as}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Annual Income:</label>
                      <Field name="annual_income" className="form-control" />
                      {errors.annual_income ? <div>{errors.annual_income}</div> : null}
                    </div>
                    </div>
                    <br></br>
                    <h1> DESIRED PARTNER:</h1>
                    <div style={{backgroundColor:"#9ed49d"}}>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Age:</label>
                      <Field name="age" className="form-control" />
                      {errors.age ? <div>{errors.age}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Marital Status:</label>
                      <Field name="martial_status1" className="form-control" />
                      {errors.martial_status1 ? <div>{errors.martial_status1}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Height:</label>
                      <Field name="height1" className="form-control" />
                      {errors.height1 ? <div>{errors.height1}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Religion:</label>
                      <Field name="religion1" className="form-control" />
                      {errors.religion1 ? <div>{errors.religion1}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Country living in:</label>
                      <Field name="country_livein" className="form-control" />
                      {errors.country_livein ? <div>{errors.country_livein}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>State living in:</label>
                      <Field name="state_livein" className="form-control" />
                      {errors.state_livein ? <div>{errors.state_livein}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>City:</label>
                      <Field name="city" className="form-control" />
                      {errors.city ? <div>{errors.city}</div> : null}
                    </div>
                   
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Education:</label>
                      <Field name="education" className="form-control" />
                      {errors.education ? <div>{errors.education}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Occupation:</label>
                      <Field name="occupation" className="form-control" />
                      {errors.occupation ? <div>{errors.occupation}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Income:</label>
                      <Field name="income" className="form-control" />
                      {errors.income ? <div>{errors.income}</div> : null}

                    </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="w3_submit">
                    <button type="submit" className="btn btn-success"> Create Profile</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
</div> */}

      
        <div className="w3layous-story text-center">
          <div className="container">
            <h4>Your story is waiting to happen!  <a href="index.html">Get started</a></h4>
          </div>
        </div>
        {/* //Get started */}
        {/* footer */}
        <footer>
          <div className="footer">
            <div className="container">
              <div className="footer-info w3-agileits-info">
                <div className="col-md-4 address-left agileinfo">
                  <div className="footer-logo header-logo">
                    <h6>Get in Touch.</h6>
                  </div>
                  <ul>
                    <li><i className="fa fa-map-marker" /> 123 San Sebastian, New York City USA.</li>
                    <li><i className="fa fa-mobile" /> 333 222 3333 </li>
                    <li><i className="fa fa-phone" /> +222 11 4444 </li>
                    <li><i className="fa fa-envelope-o" /> <a href="mailto:example@mail.com"> mail@example.com</a></li>
                  </ul> 
                </div>
                <div className="col-md-8 address-right">
                  <div className="col-md-4 footer-grids">
                    <h3>Company</h3>
                    <ul>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="feedback.html">Feedback</a></li>  
                      <li><a href="help.html">Help</a></li>  
                      <li><a href="tips.html">Safety Tips</a></li>
                      <li><a href="typo.html">Typography</a></li>
                      <li><a href="icons.html">Icons Page</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4 footer-grids">
                    <h3>Quick links</h3>
                    <ul>
                      <li><a href="terms.html">Terms of use</a></li>
                      <li><a href="privacy_policy.html">Privacy Policy</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                      <li><a href="faq.html">FAQ</a></li>
                      <li><a href="sitemap.html">Sitemap</a></li>
                    </ul> 
                  </div>
                  <div className="col-md-4 footer-grids">
                    <h3>Follow Us on</h3>
                    <section className="social">
                      <ul>
                        <li><a className="icon fb" href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a className="icon tw" href="#"><i className="fa fa-twitter" /></a></li>	
                        <li><a className="icon gp" href="#"><i className="fa fa-google-plus" /></a></li>
                      </ul>
                    </section>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>	
          <div className="copy-right"> 
            <div className="container">
              <p>© 2017 Match. All rights reserved | Design by <a href="http://w3layouts.com"> W3layouts.</a></p>
            </div>
          </div> 
        </footer>
      </div>
    )
  }
}
export default withRouter(Basic_details);
