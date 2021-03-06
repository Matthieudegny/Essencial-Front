// == Import
import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import { actiongetinfos, actionSaveInfoForGetInStore } from "../../actions/user";


// == Pages
import HomeLog from '../../pages/HomeLog';
import Addpost from '../../pages/AddPost';
import ViewFriends from '../../pages/ViewFriends';
import ViewMember from '../../pages/ViewMember';
import ViewTutos from '../../pages/ViewTutos';
import About from '../../pages/About';
import HomeConnexion from '../../pages/HomeConnexion';
import UpdateProfil from '../../pages/UpdateProfil';
import Confidentiality from '../../pages/Confidentiality';
import Research from '../../pages/Research';
import Admin from '../../pages/Admin';
import HomeVillage from '../../pages/HomeVillage';
import HomeInscription from '../../pages/HomeInscription';
import Contact from '../../pages/Contact';
import InCardUser from '../../pages/InCardUser'
import InCardVillage from '../../pages/InCardVillage';
import InCardPosts from '../../pages/InCardPosts';
import InCardTutos from '../../pages/InCardTutos';
import EcoVillages from '../../pages/ViewVillage';
import error404 from '../../pages/error404';


// == Composants
import Navigation from '../Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';


// ==  data, styles et utilitaires

import '../../styles/index.scss';
import '../../styles/app.scss'
import { saveAuthorization } from '../../requests';


function App() {

  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const pseudo = useSelector((state) => state.user.pseudo);

  //useEffect On utilise ce Hook pour indiquer à React que notre composant doit exécuter quelque chose après chaque affichage
  useEffect(() => {
    if (token !== null) {
      //1 étape decoder le token avec jwt_decode
      const user = jwt_decode(token);
      saveAuthorization(token);
   

       const idToken = user.id
       const userId = idToken.toString()
      //2 on envoie l'action getinfos au store avec dispatch 
      dispatch(actiongetinfos(userId, user.type));
      // 3 on dispatch(actionSaveUser(pseudo, token));
      dispatch(actionSaveInfoForGetInStore(user, token));
    } 
  },[]);

  

  return (
    <div className="App">
 
      <header className='App-header'>

        <Navigation />

      </header>

      <main className='App-main'>

        <aside className='App-main-aside'>
          <Sidebar />
        </aside>

        <div className='App-main-page'>



          <div className='App-main-page-wall'>
            <Routes>
              <Route path="/" element={HomeConnexion()} />
              <Route path="/accueil-inscription" element={HomeInscription()} />
              <Route path="/accueil" element={HomeLog()} />
              <Route path="/home-log-village" element={HomeVillage()} />
              <Route path="/ajouter-un-post" element={Addpost()} />
              <Route path="/amis" element={ViewFriends()} />
              <Route path="/membres" element={ViewMember()} />
              <Route path="/ecoVillages" element={EcoVillages()} />
              <Route path="/tutos" element={ViewTutos()} />
              <Route path="/a-propos" element={About()} />
              <Route path="/admin" element={Admin()} />
              <Route path="/contact" element={Contact()} />
              <Route path="/posts/:postsId" element={<InCardPosts/>} />
              <Route path="/eco-village-vue/:villageId" element={<InCardVillage />} />
              <Route path="/tutos/:tutosId" element={<InCardTutos />} />
              <Route path="/user-vue/:userId" element={<InCardUser />} />
              <Route path="/gestion-de-profil" element={UpdateProfil()} />
              <Route path="/confidentialite" element={Confidentiality()} />
              <Route path="/recherche" element={Research()} />
              <Route path="/home-log-village" element={HomeVillage()} />
              <Route path="*" element={error404()} />

            </Routes>



          </div>

        </div>

      </main>

      <footer className='App-main-footer'>
        <Footer />
      </footer>


    </div>
  );
}


// ==   Export
export default App;
