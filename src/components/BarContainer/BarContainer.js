import React from 'react';
import './BarContainer.css';


function BarContainer(props) {
  return (
    <div className="BarContainer">
    {props.children}
    </div>
  );
}

export default BarContainer;
