import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import './carddetails.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Carddetails = (props) => {
  const location=useLocation();
  const navigate=useNavigate();
  console.log(location);
 // console.log({state})

 const backButton=()=>{
  console.log("clicked");
  navigate('/',)
}
    return (
        <div className="details">
            <div style={{backgroundColor: "#edf5e1",fontSize:"2em"}}>
             <ArrowBackIcon onClick={backButton} style={{width:"2em",height:"2em",paddingTop:"0.7em"}}></ArrowBackIcon>
             <h1 style={{textAlign: "center",fontSize:"2em",marginTop:"-0.9em"}}>Profile information of {location.state.firstName}</h1>
             </div>
             <img alt="profile" src={location.state.picture} style={{width: "15em",paddingTop:"1em"}}></img>
             <h3 style={{paddingLeft: "1em",fontSize:"2em"}}>{location.state.firstName} {location.state.lastName}</h3>
             <div className="info">
                <ul className="lists">
                  <li>
                  <span className="firstCol">Email :</span>
                   <span className="secondCol">{location.state.email}</span>
                  </li>
                  <li>
                  <span className="firstCol">Age :</span>
                  <span className="secondCol">{location.state.age}</span>
                  </li>
                  <li>
                  <span className="firstCol">Gender :</span>
                  <span className="secondCol">{location.state.gender}</span>
                  </li>
                  <li>
                  <span className="firstCol">City :</span>
                  <span className="secondCol">{location.state.city}</span>
                  </li>
                  <li>
                  <span className="firstCol">State :</span>
                  <span className="secondCol">{location.state.states}</span>
                  </li>
                  <li>
                  <span className="firstCol">Country :</span>
                  <span className="secondCol">{location.state.country}</span>
                  </li>
                  <li>
                  <span className="firstCol">Postcode :</span>
                  <span className="secondCol">{location.state.postcode}</span>
                  </li>
                  <li>
                  <span className="firstCol">Phone Number :</span>
                  <span className="secondCol">{location.state.phone}</span>
                  </li>
                </ul>
             </div>
           </div>
        
      
    )
}

export default Carddetails
