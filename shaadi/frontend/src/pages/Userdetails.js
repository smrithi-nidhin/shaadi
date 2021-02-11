import React from 'react';
import { withRouter } from 'react-router';
import Shaadi from '../Shaadi';
import swal from 'sweetalert';
class Users extends React.Component{
    state={
        users:[],
        userObj:this.props.location.userObj
        // user:[]
    }
    // btnclick3=(values)=>{
    //   let usname=values.username;
    //   Shaadi.userfind(usname)
    //     .then(response=>{
    //         this.setState({
    //           user:response.data.user
    //         });
    //     });
    // }
    btnclick3 = ()=>{
      console.log("sjhsj");
         
        Shaadi.userfind()
        .then(response=>{
          this.setState({
              users:response.data.users
          });
      });
      }
    componentDidMount(){
        Shaadi.getUsers()
        .then(response=>{
            this.setState({
                users:response.data.users
            });
        });
    }
    btnclickhome=()=>{
      this.props.history.push("/");
    }
    btnclickabout=()=>{
      this.props.history.push("/About");
    }
    btnclickdetails=()=>{
      this.props.history.push("/Basic_details");
    }
    btnclick1=()=>{
      this.props.history.push("/");
    }
    sendinterest=()=>{
      alert("Your interest has been send")
    }
    render(){
       
        return ( <div>
  {/* {this.state.userObj.username} */}
{/* <table class="table">
                      {
                    this.state.users.map(user => <tr>
                         <td>	 */}
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
                            <li className="last"><a href={this.btnclickdetails}  onClick={this.btnclickdetails} style={{fontSize:'20px',color:'white'}}>Basic Details</a></li>
                           
                            <li className="last"><a href={this.btnclick1}  onClick={this.btnclick1} style={{fontSize:'20px',color:'white'}}>Logout</a></li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
          </div>
       
          <table class="table">
                      {
                    this.state.users.map(user => <tr>
                         <td>	
          <div className="w3ls-list">
            <div className="container">
           
              <div className="col-md-9 profiles-list-agileits">
                <div className="single_w3_profile">
                  <div className="agileits_profile_image">
                    <img src="images/profile-image-girl.jpg" alt="profile image" />
                  </div>
                  <div className="w3layouts_details">
                    <h4>  {this.state.userObj.username}</h4>
                  
                    <p>{this.state.userObj.dob}/ {this.state.userObj.height},{this.state.userObj.highest_qualification}, {this.state.userObj.religion},{this.state.userObj.native_place}.</p>
                    {/* <a href="#" data-toggle="modal" data-target="#myModal">View Contact</a> */}
                    <a href="#" data-toggle="modal" data-target="#myModal"  onClick={this.sendinterest} >Send interest</a>
                    {/* <a href="#" data-toggle="modal" data-target="#myModal">Report Profile</a> */}
                    <a href="#" data-toggle="modal" data-target="#myModal">Block Profile</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="profile_w3layouts_details">
                  <div className="agileits_aboutme">
                    <h4>About me</h4>
                
                 <h5>Family Details:</h5>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Mother : </label>
                      <div className="col-sm-9 w3_details">
                      {user.motherStatus}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Father : </label>
                      <div className="col-sm-9 w3_details">
                      {user.fatherStatus}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Family location : </label>
                      <div className="col-sm-9 w3_details">
                      {user.family_location}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Native Place : </label>
                      <div className="col-sm-9 w3_details">
                      {user.native_place}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Family Type : </label>
                      <div className="col-sm-9 w3_details">
                      {user.family_type}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Family Values : </label>
                      <div className="col-sm-9 w3_details">
                      {user.family_values}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                   
                    <h5>Education Details:</h5>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Highest Education : </label>
                      <div className="col-sm-9 w3_details">
                      {user.highest_qualification}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">College attended : </label>
                      <div className="col-sm-9 w3_details">
                      {user.college_attended}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Working With : </label>
                      <div className="col-sm-9 w3_details">
                      {user.working_with}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Working As : </label>
                      <div className="col-sm-9 w3_details">
                      {user.working_as}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Annual Income : </label>
                      <div className="col-sm-9 w3_details">
                      {user.annual_income}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                  
                    <h5>Lifestyle:</h5>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Height : </label>
                      <div className="col-sm-9 w3_details">
                      {user.height}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Weight : </label>
                      <div className="col-sm-9 w3_details">
                      {user.weight}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Habits : </label>
                      <div className="col-sm-9 w3_details">
                      {user.diet}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                  
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Blood Group : </label>
                      <div className="col-sm-9 w3_details">
                      {user.blood}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Stay : </label>
                      <div className="col-sm-9 w3_details">
                      {user.native_place}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                   
                    <h5>Desired Partner:</h5>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Age : </label>
                      <div className="col-sm-9 w3_details">
                      {user.age}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Height : </label>
                      <div className="col-sm-9 w3_details">
                      {user.height1}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Marital Status : </label>
                      <div className="col-sm-9 w3_details">
                      {user.marital_status1}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Religion : </label>
                      <div className="col-sm-9 w3_details">
                      {user.religion1}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Country Live in : </label>
                      <div className="col-sm-9 w3_details">
                      {user.country_live_in}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">City : </label>
                      <div className="col-sm-9 w3_details">
                      {user.city}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Education : </label>
                      <div className="col-sm-9 w3_details">
                      {user.education}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Occupation : </label>
                      <div className="col-sm-9 w3_details">
                      {user.occupation}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="form_but1">
                      <label className="col-sm-3 control-label1">Income : </label>
                      <div className="col-sm-9 w3_details">
                      {user.income}
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 w3ls-aside">
            
                <div className="view_profile">
                  <h3>Similar Profiles</h3>
                  <ul className="profile_item">
                  <table class="table">
                      {
                    this.state.users.map(user => <tr>
                         <td>
                    <a href="#">
                      <li className="profile_item-img">
                      <img src="images/profile-image-men.jpg" className="img-responsive" width="100%" alt="profile image" />
                      </li>
                      <li className="profile_item-desc">
                        <h6> {user.username}</h6>
                        <p> {user.religion} ,,{user.working_as} </p>
                                                   
                      <button type="submit" style={{width:"100px",height:"25px",fontSize:"10px"}} onClick={this.btnclick3}>Connect now</button>
                      </li>
                      <div className="clearfix"> </div><br></br><br></br>
                    </a>
                    </td>
                         </tr>)
          }
         </table> 
                  </ul>


                </div>
              </div>
              <div className="clearfix" />
            </div>
           
          </div>
          {/* //Bride Profile Details */}
         
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
          </td>
                         </tr>)
          }
         </table> 
        </div>
        )
    }
    

}
export default withRouter(Users);