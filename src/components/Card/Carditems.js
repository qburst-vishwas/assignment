import React, { useEffect ,useState} from 'react'
import {Grid} from '@material-ui/core';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './card.css';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate,Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {getUsers} from '../../reducers/index';

const Carditems = ({userData,getUsers}) => {
  console.log("userData",userData)
 const userInfo=userData.users.results
  console.log("userinfo",userInfo)
  const navigate=useNavigate();
   
  //  const [page, setPage] = useState(1);

//     const getUsers= async (pageNumber) =>{
//     try {
//       axios.get("https://randomuser.me/api/?results=15&page={pageNumber}")
//       .then(res =>{
//         setUsers(res.data.results)
//         console.log(res.data.results);
//       })
//       // setUsers(data);
//       // console.log(data)
//   } catch (error) {
//       console.log("Error "+ error);
//   }
// }

  useEffect(() =>{
       getUsers();
  },[]);

   const clickFunction=()=>{
     console.log("clicked");
     navigate('/carddetails',)
   }
   const handleChange = (event, value) => {
   // setPage(event.target.innerText);
   // getUsers(page)
  };
  console.log("user info", userInfo)
    return (
    
        <>
        <div className="card-holder" >
        <Grid className="container" container alignItems="stretch">
       
        {userInfo && userInfo.map((user,idx) => {
          return(
            <>
            <Grid item lg={4}  className="cards">
            <Link to="/carddetails" state={{email:user.email,firstName:user.name.first,picture:user.picture.large,
            lastName:user.name.last,gender:user.gender,city:user.location.city,states:user.location.state,
            country:user.location.country,age:user.dob.age,phone:user.phone,postcode:user.location.postcode
            }}>
               <CardActionArea className="cardActions" onClick={clickFunction}>
                 <CardMedia
                 />
                 <CardContent className="content">
                   <Typography gutterBottom variant="h3" component="div" color="black">
                    {user.name.first}
                   </Typography>
                   <Typography variant="h6" color="text.secondary">
                    from {user.location.city}
                   </Typography>
                 </CardContent>
               </CardActionArea>
           </Link>
           </Grid>
           </>
        )})
          }
       </Grid>
   </div>
   <Stack spacing={3} className="page">
      <Pagination count={10} color="primary" variant="outlined"  onChange={handleChange}/>
    </Stack>
 </>
    )

}
const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Carditems)
