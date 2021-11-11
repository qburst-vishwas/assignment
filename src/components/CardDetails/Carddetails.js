import React from 'react'
import { useLocation} from 'react-router-dom';
import './carddetails.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Carddetails = (props) => {
  const location=useLocation();
  console.log(location);
 // console.log({state})

 
    return (
        <div className="details">
             <h1 className="title">Profile information of {location.state.firstName}</h1>
             <img className="profilePicture" alt="profile" src={location.state.picture} ></img>
             <h3 className="name">{location.state.firstName} {location.state.lastName}</h3>

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
