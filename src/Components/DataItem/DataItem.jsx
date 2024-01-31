import React from 'react';
import Delete from "../Delete/Delete";
import styles from './DataItem.module.css'

const DataItem = ({item}) => (
    <tr className={styles.dataItem}>
        <td>{item.name}</td>
        <td>{item.height}</td>
        <td>{item.mass}</td>
        <td>{item.hair_color}</td>
        <td>{item.skin_color}</td>
        <Delete item={item}
        />
    </tr>
);


export default DataItem;