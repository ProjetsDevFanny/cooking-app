import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [cardData, setCardData] = useState([]); // On créer une variable pour stocker les données de l'API

  const getData = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
      .then((res) => {
        // console.log(res.data);
        // On va chercher les données du serveur puis on les stocke dans une variable (blogData)
        // On utilise la méthode setBlogData pour mettre à jour le state
        setCardData(res.data);
      });
  };

  // UseEffect (quand le composant est appelé) => on va chercher les données ([] =  callback)
  useEffect(() => getData(), []);

  return (
    <div className="card">
      <h2>Card</h2>
    </div>
  );
};

export default Card;
