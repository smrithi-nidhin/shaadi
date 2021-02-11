import React, { Component } from 'react';
import Shaadi from '../Shaadi';

import swal from 'sweetalert';

import { withRouter } from 'react-router';
import { Formik, Form, Field } from 'formik';
import * as Yup  from 'yup';
const LoginSchema = Yup.object().shape({
    username:Yup.string()
    .min(2,'Too short')
    .max(20,'Too long')
    .required('Required'),
    password:Yup.string()
    .min(2,'Too short')
    .max(20,'Too long')
    .required('Required')
});
class Login extends React.Component {
    onSubmit = (values)=>{
       
            let usname=values.username;
          let pwd=values.password;
          Shaadi.login(usname,pwd)
         .then(response=>{
           swal("login success",response.data.message,"success")
           //this.props.history.push("/basic_details");
           this.props.history.push({
            pathname:"/users",
            userObj:response.data.record,
            });
            })
             .catch(error=>{
                swal("login failed","u provided invalid message","error")
            });
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
        btnclickregister=()=>{
          this.props.history.push("/Register");
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
                            <li className="last"><a href={this.btnclickregister}  onClick={this.btnclickregister} style={{fontSize:'20px',color:'white'}}>Register</a></li>
                          
                          </ul>
                        </div>
                      </nav>
                    </div>
                    <div className="clearfix"> </div>
                    <div ><h1 style={{color:"white",paddingTop:"100px"}}>Welcome back ! Please Login</h1></div>
                  </div>
        </div>
    
 
          <div className="row" style={{border:'none',marginBottom:'20px'}}>
            
            <Formik
                                initialValues={{
                                    username:"",
                                    password:""
                                }}
                                validationSchema={ LoginSchema }
                                onSubmit={this.onSubmit}
                            >
                                {({ errors,touched })=>(
                                <Form>
                       <div className="col-md-3"></div>              
              <div className="col-md-6" style={{padding:'30px',backgroundColor:'#f1eff1',marginTop:'10px',paddingLeft:'100px',paddingRight:'100px'}}>
               
              
                <div className="agileits">
                  <label><span style={{color: 'red', fontWeight: 100}}>*</span>Username:</label>
                  <Field name="username" className="form-control" placeholder="Enter Your name..." /><br />
                                   {errors.username?<div>{errors.username}</div>:null}
                  
                </div>
              
            
                <div className="agileits">
                  <label><span style={{color: 'red', fontWeight: 100}}>*</span>Password:</label>
                  <Field name="password" type="password" placeholder="Enter Password..."  className="form-control" />
                                    {errors.password?<div>{errors.password}</div>:null}
                </div>
                
              </div>
              <div className="col-md-3"></div>   
             
              
              <div className="clearfix" />
              <div className="w3_submit">
              <button type="submit" className="btn btn-success" style={{width:"300px",height:"40px",backgroundColor:' #00c4da'}} > Login</button>
              </div>
              </Form>
                        )}
              </Formik>
          </div>
        
        {/* //feedback */}
       
        {/* Get started */}
        <div className="w3layous-story text-center">
          <div className="container">
            <h4>Your story is waiting to happen!  <a href={this.btnclickregister}  onClick={this.btnclickregister} style={{fontSize:'20px',color:'white'}}>Get started</a></h4>
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
export default withRouter(Login);
