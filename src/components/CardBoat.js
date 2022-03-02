import "./CardBoat.css";

const CardBoat = ({ item }) => (
  <a className="card" href="http://">

  <div className="wrapper-cardboat">
    <div className="card-top">
      <img
        src={`http://localhost:8000/public/img/boats/${item.photo}`}
        alt=""
      />
    </div>
    <div className="card-bottom">
      <div className="wrapper-line">
        <div>Voilier 4 couchages</div>
        <div> * * * * *</div>
      </div>
      <div className="wrapper-line">
        <div>La Rochelle</div>
        <div>36€ /nuit</div>
      </div>
    </div>

    {/* <li>
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
    </li> */}
  </div>

  </a>
);

export default CardBoat;
