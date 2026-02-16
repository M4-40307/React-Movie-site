
import { Link } from 'react-router-dom';


export default function StreamixItem({ item }) {
    return (
        <section className="col-md-4 p-2 d-flex">
            <div
                className="border border-dark p-2 shadow "
                style={{ minHeight: "450px", display: "flex", flexDirection: "column" }}
            >
                <img
                    src={item.Poster && item.Poster !== "N/A" ? item.Poster : "/default-poster.png"}
                    alt={item.Title}
                    className="img-fluid mb-3"
                    style={{ width: "500px", height: "700px", objectFit: "cover" }}
                />
                <h3>{item.Title}</h3>
                <div>{item.Year}</div>
                <div>{item.Type}</div>
                <Link
                    to={`/ItemInfoPage/${item.imdbID}`}
                    className="btn btn-purp shadow-sm mt-auto"
                >
                    More info
                </Link>
            </div>
        </section>
    )
}