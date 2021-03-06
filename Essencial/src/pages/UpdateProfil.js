// == Imports
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {  actionChangeUpdateProfileUser, actionChangeUpdateProfileVillage,
     actionRequestChangeProfileUser, actionRequestChangeProfileVillage, actionDeleteProfileUser, 
     actionDeleteProfileVillage } from '../actions/updateProfile';
import * as dayjs from 'dayjs'
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "../styles/update.scss";


const UpdateProfil = () => {
    const dispatch = useDispatch();

    //je récupère les infos de l'utilisateur ds le reducer updtaeProfile + son type
    const dataUser = useSelector((state) => state.updateReducer.user);
    const dataVillage = useSelector((state) => state.updateReducer.ecoVillage);
    const typeUser = useSelector((state) => state.updateReducer.type);

    
   
    if(dataUser.description===null){
        dataUser.description=''
    }
    
    console.log(dataUser)
       
  

    //je submit au click sur Modifier avec deux requêtes différentes car je vise deux objets différents ds le reducer
    const handleSubmitUser = (evt) => {
        evt.preventDefault()
        //console.log("je lance ma requête requestUpdateProfileUser")
        dispatch(
            actionRequestChangeProfileUser(dataUser)
        )
        window.alert("Votre profil a été mis à jour")
    }

    const handleSubmitVillage = (evt) => {
        evt.preventDefault()
        //console.log("je lance ma requête requestUpdateProfileVillage")
        dispatch(
            actionRequestChangeProfileVillage(dataVillage)
        )
        window.alert("Votre profil a été mis à jour")

    }
    //je change les valeurs du reducer correspondant au nom de l'input, deux objets ds le reducer donc deux actions différentes
    const handleChangeUser = (evt) => {
        
        dispatch(
            actionChangeUpdateProfileUser(evt.target.name, evt.target.value)
        )
    }

    const handleChangeVillage = (evt) => {
        console.log(evt.target.name, evt.target.value)
        dispatch(
            actionChangeUpdateProfileVillage(evt.target.name, evt.target.value)
        )        
    }

    //Echec -> tentative de réunir le code sur principe DRY getId pour deleteUser et deleteVillage
    // const [userId, setUserId] = useState('');

    // const getId = ()  => {
    //     const token = localStorage.getItem('token');
    //     const user = jwt_decode(token);
    //     const idToken = user.id
    //     const idUser = idToken.toString()
    //     setUserId(idUser)
    //     console.log("dans la fonction getId",idUser)
    // }

    const [redirect, setRedirect] = useState(false)
   
    const navigate = useNavigate();

    const deleteUser = () => {
        const token = localStorage.getItem('token');
        const user = jwt_decode(token);
        const idToken = user.id
        const idUser = idToken.toString()
        //getId()
        //console.log("deleteUser",idUser)
        dispatch(
            actionDeleteProfileUser(idUser),  
            navigate('/')          
        )      
        setRedirect(true)
    }

    const deleteVillage = () => {
        const token = localStorage.getItem('token');
        const user = jwt_decode(token);
        const idToken = user.id
        const idUser = idToken.toString()
        //getId()
        //console.log("deleet village",idUser)
        dispatch(
            actionDeleteProfileVillage(idUser),
            navigate('/')
        )     
        setRedirect(true)
    }

    

    // useEffect(()=> {
    //     if(redirect===true) {
    //         navigate('/')
    //         setRedirect(false)
    //     }
    // })
    
    


    return (
        <div className="home" >

             {dataUser||dataVillage ? (

                <>
                
                {typeUser==='user' ? (
                    
                    <>

                        <div className="login-form-particular">

                            <form autoComplete="off" className="login-form-particular-form" onSubmit={handleSubmitUser}>

                                <div className="login-form-particular-form-left">
                                    <input
                                    className="login-form-particular-form-inputs"
                                    name="last_name"
                                    placeholder="Nom"
                                    onChange={handleChangeUser}
                                    value={dataUser.last_name}
                                    />
                                    <input
                                    className="login-form-particular-form-inputs"
                                    name="first_name"
                                    placeholder="Prenom"
                                    onChange={handleChangeUser}
                                    value={dataUser.first_name}
                                    />
                                    <input
                                    className="login-form-particular-form-inputs"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChangeUser}
                                    value={dataUser.email}
                                    />
                                    <input
                                    className="login-form-particular-form-inputs"
                                    name="pseudo"
                                    placeholder="Pseudo"
                                    onChange={handleChangeUser}
                                    value={dataUser.pseudo}
                                    />
                                    <input
                                    className="login-form-particular-form-inputs"
                                    name="password"
                                    type="password"
                                    placeholder="Nouveau mot de passe"
                                    onChange={handleChangeUser}
                                    value={dataUser.password}
                                    />
                                    <input
                                    className="login-form-particular-form-inputs"
                                    name="address"
                                    placeholder="Adresse"
                                    onChange={handleChangeUser}
                                    value={dataUser.address}
                                    />
                                 </div>

                                <div className="login-form-particular-form-right">

                                    <input
                                    className="login-form-particular-form-inputs"
                                    name="zip_code"
                                    placeholder="Zip_code"
                                    onChange={handleChangeUser}
                                    value={dataUser.zip_code}
                                    />
                                    <input
                                    className="login-form-particular-form-inputs"
                                    name="city"
                                    placeholder="Ville"
                                    onChange={handleChangeUser}
                                    value={dataUser.city}
                                    />
                                    <input
                                    className="login-form-particular-form-inputs"
                                    name="region"
                                    placeholder="Region"
                                    onChange={handleChangeUser}
                                    value={dataUser.region}
                                    />
                                    <input
                                    className="login-form-particular-form-inputs"
                                    name="path"
                                    placeholder="Url_image"
                                    onChange={handleChangeUser}
                                    value={dataUser.path}
                                    />
                                    <input
                                    className="login-form-particular-form-inputs"
                                    name="description"
                                    placeholder="description"
                                    onChange={handleChangeUser}
                                    value={dataUser.description}
                                    />
                                    <button
                                    className="login-form-particular-form-button"
                                    type="submit"
                                    >
                                    Modifier
                                    </button>
                                </div>

                               
                            </form>

                            <button
                                    onClick={deleteUser}
                                    className="login-form-particular-form-delete-button"
                                    >
                                   Supprimer mon compte
                            </button>

                        </div>

                
                    </>

                    ) : (

                        <div className="login-form-particular">

                            <form autoComplete="off" className="login-form-element" onSubmit={handleSubmitVillage}>
                                <input
                                    name="name"
                                    placeholder="Nom de l'Écovillage"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.name}
                                />
                                <input
                                    name="path"
                                    placeholder="Url_image"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.path}
                                />
                                <input
                                    name="description"
                                    placeholder="Description de l'Écovillage"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.description}
                                />
                                <input
                                    name="website"
                                    placeholder="adresse internet du site"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.website}
                                />
                                <input
                                    name="address"
                                    placeholder="Adresse"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.address}
                                />
                                <input
                                    name="zip_code"
                                    placeholder="Zip_code"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.zip_code}
                                />
                                <input
                                    name="city"
                                    placeholder="Ville"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.city}
                                />
                                <input
                                    name="region"
                                    placeholder="Region"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.region}
                                />

                                <input
                                    name="last_name_manager"
                                    placeholder="Nom du manager"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.last_name_manager}
                                />
                                <input
                                    name="first_name_manager"
                                    placeholder="Prenom du manager"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.first_name_manager}
                                />
                                <input
                                    type="date"
                                    name="date_of_birth_manager"
                                    placeholder="date de naissance du manager"
                                    onChange={handleChangeVillage}
                                    value={dayjs(dataVillage.date_of_birth_manager).format("YYYY-MM-DD")}
                                />
                                <input
                                    name="phone_number"
                                    placeholder="numéro de téléphone"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.phone_number}
                                />
                                <input
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.email}
                                />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Mot de passe"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.password}
                                />

                                <button
                                    type="submit"
                                    className="login-form-button"
                                >
                                    Modifier
                                </button>
                               
                            </form>

                            <button
                                onClick={deleteVillage}
                                className="login-form-button"
                            >
                                Supprimer mon compte
                            </button>

                        </div>

                )}

                </>
                        
            ) : (

                <>
                Veuillez vous connecter avant d'accéder à ce service
                </>

            )} 
                  

        </div>
    );
};

export default UpdateProfil;