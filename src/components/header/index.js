import React from "react";

const MainHeader = ({ photo_url }) => {
  return (
    <div className="Main-Header">
      <div className="Logo-SearchBar">
        <div className="Logo">Instagram</div>
        <div className="Search"></div>
      </div>
      <div className="Icons-Container">
        <div className="Icon-Link"></div>
        <div className="Profile-Image">
          <img src="photo_url" alt="photo" className="Photo" />
        </div>
      </div>
    </div>
  );
};

export default index;
