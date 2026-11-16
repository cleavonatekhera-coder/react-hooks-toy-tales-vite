
import React from "react";

function ToyCard({ toy }) {
  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
<<<<<<< Updated upstream
       <p>{toy.likes} Likes </p>     
        <button className="like-btn">Like {"<3"}</button>
=======
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
>>>>>>> Stashed changes
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

