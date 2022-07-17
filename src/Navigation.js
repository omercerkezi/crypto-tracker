import React from "react";
import "./Navigation.css";

function Navigation(props) {
  return (
    <nav>
      <div className="coin-search">
        <h1 className="coin-text">CoinTracker</h1>
        <div className="coin-mode-search">
          <form className="coin-input">
            <input
              type="text"
              placeholder="Search by Coin Name"
              className="coin-input2"
              onChange={props.change}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
