export default function ProductCard({ productData, imgSrc, price }) {
    return (
        <div className="col-3 p-2">
            <div className="card col-12">
                <img src={imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{productData.title} </h5>
                    <p className="card-text">Price : {price} </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}