import "./Content.css";
import List from "../components/List";
import React, {useState} from "react";

const Content = () => {

  const [isToggled, setToggle] = useState(true);
  function handleClick(e) {
    e.preventDefault();
    console.log("clicked");
    setToggle(!isToggled)
    console.log(!isToggled)
  }

  return (
    <div className="container-content">
      <div className="content-bloc1">
        <button className="button" onClick={handleClick}>
          Voir tous les bateaux
        </button>
      </div>
      <div>
        {isToggled ? <List /> : "Nthing"}

      </div>
    </div>
  );
};

export default Content;
