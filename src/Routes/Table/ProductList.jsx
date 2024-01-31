import ProductsData from "../../Components/Table/ProductsData";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import styles from './ProductList.module.css'

const ProductList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClickNewProduct = () => {
        navigate('/newProduct');
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setIsLoading(true);
    //             const response = await fetch('https://swapi.dev/api/people/');
    //             const jsonData = await response.json();
    //             dispatch({ type: 'SET_PRODUCTS', payload: jsonData.results });
    //         } catch (error) {
    //             console.log(error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };
    //     fetchData()
    // }, []);

    return (
        <div/*className={styles.tableContainer}*/>
            <h1>test</h1>
            <div>
                <button onClick={handleClickNewProduct} className={styles.button}>Добавить товар</button>
            </div>
                <ProductsData/>
        </div>
    );
};

export default ProductList;
