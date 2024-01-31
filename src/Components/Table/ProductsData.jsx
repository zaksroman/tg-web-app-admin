import {useSelector} from "react-redux";
import DataItem from "../DataItem/DataItem";
import styles from './ProductsData.module.css'

const ProductsData = () => {

    const products = useSelector(state => state)

    return (
        <div /*className={styles.dataTable}*/>
            <div>
            {products.map(item => (
                <DataItem
                    key={item.title}
                    item={item}
                />
            ))}
            </div>
        </div>
    );
};

export default ProductsData;
