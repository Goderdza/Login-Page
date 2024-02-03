import React from "react";
import "../styles/CancelButton.scss";
import { useNavigate } from 'react-router-dom';

const CancelButton = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main');
  };
  return (
    <div className="cancel">
      <button className="cancel-button" onClick={handleClick}>
        X
      </button>
    </div>
  );
};

export default CancelButton;
