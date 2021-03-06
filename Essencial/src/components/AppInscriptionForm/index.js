import { useSelector, useDispatch } from 'react-redux';
import InscriptionForm from '../InscriptionForm';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { actionChangeFormField, actionSubmitForm } from '../../actions/inscription';
import '../../styles/AppInscriptionForm.scss';



function AppInscriptionForm() {
  const dispatch = useDispatch();

  const last_name = useSelector((state) => state.inscription.last_name);
  const first_name = useSelector((state) => state.inscription.first_name);
  const email = useSelector((state) => state.inscription.email);
  const pseudo = useSelector((state) => state.inscription.pseudo);
  const password = useSelector((state) => state.inscription.password);
  const address = useSelector((state) => state.inscription.address);
  const zip_code = useSelector((state) => state.inscription.zip_code);
  const city = useSelector((state) => state.inscription.city);
  const region = useSelector((state) => state.inscription.region);
  const path = useSelector((state) => state.inscription.path);

  const [redirect, setredirect] = useState(false);

  //hook de react router pour rediriger
  const navigate = useNavigate();
 
  //useEffect qui se déclenche uniquement qd la veleur isLogged change et redirect est true
  useEffect(() => {
    if(redirect)navigate('/')
  });

  return (
    <header className="header">

      <InscriptionForm
        last_name={last_name}
        first_name={first_name}
        email={email}
        pseudo={pseudo}
        password={password}
        address={address}
        zip_code={zip_code} 
        city={city}
        region={region} 
        path={path}
        changeField={(value, inputName) => {
          //console.log('changeField', { value, inputName });
          dispatch(
            actionChangeFormField(value, inputName),
          );
        }}
        handleForm={() => {
          console.log('handleForm');
          dispatch(
            actionSubmitForm(),
            // on envoie mon action submitForm au middleware, pour qu'il declenche la requete d'inscription
          );
          setredirect(true)
        }}

        

      />
    </header>
  );
}

export default AppInscriptionForm;
