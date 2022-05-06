import React from "react";
const HeaderDiv = ({ clickFunc }) => {
  return (
    <header>
      <img src={require("../../src/logo.png")} alt="Logo" />
      <form className="form" action="">
        <select id="character-state">
          <option value="All">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>

        <input
          type="search"
          id="search"
          className="search"
          placeholder="search by name"
        />
      </form>
      <button className="header-btn" onClick={clickFunc}>
        Load Data
      </button>
    </header>
  );
};
export default HeaderDiv;
