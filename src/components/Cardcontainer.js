import React from "react";
import Card from "./Card";

// On a récupéré les données de l'API (dans le fichier App.js) et on les affiche dans le composant Cardcontainer

// On vérifie si les données sont bien récupérées et si elles sont bien un tableau
const Cardcontainer = ({ meals, isLoading }) => {
  // Si les données sont en cours de chargement
  if (isLoading) {
    return (
      <div className="loading-container">
        <p className="loading-message">Chargement des repas...</p>
      </div>
    );
  }

  // Si aucun repas n'est trouvé
  if (!meals || meals.length === 0) {
    return (
      <div className="no-results-container">
        <p className="no-results-message">
          Aucun repas trouvé pour votre recherche.
        </p>
      </div>
    );
  }

  // Si des repas sont trouvés, on les affiche
  return (
    <ul className="cards-container">
      {meals
        // .slice(0, 24)
        .map((meal) => (
          <Card meal={meal} key={meal.idMeal} />
        ))}
    </ul>
  );
};

export default Cardcontainer;
