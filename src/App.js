import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/index.css";
import Cardcontainer from "./components/Cardcontainer";

const App = () => {
  const [meals, setMeals] = useState([]); // On créer une variable pour stocker les données de l'API dans un tableau

  const getData = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => {
        console.log(res.data.meals);
        // On va chercher les données du serveur puis on les stocke dans une variable (blogData)
        // On utilise la méthode setBlogData pour mettre à jour le state
        setMeals(res.data.meals);
      })
      .catch((error) => {
        console.error("Erreur API :", error);
      });
  };

  // UseEffect (quand le composant est appelé) => on va chercher les données ([] =  callback)
  useEffect(() => getData(), []);

  return <Cardcontainer meals={meals} />;
};
export default App;

// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
