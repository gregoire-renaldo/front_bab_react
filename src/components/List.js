import React, { useState, useEffect } from "react";
import axios from "axios";
import './List.css'

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
    <div  className="wrapper-line list-cards">
      {data.map((item) => (
        <CardBoat key={item._id} item={item} />
      ))}
    </div>

  );
};



export default List;
