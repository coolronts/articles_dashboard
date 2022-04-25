import React from "react";

const styles = require('./Spinner.module.css');

export const Spinner: React.FC = () => {
  return (
    <div className= {styles.spinnerContainer}>
      <div className= {styles.loadingSpinner}>
      </div>
    </div>
  );
}