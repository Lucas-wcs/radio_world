import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <div className="container-logo">
        <img
          src="src/images/Radio_World.png"
          className="logoRW"
          alt="Radio World logo"
        />
      </div>
      {/* <img
        src="src/images/heart.png"
        className="favoriteButton"
        alt="favoriteButton"
      /> */}
      {/* <div className="logoRS">
        <div className="RS1">
          <img src="/twitter.png" alt="Twitter logo" />
          <img src="/instagram.png" alt="Insta logo" />
        </div>
        <div className="RS2">
          <img src="/Facebook.png" alt="Fb logo" />
          <img src="/courrier.png" alt="Contact logo" className="courrier" />
        </div>
      </div> */}
    </div>
  );
}

export default NavBar;
