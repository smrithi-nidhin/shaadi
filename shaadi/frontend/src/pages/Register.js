import React, { Component } from 'react';
import Shaadi from '../Shaadi';
import swal from 'sweetalert';
import { withRouter } from 'react-router';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too short')
    .max(20, 'Too long')
    .required('Required'),
  email: Yup.string()
    .min(2, 'Too short')
    .max(30, 'Too long')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too short')
    .max(20, 'Too long')
    .required('Required'),
  phn: Yup.string()
    .min(2, 'Too short')
    .max(20, 'Too long')
    .required('Required'),
  confirmpassword: Yup.string()
    .min(2, 'Too short')
    .max(20, 'Too long')
    .required('Required'),
  profilefor: Yup.string(),
  religion:Yup.string()

});
class Home extends React.Component {
  state = {
    selectValue: "NA",
    religionValue:"NA",
    gender: ""
  }
  
  onRadioChange = (event) => {
    this.setState({ gender: event.target.value });
    // alert(event.target.value);
  }

  handleChange = (event) => {
    this.setState({ selectValue: event.target.value });
    // alert(event.target.value);
  }
  religionChange = (event) => {
    this.setState({ religionValue: event.target.value });
    // alert(event.target.value);
  }
  btnclickhome=()=>{
    this.props.history.push("/");
  }
  btnclickabout=()=>{
    this.props.history.push("/About");
  }
  btnclick1=()=>{
    this.props.history.push("/Login");
  }
  onSubmit = (values) => {
  //event.preventDefault();
    let profilefor = this.state.selectValue;
    let religion=this.state.religionValue;
    let gender=this.state.gender;
    let usname = values.username;
    let pwd = values.password;
    let phn = values.phn;
    let email = values.email;
    let dob = values.dob;
    let cpass = values.confirmpassword;

    Shaadi.registration(profilefor, usname,gender, email,dob,religion, phn, pwd, cpass)
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
        <div className="w3layouts-inner-banner">
        <div className="container">
                    <div className="menu">
                      <h1 style={{color:"white"}}>SHAADI.COM</h1>
                    </div>
                    <div className="pull-right">
                      <nav className="navbar nav_bottom" role="navigation">

                        <div className="navbar-header nav_2">
                          <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">Menu
                  <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                          </button>
                        </div>

                        <div className="collapse navbar-collapse" >
                        <ul className="nav navbar-nav nav_1">
                            <li ><a href={this.btnclickhome} style={{fontSize:'20px',color:'white'}} onClick={this.btnclickhome}>Home</a></li>
                            <li><a href={this.btnclickabout} style={{fontSize:'20px',color:'white'}} onClick={this.btnclickabout}> About</a></li>
                           
                            <li className="last"><a href={this.btnclick1}  onClick={this.btnclick1} style={{fontSize:'20px',color:'white'}}>Login</a></li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                    <div className="clearfix"> </div>
                    <div ><h1 style={{color:"white",paddingTop:"100px"}}>Let's set up your account, while we find<br></br> Matches for you!</h1></div>
                  </div>
        </div>

    
          <div className="row " style={{border:'none',marginBottom:'20px'}}>
         
            
            <Formik
              initialValues={{
                username: "",
                email: "",
                gender:"",
                phn: "",
                password: "",
                confirmpassword: "",
                profilefor: "",
                religion:"",
                dob:""
              }}
              validationSchema={RegisterSchema}
              onSubmit={this.onSubmit} >
              {({ errors, touched }) => (
                <Form>
                    <div className="col-md-3"></div>
                  <div className="col-md-6"  style={{padding:'30px',backgroundColor:'#f1eff1',marginTop:'10px',paddingLeft:'100px',paddingRight:'100px'}}>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Profile For:</label>
                      <select name="profilefor"
                        value={this.state.selectValue}
                        onChange={this.handleChange} className="form-control">
                        <option value="NA">--Select--</option>
                        <option value="Myself">Myself</option>
                        <option value="Son">Son</option>
                        <option value="Daughter">Daughter</option>
                        <option value="Brother">Brother</option>
                        <option value="Sister">Sister</option>
                        <option value="Relative">Relative</option>
                        <option value="Friend">Friend</option>
                      </select>
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Name:</label>
                      <Field name="username" className="form-control" /><br />
                      {errors.username ? <div>{errors.username}</div> : null}

                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Gender:</label>
                      <Field
                  type="radio"
                  value="male"
                  checked={this.state.gender === "male"}
                  onChange={this.onRadioChange}
                />Male
                <Field
                  type="radio"
                  value="female"
                  checked={this.state.gender === "female"}
                  onChange={this.onRadioChange}
                />Female
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Email:</label>
                      <Field name="email" className="form-control" /><br />
                      {errors.email ? <div>{errors.email}</div> : null}

                    </div>
                    <div className="agileits">
                  <label><span style={{color: 'red', fontWeight: 100}}>*</span>Date Of Birth:</label>
                  <Field name="dob" className="form-control" /><br />
                      {errors.dob ? <div>{errors.dob}</div> : null}

                </div>
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
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Phone no:</label>
                      <Field name="phn" className="form-control" /><br />
                      {errors.phn ? <div>{errors.phn}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Password:</label>
                      <Field name="password" type="password" className="form-control" /><br />
                      {errors.password ? <div>{errors.password}</div> : null}
                    </div>
                    <div className="agileits">
                      <label><span style={{ color: 'red', fontWeight: 100 }}>*</span>Confirm Password</label>
                      <Field name="confirmpassword" type="password" className="form-control" /><br /><br />
                      {errors.confirmpassword ? <div>{errors.confirmpassword}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-3"><p className="text-left"><span style={{ color: 'red', fontWeight: 100 }}>*</span>Mandatory</p></div>


                  <div className="clearfix" />
                  <div className="w3_submit">
                    <button type="submit" className="btn btn-success" style={{width:"300px",height:"40px",backgroundColor:' #00c4da'}}> Register</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
     
        {/* Get started */}
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
    );
  }
}
export default withRouter(Home);
