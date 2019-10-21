import { ADD_POST, DELETE_POST, FETCH_POST } from './actionTypes';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/contacts';

export const createPost = ({ name, email, message }) => {
  return (dispatch) => {
    return axios.post(apiUrl, {name, email, message})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPostSuccess =  (data) => {
  return {
    type: ADD_POST,
    payload: {
      id: data._id,
      name: data.name,
      email: data.email,
      message: data.message
    }
  }
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  }
}

export const deletePost = id => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
};

export const fetchAllPosts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};