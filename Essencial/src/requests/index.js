/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// on créer une instance de axios avec des parametres par defaut
// comme ca, à chaque futur requete on a pas besoin de repeter certaine info
const axiosInstance = axios.create({
  //baseURL: 'http://localhost:3001',
  baseURL: 'https://essencial-api.herokuapp.com',
});

export function saveAuthorization(token) {
  // on va modifier les valeurs par defaut de notre instance axios pour sauvegarder le token
  axiosInstance.defaults.headers.common.Authorization = `jwt ${token}`;

}


export function removeAuthorization() {
  // on supprime le token par defaut de notre instance
  axiosInstance.defaults.headers.common.Authorization = '';
}
/* 
export async function requestRecipesList() {
  const response = await axiosInstance.get('/recipes');
  return response.data;
} */

// ici ma requete pour le login 

export async function requestLogin(email, password) {
  // on utilise notre instance personnalisé de axios, donc on a pas besoin
  // de preciser la baseURL ("http://localhost:3001")
  //console.log("je me connecte à l'API d'Arthur 'https://essencial-api.herokuapp.com' ");
  // const response = await axiosInstance.post('/login', {
  //   email, password,
  // });

  const response = await axiosInstance.post('/api/connexion', {
    //paramétrage du CORS object dans post -> 
    //"email": "exemple@gmail.com", 
    //"password": "kldshfksh"
    email,
    password,
  });
  //console.log(response)
  return response.data;
}

// ici ma requete pour le formulaire d'inscription

export async function requestInscriptionForm(last_name, first_name, email, pseudo, password, address, region, zip_code, city, path) {
  // on utilise notre instance personnalisé de axios, donc on a pas besoin
  // de preciser la baseURL ("http://localhost:3001")
  //console.log("je me connecte à l'API d'Arthur 'https://essencial-api.herokuapp.com' ");
  /*  console.log('LOGDEBUG',{
     //paramétrage du CORS object dans post -> 
     last_name,
     first_name,
     email,
     pseudo,
     password,
     address,
     region,
     zip_code,
     city,
     path,
   }); */
  const response = await axiosInstance.post('/api/user/create', {
    //paramétrage du CORS object dans post -> 
    last_name,
    first_name,
    email,
    pseudo,
    password,
    address,
    region,
    zip_code,
    city,
    path,
  });
  console.log(response)
  return response.data;
}

// ici ma requête pour ajouter un éco-village

export async function requestInscriptionFormVillage(name, path, description, website, address, zip_code, city, region, last_name_manager, first_name_manager, date_of_birth_manager, phone_number, email, password) {
  // on utilise notre instance personnalisé de axios, donc on a pas besoin
  // de preciser la baseURL ("http://localhost:3001")
  //console.log("je me connecte à l'API d'Arthur 'https://essencial-api.herokuapp.com' ");
  const response = await axiosInstance.post('/api/ecovillage/create', {
    //paramétrage du CORS object dans post -> 
    name,
    path,
    description,
    website,
    address,
    zip_code,
    city,
    region,
    last_name_manager,
    first_name_manager,
    date_of_birth_manager,
    phone_number,
    email,
    password,
  });
  console.log(response)
  return response.data;
}

// ici ma requete pour ajouter un post 

export async function requestAddPost(title, content, path, category_1, category_2) {
  // on utilise notre instance personnalisé de axios, donc on a pas besoin
  // de preciser la baseURL ("http://localhost:3001")
  //console.log("je me connecte à l'API d'Arthur 'https://essencial-api.herokuapp.com' ");
  const response = await axiosInstance.post('/api/post/create', {
    //paramétrage du CORS object dans post -> 
    title,
    content,
    path,
    category_1,
    category_2,
  });
  console.log(response)
  return response.data;

}

// ici id =  friendid
export async function requestAddFriend(id) {

  const response = await axiosInstance.get(`/api/user/friends/add/${id}`, {
  
  });
  
  console.log(response)
  return response.data;

}


export async function requestGetAllPosts() {

  const response = await axiosInstance.get('/api/post')
  //console.log("request post",response.data)
  return response.data;
}

export async function requestGetAllTutos() {

  const response = await axiosInstance.get('/api/post/tuto')

  //console.log("request post/tuto",response.data)
  return response.data;
}



export async function requestGetAllUSers() {

  const response = await axiosInstance.get('/api/user')

  return response
}

export async function requestGetAllVillages() {

  const response = await axiosInstance.get('/api/ecovillage')

  return response
}

export async function requestInfosUser(id, type) {
  //console.log(type, id);
  //console.log("requestInfosUser:type, id",type, id);
  const response = await axiosInstance.get(`/api/${type}/${id}`)
  //const response = await axiosInstance.get('/api/user/1')

  return response
}

export async function requestUpdateUser(newDatas) {
  const response = await axiosInstance.patch(`/api/user`, {
    ...newDatas
  }) 
  return response
}

export async function requestUpdateVillage(newDatas) {
  const response = await axiosInstance.patch(`/api/ecovillage`, {
    ...newDatas
  }) 
  return response
}

export async function requestDeleteUser(userId) {
  console.log(`.delete /api/user/${userId}`)
  const response = await axiosInstance.delete(`/api/user/${userId}`)
 
  return response
}

export async function requestDeleteVillage(userId) {
  console.log(`/api/ecovillage/${userId}`)
  const response = await axiosInstance.delete(`/api/ecovillage/${userId}`)
 
  return response
}

export async function requestGetAllFriends(userId) {
  //console.log(`/api/user/friends/${userId}`)
  const response = await axiosInstance.get(`/api/user/friends/${userId}`)
 
  return response
}

export async function requestDeleteFriend(userId) {
   console.log(`/api/user/friends/${userId}`)
   const response = await axiosInstance.delete(`/api/user/friends/delete/${userId}`)
  
   return response
}