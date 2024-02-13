import React from 'react';
import Delete from "../Delete/Delete";
import styles from './DataItem.module.css'
import {useNavigate} from "react-router-dom";
import {imgDataApi} from "../../Variables";

const DataItem = ({product}) => {

        const navigate = useNavigate()

        const handleClickEditProduct = (event) => {
                if (event.target.tagName !== 'BUTTON') {
                        navigate(`/editProduct/${product._id}`)
                }
        }

        return (
            <div className={styles.dataItem} onClick={handleClickEditProduct}>
                <img src={imgDataApi+product.images[0]+'.jpg'} alt="test" className={styles.img}/>
                <p className={styles.p}>{product.title}</p>
                <p className={styles.p}>{product.description}</p>
                <p className={styles.p}>{product.price} ₽</p>
                <Delete product={product}/>
            </div>
        );
}


export default DataItem;