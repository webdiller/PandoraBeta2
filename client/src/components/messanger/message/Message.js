import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Message.sass";

const Message = ({ avatar, text, date, handle }) => {
  return (
    <div className="message">
      <div className="message__avatar">
        <img
          style={{ width: "40px", height: "40px", borderRadius: "100px" }}
          src={avatar}
          alt={`Avatar ${handle}`}
        />
      </div>
      <div className="message__bubble">
        <p className="message__text">{text}</p>
      </div>
      <span className="message__date" style={{ fontSize: "13px" }}>
        Вчера в 12:31
      </span>
    </div>
  );
};

Message.defaultProps = {
  handle: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  handle: PropTypes.object,
};

export default Message;
