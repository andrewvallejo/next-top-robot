
import axios from "axios";

const robot = 'x-robot-art-api-key';
const key  = '20aa48d3a65c7373416c6938f9d606a8';

const generateApiUrl = (request) => {
  const url = "https://mondo-robot-art-api.herokuapp.com"
  switch (request) {
    case 'session':
      return `${url}/auth/session`
    case 'register': 
      return `${url}/auth/register`
    case 'user': 
      return `${url}/users`
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
    headers: `${robot}: ${key}`,
    data: data
  } ; 
  return sendRequest(config)
}

export const expireSession = async(token) => {
  const config = {
    method: 'delete',
    url: generateApiUrl('session'),
    headers: {'Authorization': `Bearer ${token}`}
  };
  return sendRequest(config)
}

const sendRequest = async(config) => {
 return await axios(config)
  .then((response) => response.data)
  .catch((error) => console.log('Sorry, an error has occured:', error))
}
  



 

 


 


