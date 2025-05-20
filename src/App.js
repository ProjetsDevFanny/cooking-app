import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./styles/index.css";
import Home from "./pages/home";

// On récupère les données de l'API et on les affiche dans le composant Cardcontainer
const App = () => {
  const [meals, setMeals] = useState([]); // On créer une variable pour stocker les données de l'API dans un tableau
  const [isLoading, setIsLoading] = useState(true);
  // const [inputSearch, setInputSearch] = useState("");
  
  const getData = (search) => {
    setIsLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      // .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((res) => {
        console.log(res.data.meals);
        // On va chercher les données du serveur puis on les stocke dans une variable (<meals></meals>)
        // On utilise la méthode setMeals pour mettre à jour le state
        setMeals(res.data.meals);
        setIsLoading(false); // On met à jour le state pour indiquer que les données sont chargées
      })
      .catch((error) => {
        console.error("Erreur API :", error);
        setIsLoading(false);
      });
  };

  // UseEffect (quand le composant est appelé) => on va chercher les données ([] =  callback)
  useEffect(() => getData(""), []); // le callback est une fonction qui va être appelée lorsque le composant est monté (tu te joue qu'une fois)


  // Autre façon d'écrire :
  // useEffect(() => {
  //   axios
  //     .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}` )
  //     .then((res) => {
  //         console.log(res.data.meals);
  //         setMeals(res.data.meals);
  //         setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Erreur API :", error);
  //       setIsLoading(false);
  //     });
  // }, [inputSearch]); => On met l'inputSearch dans le tableau de dépendances pour que le useEffect soit exécuté à chaque fois que la valeur de inputSearch change (on le met dans le callback)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home meals={meals} getData={getData} isLoading={isLoading} />
          }
        />
        <Route
          path="*"
          element={
            <Home meals={meals} getData={getData} isLoading={isLoading} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
