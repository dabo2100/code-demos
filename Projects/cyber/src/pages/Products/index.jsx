import { useRecoilState, useRecoilValue } from "recoil";
import CategoryFilter from "../../components/CategoryFilter";
import ProductCard from "../../components/ProductCard";
import { $All_Products, $Filtered_Products, $Pagenated_Products } from "../../store";
import { useEffect } from "react";

export default function ProductsPage() {
    const products = useRecoilValue($All_Products);
    const [filteredProducts, setFilteredData] = useRecoilState($Filtered_Products);
    const [productToView, setProductsToView] = useRecoilState($Pagenated_Products);

    useEffect(() => {
        let oProductsToView = { ...productToView };
        setFilteredData(products);
        oProductsToView.view = [...products.slice(0, oProductsToView.productsPerView)]
        setProductsToView(oProductsToView);
    }, []);

    const changePage = (index) => {
        let oProductsToView = { ...productToView };
        let start = (index * productToView.productsPerView);
        let end = start + productToView.productsPerView;
        oProductsToView.view = [...filteredProducts.slice(start, end)]
        oProductsToView.indexPage = index;
        setProductsToView(oProductsToView);
    }

    return (
        <div className="flex-grow-1 container p-0 d-flex">
            <CategoryFilter />
            <div className="d-flex flex-wrap px-3 gap-3 flex-grow-1" style={{ width: "10px" }}>
                <div className="col-12">
                    <p>Available Products: <span className="text-black">80 </span></p>
                </div>
                {
                    productToView.view.map((el, index) => {
                        return <ProductCard name={el.productName} key={index} />
                    })
                }
                <div className="col-12 d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            {
                                Array(Math.ceil(filteredProducts.length / productToView.productsPerView)).fill(0).map((el, index) => {
                                    return (
                                        <li key={index} className={"page-item "}>
                                            <a className={"page-link " + (index == productToView.indexPage && "bg-warning")} onClick={() => changePage(index)}>{index + 1}</a>
                                        </li>
                                    )
                                })
                            }
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
