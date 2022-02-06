import React from "react";
import "./BarraProgresso.css";

// Referência: https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl
const BarraProgresso = (props) => {
  const { barColor, completed } = props;

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: barColor,
    borderRadius: 'inherit',
    textAlign: 'right'
  };

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 10
  }
  
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span className="label">{`${completed}%`}</span>
      </div>
    </div>
  );
};

BarraProgresso.propTypes = {};

BarraProgresso.defaultProps = {};

export default BarraProgresso;
