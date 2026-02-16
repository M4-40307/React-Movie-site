import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div 
      style={{
        background: "#0f0f0f",
        color: "white",
        minHeight: "100vh"
      }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1 style={{ fontSize: "100px", fontWeight: "bold" }}>404</h1>
      <h3>Oops... This stream is offline.</h3>

      <Link to="/" className="btn btn-purp mt-4">
        Return to Streamix
      </Link>
    </div>
  );
}
