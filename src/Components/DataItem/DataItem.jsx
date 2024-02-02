import React from 'react';
import Delete from "../Delete/Delete";
import styles from './DataItem.module.css'
import {useNavigate} from "react-router-dom";

const DataItem = ({item}) => {

        const navigate = useNavigate()

        const handleClickEditProduct = (event) => {
                if (event.target.tagName !== 'BUTTON') {
                        navigate(`/editProduct/${item._id}`)
                }
        }

        return (
            <div className={styles.dataItem} onClick={handleClickEditProduct}>
                <img src="" alt="test"/>
                <p>{item.title}</p>
                <p>{item.price} ₽</p>
                <Delete item={item}/>
            </div>
        );
}


export default DataItem;