import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { ShopRepo } from '../../data/repos/ShopRepo'
import { domain } from '../../store';

export default function ShopPage() {
    // States
    const [products, setProducts] = useState();
    const [cats, setCats] = useState();
    const [productsTotal, setProducsTotal] = useState(0);
    const [productPerPage, setProductPerPage] = useState(5)
    const [activePage, setActivePage] = useState(1);
    const [filters, setFilters] = useState([]);

    // Logic
    const handleFilters = (id) => {
        let copy = [...filters];
        if (filters.includes(id)) {
            copy.splice(filters.indexOf(id), 1);
        } else {
            copy.push(id);
        }
        setFilters(copy);
    }

    // Effects

    useEffect(() => {
        ShopRepo.categories_index().then(setCats);
        ShopRepo.products_index(activePage, productPerPage, filters).then((res) => { setProducts(res.data); setProducsTotal(res.total) });
    }, []);

    useEffect(() => { setActivePage(1) }, [productPerPage]);

    useEffect(() => { ShopRepo.products_index(activePage, productPerPage, filters).then(res => setProducts(res.data)) }, [activePage, productPerPage, filters]);

    return (
        <section className='d-flex col-12 container'>
            <div className='col-3'>
                <div className="accordion col-12" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Categories
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body  gap-2">
                                <input type='search' placeholder='search' className='form-control' />
                                <div className='d-flex flex-column col-12 gap-2 mt-3'>
                                    {cats && cats.map((el) => {
                                        return (
                                            <label key={el.documentId} onChange={() => handleFilters(el.documentId)} className='col-12 d-flex gap-2 align-items-center' >
                                                <input type="checkbox" />
                                                {el.name}
                                            </label>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-9 d-flex flex-column p-3'>
                <div className='d-flex justify-content-between'>
                    <h3>Total Products:{productsTotal}</h3>

                    <select onChange={(e) => setProductPerPage(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <div className='col-12 d-flex flex-wrap'>
                    {products && products.map((el) => (
                        <ProductCard
                            key={el.documentId}
                            product={el}
                            name={el.name}
                            price={el.price}
                            salePrice={el.salePrice}
                            imgUrl={el.coverImg && (domain + el.coverImg.url)}
                        />
                    ))}
                </div>
                <div className='col-12'>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {
                                activePage > 1 && <li className="page-item">
                                    <a onClick={() => setActivePage(activePage - 1)} className="page-link" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                            }

                            {
                                Array(Math.ceil(productsTotal / productPerPage)).fill(0).map((el, index) => (
                                    <li key={index} onClick={() => setActivePage(index + 1)} className={`page-item ${activePage == index + 1 ? 'active' : null}`}>
                                        <a className="page-link" >{index + 1}</a>
                                    </li>
                                ))
                            }
                            {
                                activePage < Math.ceil(productsTotal / productPerPage) &&
                                <li className="page-item">
                                    <a onClick={() => setActivePage(activePage + 1)} className="page-link" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}
