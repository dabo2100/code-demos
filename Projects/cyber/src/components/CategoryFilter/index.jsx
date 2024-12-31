import { Accordion } from 'react-bootstrap'
import styles from "./index.module.css";
import { useEffect, useState } from 'react';

export default function CategoryFilter() {
    const products = [
        { productName: "Product 1", price: 200, cat_id: 1 },
        { productName: "Product 2", price: 200, cat_id: 1 },
        { productName: "Product 3", price: 200, cat_id: 1 },
        { productName: "Product 4", price: 200, cat_id: 2 },
        { productName: "Product 5", price: 200, cat_id: 2 },
        { productName: "Product 6", price: 200, cat_id: 2 },
        { productName: "Product 7", price: 200, cat_id: 3 },
        { productName: "Product 8", price: 200, cat_id: 3 },
        { productName: "Product 9", price: 200, cat_id: 3 },
        { productName: "Product 10", price: 200, cat_id: 4 },
        { productName: "Product 11", price: 200, cat_id: 5 },
        { productName: "Product 12", price: 200, cat_id: 6 },
        { productName: "Product 13", price: 200, cat_id: 7 },
        { productName: "Product 14", price: 200, cat_id: 8 },
    ];
    const Categories = [
        { id: 1, name: "smartphones" },
        { id: 2, name: "laptops" },
        { id: 3, name: "skincare" },
        { id: 4, name: "sunglasses" },
        { id: 5, name: "motorcycle" },
        { id: 6, name: "lighting" },
        { id: 7, name: "furniture" },
        { id: 8, name: "men shirts" },
        { id: 9, name: "women bags" }
    ];

    const [seletecdCats, setSelectedCats] = useState([1, 3, 8]);

    const toggleCategory = (category_id) => {
        let categotyIndexInSelectedCats = seletecdCats.findIndex((el) => { return el == category_id });
        if (categotyIndexInSelectedCats == -1) {
            setSelectedCats([...seletecdCats, category_id]);
        } else {
            let oCats = [...seletecdCats];
            oCats.splice(categotyIndexInSelectedCats, 1);
            setSelectedCats(oCats)
        }
    }

    useEffect(() => {
        let pros = products.filter((product) => {
            return seletecdCats.indexOf(product.cat_id) != -1
        })
    }, [seletecdCats]);

    return (
        <div id={styles['category-container']}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Categories</Accordion.Header>
                    <Accordion.Body>
                        {
                            Categories.map((category) => {
                                return (
                                    <div key={category.id} className='col-12 d-flex align-items-center gap-3'>
                                        <input id={`cat_${category.id}`} onChange={() => toggleCategory(category.id)} type='checkbox' defaultChecked={seletecdCats.some(el => el == category.id)} />
                                        <label htmlFor={`cat_${category.id}`}>{category.name}</label>
                                    </div>
                                )
                            })
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
