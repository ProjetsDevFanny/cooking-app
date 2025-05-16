import React from "react";
import Card from "./Card";

// On a récupéré les données de l'API (dans le fichier App.js) et on les affiche dans le composant Cardcontainer

// On vérifie si les données sont bien récupérées et si elles sont bien un tableau
const Cardcontainer = ({ meals }) => {
  if (!meals || !Array.isArray(meals)) {
    return <p>Chargement des repas...</p>;
  }

  return (
    <ul className="cards-container">
      {meals.map((meal) => (
        <Card meal={meal} key={meal.idMeal} />
      ))}
    </ul>
  );
};
export default Cardcontainer;
