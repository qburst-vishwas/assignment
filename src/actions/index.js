import axios from 'axios';
import {FETCH_USERS_FAILURE,FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST} from './actionTypes';

   export const getUsers = () => {
      return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
          .get('https://randomuser.me/api/?results=15')
          .then(response => {
            const users = response.data
            console.log('users' ,users)
            dispatch(fetchUsersSuccess(users))
          })
          .catch(error => {
            dispatch(fetchUsersFailure(error.message))
          })
      }
    }

    export const fetchUsersRequest = () => {
      return {
        type: FETCH_USERS_REQUEST
      }
    }
    
    export const fetchUsersSuccess = users => {
      return {
        type: FETCH_USERS_SUCCESS,
        payload: users
      }
    }
    
    export const fetchUsersFailure = error => {
      return {
        type: FETCH_USERS_FAILURE,
        payload: error
      }
    }