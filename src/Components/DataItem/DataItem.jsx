import React from 'react';
import Delete from "../Delete/Delete";
import styles from './DataItem.module.css'
import {useNavigate} from "react-router-dom";
import EditProduct from "../../Routes/EditProduct/EditProduct";

const DataItem = ({item}) => {

        const navigate = useNavigate()

        const handleClickEditProduct = () => {
                navigate('/editProduct')
        }

        return (
            <div /*className={styles.dataItem}*/ onClick={handleClickEditProduct}>
                <img src="" alt="test"/>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <Delete item={item}/>
            </div>
        );
}


export default DataItem;