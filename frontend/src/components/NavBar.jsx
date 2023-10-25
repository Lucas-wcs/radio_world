import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <img
        src="src/images/Radio_World.png"
        className="logoRW"
        alt="Radio World logo"
      />
      <div className="filters">Filtres Ange</div>
      <img
        src="src/images/heart.png"
        className="favoriteButton"
        alt="favoriteButton"
      />
      <div className="logoRS">
        <div className="logoRS1">
          <img src="src/images/twitter.png" alt="Twitter logo" />
          <img src="src/images/instagram.png" alt="Insta logo" />
        </div>
        <div className="logoRS2">
          <img src="src/images/facebook.png" alt="Fb logo" />
          <img src="src/images/email.png" alt="Contact logo" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
