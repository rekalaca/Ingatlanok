import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Newad = () => {

  const [kategoriaId, setKategoriaId] = useState(1);
  const [kategoriak, setKategoriak] = useState([]);
  const [leiras, setLeiras] = useState("");
  const d = new Date().toISOString().substring(0,10);
  const [hirdetesDatuma, setHirdetesDatuma] = useState(d);
  const [tehermentes, setTehermentes] = useState(false);
  const [kepUrl, setKepUrl] = useState("");
  const [hiba, setHiba] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/kategoriak")
    .then(res => res.json())
    .then(
      (result) => {
        setKategoriak(result);
      }
    )
  },[]);

  async function send(event) {
    if(leiras.length<1 || kepUrl.length<1){
     return setHiba("Hiba a bevitt adatokban!");
    }
    else{
    const res = await fetch("http://localhost:5000/api/ujingatlan", {
      method: "POST",
      headers: {
        "content-type" : "application/json",
      },
      body: JSON.stringify({ kategoriaId, leiras, hirdetesDatuma, tehermentes, kepUrl}),
    }).then(navigate("/offers", { replace : true }));
  }
}


  return (

    <div className="container">
      <h2 className="mb-4 text-center">Új hirdetés elküldése</h2>
      <div className="row">
        <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">
          <form onSubmit={send}>
          <div className="mb-3">
            <label for="category" className="form-label">Ingatlan kategóriája</label>
            <select className="form-select" name="kategoriaId" onChange={(e) => setKategoriaId(e.target.value)}>
              {kategoriak.map((item, index) => (
                <option key={index} value={item.id}>{item.megnevezes}</option>
              ))};          
            </select>
          </div>
          
          <div className="mb-3">
            <label for="date" className="form-label">Hirdetés dátuma</label>
            <input type="date" className="form-control" name="hirdetesDatuma" value={d} onChange={(e) => setHirdetesDatuma(e.target.value)} />
          </div>

          <div className="mb-3">
            <label for="description" className="form-label">Ingatlan leírása</label>
            <textarea className="form-control" name="leiras" rows="3" onChange={(e) => setLeiras(e.target.value)}></textarea>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" name="tehermentes" onChange={(e) => setTehermentes(e.target.checked)} />
            <label className="form-check-label" for="creditFree">Tehermentes ingatlan</label>
          </div>
          <div className="mb-3">
            <label for="pictureUrl" className="form-label">Fénykép az ingatlanról</label>
            <input type="url" className="form-control" name="kepUrl" onChange={(e) => setKepUrl(e.target.value)} />
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-primary px-5">Küldés</button>
          </div>

          <div className="alert alert-danger alert-dismissible kozep" role="alert">
            <strong>{hiba}</strong>
          </div>
          </form>
          <div className="kozep"><Link to="/"><button type="button" className="btn btn-outline-success">Vissza a főlapra!</button></Link></div>
        </div>
      </div>
    </div>
  )
};

export default Newad;