import React, { Component } from 'react';
import Shaadi from '../Shaadi';

import swal from 'sweetalert';

import { withRouter } from 'react-router';
import { Formik, Form, Field } from 'formik';
import * as Yup  from 'yup';
const RegisterSchema = Yup.object().shape({
    username:Yup.string()
    .min(2,'Too short')
    .max(20,'Too long')
    .required('Required'),
    password:Yup.string()
    .min(2,'Too short')
    .max(20,'Too long')
    .required('Required'),
    phn:Yup.string()
    .min(2,'Too short')
    .max(20,'Too long')
    .required('Required'),
    confirmpassword:Yup.string()
    .min(2,'Too short')
    .max(20,'Too long')
    .required('Required')
    
});
class Home extends Component {
  btnclick=()=>{
    this.props.history.push("/Register");
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
  onSubmit =(values)=>{
       
    //event.preventDefault();
    let usname=values.username;
    let pwd=values.password;
    let cpass=values.confirmpassword;
    let phn=values.phn;

    Shaadi.registration(usname,phn,pwd,cpass)
    .then(response=>{
   
      swal("Registration successful","success","success");
           this.props.history.push("/");
    })
    .catch(err=>{
        swal("Registration failed","failed","error")
    });


 }
  render() {
    return (
      <div className="row ">
        <div className="medium-12 columns">
          <div>
           
         <div className="w3layouts-banner" id="home">  
         <div className="row">
         <div className="col-sm-12">
           <div className="container">
                    <div className="menu">
                      <h1>SHAADI.COM</h1>
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
                  </div>
                  </div>
         </div>
        <div className="row" style={{marginTop:'200px'}}>   
          <div className="col-sm-1">
          </div>
          <div className="col-sm-10">
            <h1 style={{fontFamily: 'Raleway,sans-serif',fontSize: '40px'}}>
  We bring people together.<br></br>
Love unites them...</h1> <br></br>
    <div className="form-wrapper">
            <form>
              <div className="form-row">
                <div className="form-group col-md-2 col-2">
                <label style={{fontSize:"20px"}}>I'm looking for a</label>
                    <div className="Dropdown-root">
                    <div className="Dropdown-control" aria-haspopup="listbox"> 
                    <div className="Dropdown-placeholder is-selected" style={{fontSize:'20px'}}>woman</div>
                    <div className="Dropdown-arrow-wrapper">
                        <span className="Dropdown-arrow"></span>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="form-group col-md-2 col-2">
                <label style={{fontSize:"20px"}}>Aged</label>
                    <div className="Dropdown-root">
                    <div className="Dropdown-control" aria-haspopup="listbox"> 
                    <div className="Dropdown-placeholder is-selected" style={{fontSize:'20px'}}>
                      20</div>
                    <div className="Dropdown-arrow-wrapper">
                        <span className="Dropdown-arrow"></span>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="form-group col-md-1 col-1">
               <br></br>
                    <div className="Dropdown-root">                  
                   to
                    </div>
                </div>
                <div className="form-group col-md-2 col-2">
                <label style={{fontSize:"20px"}}></label>
                    <div className="Dropdown-root">
                    <div className="Dropdown-control" aria-haspopup="listbox"> 
                    <div className="Dropdown-placeholder is-selected" style={{fontSize:'20px'}}>25</div>
                    <div className="Dropdown-arrow-wrapper">
                        <span className="Dropdown-arrow"></span>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="form-group col-md-2 col-2">
                <label style={{fontSize:"20px"}}>of religion</label>
                    <div className="Dropdown-root">
                    <div className="Dropdown-control" aria-haspopup="listbox"> 
                    <div className="Dropdown-placeholder is-selected" style={{fontSize:'20px'}}>select</div>
                    <div className="Dropdown-arrow-wrapper">
                        <span className="Dropdown-arrow"></span>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="form-group col-md-1 col-1">
               <br></br>
                    <div className="Dropdown-root">                  
                    <button style={{color: 'white',backgroundColor:'#00bcd5',width:'200px',borderRadius:'10px',fontSize:'25px'}} onClick={this.btnclick}>Lets Begin</button>
                    </div>
                </div>
              </div>
            </form>
            {/* <button style={{color: 'black'}} onClick={this.btnclick}>Lets Begin</button> */}
    </div>
            
          </div>
          <div className="col-sm-1" >
            
          </div>
        </div>
      </div>
            <div className="w3l_find-soulmate text-center">
              <h3>Find Your Soulmate</h3>
              <div className="container">
                <a className="scroll" href="#home">
                  <div className="col-md-3 w3_soulgrid">
                    <i className="fa fa-pencil-square-o" aria-hidden="true" />
                    <h3>Sign Up</h3>
                    <p>Signup for free and Upload your profile</p>
                  </div>
                </a>
                <a className="scroll" href="#home">
                  <div className="col-md-3 w3_soulgrid">
                    <i className="fa fa-search" aria-hidden="true" />
                    <h3>Search</h3>
                    <p>Search for your right partner</p>
                  </div>
                </a>
                <a className="scroll" href="#home">
                  <div className="col-md-3 w3_soulgrid">
                    <i className="fa fa-users" aria-hidden="true" />
                    <h3>Connect</h3>
                    <p>Connect your perfect Match</p>
                  </div>
                </a>
                <a className="scroll" href="#home">
                  <div className="col-md-3 w3_soulgrid">
                    <i className="fa fa-comments-o" aria-hidden="true" />
                    <h3>Interact</h3>
                    <p>Become a member and start Conversation</p>
                  </div>
                </a>
                <div className="clearfix"> </div>
              </div>
            </div>

            <div className="w3layouts_featured-profiles">
              <div className="container">

                <div className="agile_featured-profiles">
                  <h2>Featured Profiles</h2>
                  <ul id="flexiselDemo3">
                    <li>
                      <div className="col-md-3 biseller-column">
                        <a href="groom_profile.html">
                          <div className="profile-image">
                            <img src="images/p1.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="groom_profile.html">
                          <div className="profile-image">
                            <img src="images/p2.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="bride_profile.html">
                          <div className="profile-image">
                            <img src="images/p3.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="groom_profile.html">
                          <div className="profile-image">
                            <img src="images/p4.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="bride_profile.html">
                          <div className="profile-image">
                            <img src="images/p5.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="bride_profile.html">
                          <div className="profile-image">
                            <img src="images/p6.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="groom_profile.html">
                          <div className="profile-image">
                            <img src="images/p7.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="bride_profile.html">
                          <div className="profile-image">
                            <img src="images/p8.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="col-md-3 biseller-column">
                        <a href="groom_profile.html">
                          <div className="profile-image">
                            <img src="images/p9.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="groom_profile.html">
                          <div className="profile-image">
                            <img src="images/p10.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="groom_profile.html">
                          <div className="profile-image">
                            <img src="images/p11.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="bride_profile.html">
                          <div className="profile-image">
                            <img src="images/p12.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="groom_profile.html">
                          <div className="profile-image">
                            <img src="images/p7.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="bride_profile.html">
                          <div className="profile-image">
                            <img src="images/p5.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="groom_profile.html">
                          <div className="profile-image">
                            <img src="images/p1.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 biseller-column">
                        <a href="groom_profile.html">
                          <div className="profile-image">
                            <img src="images/p2.jpg" className="img-responsive" alt="profile image" />
                            <div className="agile-overlay">
                              <h4>Profile ID: 458645</h4>
                              <ul>
                                <li><span>Age / Height</span>: 26 / 5'0''</li>
                                <li><span>Caste</span>: Ipsum</li>
                                <li><span>Religion</span>: Lorem</li>
                                <li><span>Profession</span>: IT Software</li>
                                <li><span>Profile Created By</span>: Self</li>
                                <li><span>Location</span>: Semrd, 7th c, Los</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="wthree-mobilaapp main-grid-border">
              <div className="container">
                <div className="app">
                  <div className="col-md-6 w3ls_app-left mpl">
                    <h3>Matrimonial mobile app on your smartphone!</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className="agileits_app-devices">
                      <h5>Download the App</h5>
                      <a href="#"><img src="images/1.png" alt="" /></a>
                      <a href="#"><img src="images/2.png" alt="" /></a>
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                  <div className="col-md-offset-1 col-md-5 app-image">
                    <img src="images/mob.png" alt="" />
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>

           

            <div className="agile-assisted-service text-center">
              <h4>Assisted Service</h4>
              <p>Our Relationship Managers have helped thousands of members find their life partners.</p>
              <a href="assisted_services.html">Know More</a>
            </div>

            <div className="location w3layouts">
              <div className="container">
                <div className="col-md-6 col-sm-6 w3layouts location-grids location-grids-1">
                  <h3>Where We Are</h3>
                  <h5>Our Branches</h5>
                  <p>250+ branches across World, Largest Network of its Kind.</p>
                </div>
                <div className="col-md-6 col-sm-6 w3layouts location-grids location-grids-2">
                  <a href="contact.html"><img src="images/location.jpg" className="img-responsive" alt="Agileits W3layouts" /></a>
                </div>
                <div className="clearfix" />
              </div>
            </div>

            <div className="w3layous-story text-center">
              <div className="container">
                <h4>Your story is waiting to happen!  <a className="scroll" href="#home">Get started</a></h4>
              </div>
            </div>

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
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
