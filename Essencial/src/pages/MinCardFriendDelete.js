// == Imports
import React from "react";
//import "../styles/minCard";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import DeleteForm from "../components/DeleteForm/deleteForm";
import { actionSubmitFriend } from "../actions/addfriend";

const MinCard = ({ imageLink, pseudo, name, region, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="minCard">

      <NavLink to={`/user-vue/${id}`}>
        <img src={imageLink} alt="user" />
      </NavLink>

      <h1>
        {pseudo}
        {name}
      </h1>

      <h3>{region}</h3>

        <DeleteForm id={id}/>
      
    </div>
  );
};

export default MinCard;