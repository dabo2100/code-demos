import { Link } from "react-router-dom";

export default function ProductCard({ price, name, qty, imgUrl, id }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price : {price}</p>
        <p>Qty : {qty}</p>
        <div className="card-actions justify-end">
          <Link to={id} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
