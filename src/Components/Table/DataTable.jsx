import {useDispatch, useSelector} from "react-redux";
import DataItem from "../DataItem/DataItem";
import styles from './DataTable.module.css'

const DataTable = () => {
    const data = useSelector(state => state.data)
    const sortBy = useSelector(state => state.sortBy)
    const sortOrder = useSelector(state => state.sortOrder)
    const dispatch = useDispatch()

    const sortData = (field) => {
        return [...data].sort((a, b) => {
            if (field === 'height' || field === 'weight') {
                return sortOrder === 'asc' ? a[field] - b[field] : b[field] - a[field];
            } else {
                if (a[field] < b[field]) {
                    return sortOrder === 'asc' ? -1 : 1;
                }
                if (a[field] > b[field]) {
                    return sortOrder === 'asc' ? 1 : -1;
                }
                return 0;
            }
        });
    };

    const handleSort = (field) => {
        dispatch({type: 'SET_SORT_BY', payload: field})
        dispatch({type: 'SET_SORT_ORDER', payload: (sortOrder === 'asc' ? 'desc' : 'asc')})
    };

    const sortedData = sortBy ? sortData(sortBy) : data;

    return (
        <table className={styles.dataTable}>
            <thead>
            {data.length !== 0 &&
                <tr>
                    <th onClick={() => handleSort('name')}>Имя</th>
                    <th onClick={() => handleSort('height')}>Рост</th>
                    <th onClick={() => handleSort('mass')}>Вес</th>
                    <th onClick={() => handleSort('hair_color')}>Цвет волос</th>
                    <th onClick={() => handleSort('skin_color')}>Цвет кожи</th>
                </tr>
            }
            </thead>

            {data.length === 0 && <div className={styles.container}>Нет данных</div>}

            <tbody>
            {sortedData.map((item) => (
                <DataItem
                    key={item.name}
                    item={item}
                />
            ))}
            </tbody>
        </table>
    );
};

export default DataTable;
