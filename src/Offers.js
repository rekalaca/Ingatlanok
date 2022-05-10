import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Offers = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tomb, setTomb] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/ingatlan")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setTomb(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  },[])

  if(error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded){
    return <div>Loading...</div>;
  } else {  


  return (
    <>
      <h1 className="cim">Ajánlataink</h1>
      <div className="tabla">
        <table className="table">
          <thead className="kozep">
            <tr>
              <th scope="col">Kategória</th>
              <th scope="col">Leírás</th>
              <th scope="col">Hírdetés dátuma</th>
              <th scope="col">Tehermentes</th>
              <th scope="col">Fényép</th>
            </tr>
          </thead>
          <tbody>
            {tomb.map((item, index) => (           
            <tr key={index}>
              <td className="kozep">{item.kategoriaNev}</td>
              <td>{item.leiras}</td>
              <td className="kozep">{item.hirdetesDatuma}</td>
              <td className="kozep">{item.tehermentes ? <p className="i">igen</p> : <p className="n">nem</p>}</td>
              <td className="kozep"><img src={item.kepUrl}></img></td>
            </tr>
            ))}
          </tbody>
        </table>
        <div className="kozep"><Link to="/"><button type="button" className="btn btn-outline-success">Vissza a főlapra!</button></Link></div>
      </div>
    </>
  )
  }
};

export default Offers;