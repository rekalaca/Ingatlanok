import { Link } from "react-router-dom";

const Openpage = () => {
    return (

        <div className="container">
        <div className="start w-100">
            <h1 className="text-center pt-2 pt-lg-4">Á.L.B. Ingatlanügynöség</h1>
            <div className="row">
                <div className="col-12 col-sm-6 text-center">
                    <Link to="/offers" className="btn btn-primary">Nézze meg kínálatunkat!</Link>
                </div>
                <div className="col-12 col-sm-6 text-center">
                    <Link to="/newad" className="btn btn-primary">Hirdessen nálunk!</Link>
                </div>
            </div>
        </div>
    </div>
    )
  };
  
  export default Openpage;