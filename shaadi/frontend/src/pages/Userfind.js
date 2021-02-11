import React from 'react';
import { withRouter } from 'react-router';
import Shaadi from '../Shaadi';

class Users extends React.Component{
    state={
        users:[],
        userObj:this.props.location.userObj
    }

    componentDidMount(){
        Shaadi.getUsers()
        .then(response=>{
            this.setState({
                users:response.data.users
            });
        });
    }
    
    render(){
       
        return ( <div>
           {this.state.userObj.username}
            {/* header */}
            <header>
              {/*  Navigation Start */}
              <div className="navbar navbar-inverse-blue navbar">
                {/*<div class="navbar navbar-inverse-blue navbar-fixed-top">*/}
                <div className="navbar-inner">
                  <div className="container">
                    <div className="menu">
                      <div className="cd-dropdown-wrapper">
                        <h1>Shaadi.com</h1>
                      </div> {/* .cd-dropdown-wrapper */}	 
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
              {/* ============================  Navigation End ============================ */}
            </header>
            {/* /header */}
            {/* inner banner */}	
            <div className="w3layouts-inner-banner">
          <div className="container">
            <div className="logo">
           
           
            <h1 style={{color:"white",padding:"140px"}}>Let's get started by connecting with few <br></br>of your matches</h1>
            </div>
            <div className="clearfix" />
          </div>
        </div>
            {/* //inner banner */}	
            {/* breadcrumbs */}
            {/* <div className="w3layouts-breadcrumbs text-center">
              <div className="container">
                <span className="agile-breadcrumbs"><a href="index.html">Home</a> &gt;</span>
              </div>
            </div> */}
            
            {/* //breadcrumbs */}
            {/* List of brides and grooms */}
            <div className="w3ls-list">
              <div className="container">
                <h2> Matrimonial Profiles list</h2>
                <div className="col-md-12 profiles-list-agileits">
                
                    <div className="resp-tabs-container ">
                         <div className="match-profile" >
                             <div className="col-md-6 " >
                                <div className="profile-details" >

                                        <table class="table"  >
                                            {
                                                this.state.users.map(user => <tr>
                                                    <td>
                                                 <h5>Profile ID : T45Dfsd64</h5>
                                                       <img src="images/profile-image-men.jpg" width="100%" className="prf-img img-responsive" alt="profile image" />
                                                        <div className="w3-prfr"><br></br>
                                                            {user.username}
                                                        </div>
                                                     
                                                    {user.dob}<br></br>
                                                    {user.martial_status}<br></br>
                                                    {user.religion}<br></br>
                                                    {user.working_as}
                                                    </td>
                                                </tr>)
                                            }
                                        </table> 
                                    
                                        <div className="clearfix" />
                                        </div> 
                                    </div> 
                              </div>
                          <div>
                           
                          <div className="clearfix" />
                        
                      </div>
                    </div>
                  </div>               
              </div>      
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
        )
    }
    

}
export default withRouter(Users);