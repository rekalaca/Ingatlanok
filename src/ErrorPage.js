import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
      <>

      <h1 className="err">Error</h1>
      <h2 className="err">Page not found...</h2>
      <div className="kozep"><Link to="/"><button type="button" className="btn btn-outline-success">Vissza a főlapra!</button></Link></div>
      
      </>
    )
  };
  
  export default ErrorPage;