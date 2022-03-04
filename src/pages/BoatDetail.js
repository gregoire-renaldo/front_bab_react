import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"
import axios from "axios";
import BoatInformation from "../components/BoatInformation";



const BoatDetail = () => {
  const params = useParams();
  // params key/value
  console.log(params.boatId);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios(`http://localhost:8000/boat/getBoat/${params.boatId}`)
      .then((response) => {
        console.log(response.data.data.boat);
        setData(response.data.data.boat);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <BoatInformation boat={data}/>
  );
};
export default BoatDetail;
