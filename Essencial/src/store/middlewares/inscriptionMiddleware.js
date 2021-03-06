
import {SUBMIT_FORM, actionSaveUser /* SAVE_USER, */} from '../../actions/inscription';
import { REQUEST_CHANGE_PROFIL_USER, DELETE_USER } from '../../actions/updateProfile';
import { actionLogout } from '../../actions/user';
import {requestInscriptionForm, requestUpdateUser, requestDeleteUser /* saveAuthorization, */ } from '../../requests/';



const inscriptionMiddleware = (store) => (next) => async (action) => {
  
 switch (action.type) {
   case SUBMIT_FORM: {
     // on intercepte mon action SUBMIT_FORM
     console.log("loginMiddleware j'ai intercepté SUBMIT_FORM");
     

     const state = store.getState();
     console.log(store.getState(),'stateinscription')
     //je recupere mon state dans le reducer .inscription 
    console.log('logstate.inscription',state.inscription);
     const { last_name, first_name, email, pseudo, password, address, region, zip_code, city, path} = state.inscription;
     
     //test
    
     //console.log('je fait mon getState pour recuperer', { last_name, first_name, email, pseudo, password, address, region, zip_code, city, path});

     try {
       // on execute la requete POST /createUser
         console.log('je lance ma requete create user');




         const { user, photo} = await requestInscriptionForm( last_name, first_name, email, pseudo, password, address, region, zip_code, city, path );
         //console.log("la requete est terminé et j'ai récupéré:", { user,photo});




        
         //console.log("je dispatch SAVE_USER avec les infos de l'utilisateur connecté");
         store.dispatch(
           actionSaveUser( last_name, first_name, email, pseudo, password, address, region, zip_code, city, path),
         );
       }
       catch (err) {
       // on capture les eventuelles erreur de la requete
         console.error(err);
       }

 
     return; // on bloque mon action SUBMIT_LOGIN pour ne pas l'envoyer aux reducers
   }

  /*  case SAVE_USER: {
     // 1. je sauvegarder le token dans mon instance perso axios
     saveAuthorization(action.payload.token);

     // j'envoie l'action SAVE_USER aux reducers
     // avant de faire ma requete, pour ne pas bloquer mon action SAVE_USER
     next(action);

     try {
       // 2. j'appel ma requete securisé, mais comme j'ai posé le token dans mon instance, ma requete pourra l'utiliser
       const { favorites } = await requestFavorites();
       console.log('resultat de la requete favorites=', favorites);
       store.dispatch(actionSetFavorites(favorites));
     }
     catch (err) {
       console.error(err);
     }
     break;
   } */

   case REQUEST_CHANGE_PROFIL_USER : {

    try {
      //console.log("je soumets ma requête avec ", action.payload.dataUser)

        const response = await requestUpdateUser( action.payload.dataUser );
        //console.log("réponse de ma requee updateUser",response)
        
      }
      catch (err) {
      // on capture les eventuelles erreur de la requete
        console.error(err);
      }

    return
   }
   

   case DELETE_USER : {

    
    try {
      //console.log("je soumets ma requête delete user avec ", action.payload.userId)

        const response = await requestDeleteUser( action.payload.userId );
        //console.log("réponse de ma requee deleteUser",response)
        
        if(response.status===200) {
          window.alert("Votre compte a bien été supprimé")
          //console.log("user bien supprimé, logout lancé")
          store.dispatch(
            actionLogout(),
          );
        }
      }
      catch (err) {
      // on capture les eventuelles erreur de la requete
        console.error(err);
        
      }

    return
   }

   default:
     next(action); // pour dire à redux qu'il peut passer aux middlewares suivant, puis aux reducers
 }
};

export default inscriptionMiddleware;