
import axios from "axios";

const key  = '20aa48d3a65c7373416c6938f9d606a8'
const url = "https://mondo-robot-art-api.herokuapp.com"

const generateApiUrl = (request) => {
  switch (request) {
    case 'session':
      return `${url}/auth/session`
    case 'register': 
      return `${url}/auth/register`
    case 'robots': 
      return `${url}/robots`
    case 'votes': 
      return `${url}/votes`
    default: 
      break;
  }
}

export const authenticateUser = async({ email, password }) => {
  const config = {
    method: 'post',
    url: generateApiUrl('session'),
    headers: {'x-robot-art-api-key': key},
    data: {
      'email': email,
      'password': password
    }
  }  
  return await sendRequest(config)
}

export const registerUser = async ({ name, email, password }) => { 
  const config = {
    method: 'post',
    url: generateApiUrl('register'),
    headers: {'x-robot-art-api-key': key},
    data: {
      'name': name,
      'email': email,
      'password': password
    }
  }
  return await sendRequest(config)
}

export const expireSession = async(token) => {
  console.log(token)
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

export const deleteRobot = async(id, token) => {
  const config = {
    method: 'delete',
    url: `${url}/robots/${id}`,    
    headers: {'Authorization': `Bearer ${token}`}
  };
  return await sendRequest(config)
}

export const voteForRobot = async(id, token) => {
  const config = {
    method: 'post',
    url: generateApiUrl('votes'),    
    headers: {'Authorization': `Bearer ${token}`},
    data : {'robot': id}
  };
  return await sendRequest(config)
}

export const undoVote = async(id, token) => {
  const config = {
    method: 'delete',
    url: `${url}/votes/${id}`,    
    headers: {'Authorization': `Bearer ${token}`},
  };
  return await sendRequest(config)
}

export const tallyResults = async(token) => {
  const config = {
    method: 'get',
    url: generateApiUrl('votes'),    
    headers: {'Authorization': `Bearer ${token}`},
  };
  return await sendRequest(config)
}

const sendRequest = async(config) => {
 return await axios(config)
  .then((response) => {console.log(response); return response.data})
  .catch((error) => console.log('Sorry, an error has occured:', error))
}

// console.log(response); return 