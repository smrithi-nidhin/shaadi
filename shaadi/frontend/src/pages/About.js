import React, { Component } from 'react';
import Shaadi from '../Shaadi';

import swal from 'sweetalert';

import { withRouter } from 'react-router';

class About extends React.Component {
    btnclickhome=()=>{
        this.props.history.push("/");
      }
      btnclickabout=()=>{
        this.props.history.push("/About");
      }
      btnclick1=()=>{
        this.props.history.push("/Login");
      }
    
  render() {
    return (
        <div>
   	
        <div className="w3layouts-inner-banner">
          <div className="container">
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
                  </div>
            <div className="clearfix" />
          </div>
        </div>
        {/* //inner banner */}	
        {/* breadcrumbs */}
        <div className="w3layouts-breadcrumbs text-center">
          <div className="container">
            <span className="agile-breadcrumbs"><a href="index.html">Home</a> &gt; <span>About Us</span></span>
          </div>
        </div>
        {/* //breadcrumbs */}
        {/* about us */}
        <div className="w3l_about">
          <div className="container">
            <h3>About Us</h3>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          </div>
        </div>
        {/* success stories */}
        <div className="w3_success-stories">
          <div className="container">
            <h4>Our Successful Stories</h4>
            <div className="w3l_about_left col-md-6 text-center">
              <a href="#" data-toggle="modal" data-target="#myModal1"><img src="images/s1.png" alt=" " className="img-responsive" /></a>
              <div className="w3l_about_left_pos">
                <h3>Groom <span>&amp; </span>Bride</h3>
              </div>
            </div>
            <div className="w3l_about_left col-md-6 text-center">
              <a href="#" data-toggle="modal" data-target="#myModal2"><img src="images/s2.png" alt=" " className="img-responsive" /></a>
              <div className="w3l_about_left_pos1">
                <h3>Groom <span>&amp; </span>Bride</h3>
              </div>
            </div>
            <div className="w3l_about_left col-md-6 text-center">
              <a href="#" data-toggle="modal" data-target="#myModal3"><img src="images/s3.png" alt=" " className="img-responsive" /></a>
              <div className="w3l_about_left_pos">
                <h3>Groom <span>&amp; </span>Bride</h3>
              </div>
            </div>
            <div className="w3l_about_left col-md-6 text-center">
              <a href="#" data-toggle="modal" data-target="#myModal4"><img src="images/s4.png" alt=" " className="img-responsive" /></a>
              <div className="w3l_about_left_pos1">
                <h3>Groom <span>&amp; </span>Bride</h3>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        {/* Success_Story Modal1 */}
        <div id="myModal1" className="modal fade" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Bride and Groom</h4>
              </div>
              <div className="modal-body">
                <div className="success_w3_story">
                  <img src="images/s1.png" alt=" " className="img-responsive" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //Success_Story Modal1 */}
        {/* Success_Story Modal2 */}
        <div id="myModal2" className="modal fade" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Bride and Groom</h4>
              </div>
              <div className="modal-body">
                <div className="success_w3_story">
                  <img src="images/s2.png" alt=" " className="img-responsive" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //Success_Story Modal2 */}
        {/* Success_Story Modal3 */}
        <div id="myModal3" className="modal fade" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Bride and Groom</h4>
              </div>
              <div className="modal-body">
                <div className="success_w3_story">
                  <img src="images/s3.png" alt=" " className="img-responsive" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //Success_Story Modal3 */}
        {/* Success_Story Modal4 */}
        <div id="myModal4" className="modal fade" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Bride and Groom</h4>
              </div>
              <div className="modal-body">
                <div className="success_w3_story">
                  <img src="images/s4.png" alt=" " className="img-responsive" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //Success_Story Modal4 */}
        {/* //Success Stories  */}
        {/* services */}
        <div className="agileits_services">
          <div className="container">
            <h2>We are no. 1...<span>WHY?</span></h2>
            <div className="col-md-6 w3ls_services-grids">
              <ul className="w3_servicesgrid_info">
                <li className="tick">genuine Profiles in our website.</li>
                <li className="tick">Lorem Ipsum is simply dummy text.</li>
                <li className="tick">It is a long established fact that be distracted.</li>
              </ul>
            </div>
            <div className="col-md-6 w3ls_services-grids">
              <ul className="w3_servicesgrid_info">
                <li className="tick">Best Service Support</li>
                <li className="tick">There are many variations of passages.</li>
                <li className="tick">The standard chunk Ipsum used since the 1500s.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* //about us */}
     
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
export default withRouter(About);
