
import axios from "axios";

const key  = '20aa48d3a65c7373416c6938f9d606a8'

const generateApiUrl = (request) => {
  const url = "https://mondo-robot-art-api.herokuapp.com"
  switch (request) {
    case 'session':
      return `${url}/auth/session`
    case 'register': 
      return `${url}/auth/register`
    case 'robots': 
      return `${url}/robots`
    default: 
      break;
  }
}

export const authenticateUser = async(email, password) => {
  const data = {
    'email': email,
    'password': password
  };
  const config = {
    method: 'post',
    url: generateApiUrl('session'),
    headers: {'x-robot-art-api-key': key},
    data: data
  }  
  return await sendRequest(config)
}

export const expireSession = async(token) => {
  const config = {
    method: 'delete',
    url: generateApiUrl('session'),
    headers: {'Authorization': `Bearer ${token}`}
  }
  return await sendRequest(config)
}

export const retrieveRobots = async(token) => {
  const config = {
    method: 'get',
    url: generateApiUrl('robots'),
    headers: {'Authorization': `Bearer ${token}`}
  }
  return await sendRequest(config)
};

const sendRequest = async(config) => {
 return await axios(config)
  .then((response) => response.data)
  .catch((error) => console.log('Sorry, an error has occured:', error))
}
  



 

 


 


