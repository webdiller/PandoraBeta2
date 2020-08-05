import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/settings-profile" className="btn btn-light">
        Настройки
      </Link>
    </div>
  );
};

export default ProfileActions;
