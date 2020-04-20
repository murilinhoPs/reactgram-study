import React, { useState } from "react";
import { BsThreeDots, BsBookmark, BsHeartFill, BsHeart } from "react-icons/bs";
import { FaRegCommentDots, FaRegPaperPlane } from "react-icons/fa";

import "./styles.css";

const Photo = ({ url, legend, name, profile_image, profile_link }) => {
  let curtir = false;

  const [state, setState] = useState({ curtiu: curtir });

  const changeIcon = () => {
    setState({ curtiu: !state.curtiu });
  };

  const PhotoHeader = () => (
    <div className="Photo-header">
      <div className="Profile">
        <div className="Profile-photo">
          <img src={profile_image} alt="Foto de perfil" />
        </div>
        <div className="Profile-name">
          <a href={profile_link} target="blank">
            {name}
          </a>
          <text>São Paulo, Brazil</text>
        </div>
      </div>
      <BsThreeDots size="22px" opacity="0.7" />
    </div>
  );
  const FooterIcons = () => (
    <div className="footer-icons">
      <div className="primary-icons">
        <div onClick={changeIcon} className="icon-click-event">
          {!state.curtiu && <BsHeart size="23px" />}

          {state.curtiu && (
            <span>
              <BsHeartFill color="#FF0000" size="23px" />
            </span>
          )}
        </div>
        <FaRegCommentDots size="19px" opacity="0.5" />
        <FaRegPaperPlane size="19px" opacity="0.5" />
      </div>
      <BsBookmark size="23px" opacity="0.7" />
    </div>
  );

  const FooterNewComment = () => (
    <div className="Photo-new-comment">
      <form className="Adicione">
        <input></input>
      </form>
    </div>
  );

  return (
    <div className="Photo">
      <PhotoHeader />

      <div className="Photo-container">
        <img src={url} alt="Foto" />
      </div>

      <div className="Photo-footer">
        <FooterIcons />
        {state.curtiu && (
          <div className="likes">
            <text>Curtido por: {name}</text>
          </div>
        )}

        <legend>
          {name} <text>{legend}</text>
        </legend>
      </div>
    </div>
  );
};

export default Photo;
