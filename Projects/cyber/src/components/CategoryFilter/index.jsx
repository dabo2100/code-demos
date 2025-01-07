import { Accordion } from 'react-bootstrap'
import styles from "./index.module.css";
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { $All_Products, $Filtered_Products } from '../../store';

export default function CategoryFilter() {
    const products = useRecoilValue($All_Products);
    const [, setFilterData] = useRecoilState($Filtered_Products);

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

    const [seletecdCats, setSelectedCats] = useState([]);
    let oCats = [...seletecdCats];
    
    const toggleCategory = (category_id) => {
        let categotyIndexInSelectedCats = seletecdCats.findIndex((el) => { return el == category_id });
        if (categotyIndexInSelectedCats == -1) {
            oCats = [...seletecdCats, category_id];
            setSelectedCats(oCats);
        } else {
            oCats.splice(categotyIndexInSelectedCats, 1);
            setSelectedCats(oCats)
        }

        let filteredData = products.filter((product) => {
            return oCats.indexOf(product.cat_id) != -1
        })

        if (filteredData.length == 0) {
            setFilterData(products);
        } else {
            setFilterData(filteredData);

        }
    }

    useEffect(() => {

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
