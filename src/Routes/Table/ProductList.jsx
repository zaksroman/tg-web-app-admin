import ProductsData from "../../Components/Table/ProductsData";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import styles from './ProductList.module.css'
import {getDataApi} from "../../Variables";

const ProductList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const products = useSelector(state => state.products)
    const handleClickNewProduct = () => {
        navigate('/newProduct');
    }

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const response = await fetch(getDataApi);
                const data = await response.json();
                dispatch({ type: 'SET_PRODUCTS', payload: data});
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [dispatch, getDataApi, setIsLoading]);

    return (
        <div className={styles.tableContainer}>
            <div>
                <button onClick={handleClickNewProduct} className={styles.button}>Добавить товар</button>
            </div>
            {isLoading ?
                <p>Загрузка...</p>
                :
                <div>
                    <ProductsData/>
                </div>
            }
            {products.length === 0 && isLoading===false &&  <p>Нет данных</p>}
        </div>
    );
};

export default ProductList;
