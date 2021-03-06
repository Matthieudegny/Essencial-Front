// == Imports
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/InCardVillage.scss";

function InCardVillage() {
  const villagesArray = useSelector((state) => state.allUsers.allVillages);

  const [village, setVillage] = useState("");
  // console.log(villagesArray)

  let { villageId } = useParams();
  let test = +villageId;
  //console.log(typeof(test))

  useEffect(() => {
    const village = villagesArray.find((testedVillage) => {
      return testedVillage.id === test;
    });
    setVillage(village);
    //remplacer find par une requête village/id
  }, [villageId]);

  //console.log("viewuser userId =",userId)

  return (
    <div className="in-card-village">
      {village && (
        <>
          <div className="in-card-village-imgVillage">
            <img src={village.path} alt="village" className="in-card-village-imgVillage-image" />
          </div>

          {/* <h1>First Name = {user.first_name}</h1>
              <h1>Last Name = {user.last_name}</h1> */}
          <div className="in-card-village-infos">
            <h1>{village.name}</h1>
            <h2>{village.region} </h2>
            <h3>{village.description} </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default InCardVillage;
