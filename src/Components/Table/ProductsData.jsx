import {useSelector} from "react-redux";
import DataItem from "../DataItem/DataItem";
import styles from './ProductsData.module.css'

const ProductsData = () => {

    const products = useSelector(state => state.products)

    return (
        <div className={styles.dataTable}>
            <div>
            {products.map(product => (
                <DataItem
                    key={product._id}
                    product={product}
                />
            ))}
            </div>
        </div>
    );
};

export default ProductsData;
