import { domain } from '../store';

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-200 shadow-sm cursor-pointer hover:scale-105 transition">
      <figure>
        <img src={domain + product.img?.formats.medium.url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>Price : {product.price} EGP</p>
        <button className="btn btn-primary btn-soft w-full">Add To Cart</button>
      </div>
    </div>
  );
}
