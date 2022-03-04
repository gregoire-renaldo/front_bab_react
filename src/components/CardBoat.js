import "./CardBoat.css";

const CardBoat = ({  boat }) => (

    <div className="wrapper-cardboat">
      <div className="card-top">
        <img
          src={`http://localhost:8000/public/img/boats/${boat.photo}`}
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
    </div>

);

export default CardBoat;
