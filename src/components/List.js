import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./List.css";

import CardBoat from "./CardBoat";

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios("http://localhost:8000/boat/boats")
      .then((response) => {
        console.log(response.data.data.boats);
        setData(response.data.data.boats);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="wrapper-line list-cards">
      {data.map((boat) => (
        <Link to={`/boats/${boat._id}`} key={boat._id}>
          <CardBoat boat={boat} />
        </Link>
      ))}
    </div>
  );
};

export default List;
