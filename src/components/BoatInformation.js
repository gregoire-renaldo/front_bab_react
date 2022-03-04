const BoatInformation = (props) => {

  return (
    <div>
      <h1>{props.boat.name}</h1>
      <h1>Boat Detail</h1>
      <p>{props.description}</p>
    </div>
  )

}

export default BoatInformation
