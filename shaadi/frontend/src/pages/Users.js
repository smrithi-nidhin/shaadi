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
      // this.props.history.push("/Basic_details");
      this.props.history.push({
        pathname:"/Basic_details",
        userObj:this.props.location.userObj
        });
    }
    btnclick1=()=>{
      this.props.history.push("/");
    }
    sendinterest=()=>{
      alert("Your interest has been send")
    }
    viewprofile=()=>{
     // this.props.history.push("/userdetails");
      this.props.history.push({
        pathname:"/userdetails",
        userObj:this.props.location.userObj
        });
    }
    render(){
       
        return ( <div>
   {this.state.userObj.username}
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
                            <li className="last"><a href={this.btnclickdetails}  onClick={this.btnclickdetails} style={{fontSize:'20px',color:'white'}}>Add Your Basic Details</a></li>
                           
                            <li className="last"><a href={this.btnclick1}  onClick={this.btnclick1} style={{fontSize:'20px',color:'white'}}>Logout</a></li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div ><h1 style={{color:"white",paddingTop:"100px"}}>Your Matching Profile.... <br></br>
                   <h1 style={{color:"white",fontSize:"50px"}}> {this.state.userObj.username} </h1>    </h1>
                  
                  </div>
          </div>
       
          <table class="table">
                      {
                    this.state.users.map(user => <tr>
                         <td>	
          <div className="w3ls-list">
            <div className="container">
            <div className="col-md-3 profiles-list-agileits"></div>
              <div className="col-md-6 profiles-list-agileits">
                <div className="single_w3_profile">
                  <div className="agileits_profile_image">
                    <img src="images/profile-image-girl.jpg" alt="profile image" />
                  </div>
                  <div className="w3layouts_details">
                    <h4> {user.username}</h4>
                  
                    <p>{user.dob}/ {user.height},{user.highest_qualification}, {user.religion},{user.native_place}.</p>
                    {/* <a href="#" data-toggle="modal" data-target="#myModal">View Contact</a> */}
                    {/* <a href="#" data-toggle="modal" data-target="#myModal"  onClick={this.sendinterest} >Send interest</a> */}
                    {/* <a href="#" data-toggle="modal" data-target="#myModal">Report Profile</a> */}
                    <a href="#" data-toggle="modal" data-target="#myModal" onClick={this.viewprofile}>View Profile</a>
                  </div>
                  <div className="clearfix" />
                </div>
                
              </div>
              <div className="col-md-3 profiles-list-agileits"></div>
              <div className="clearfix" />
            </div>
           
          </div>
        
          </td>
                         </tr>)
          }
         </table> 
        </div>
        )
    }
    

}
export default withRouter(Users);