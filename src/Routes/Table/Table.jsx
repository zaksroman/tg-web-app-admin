import DataTable from "../../Components/Table/DataTable";
import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import styles from './Table.module.css'

const Table = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/form');
    }

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://swapi.dev/api/people/');
            const jsonData = await response.json();
            jsonData.results.map((item) => {
                item.height = Number(item.height)
                item.mass = Number(item.mass)
            })
            dispatch({type: 'SET_DATA', payload: jsonData.results})
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    const clearData = () => {
        dispatch({type: 'CLEAR_DATA', payload: data});
    };


    return (
        <div className={styles.tableContainer}>
            <div>
                <button onClick={fetchData} className={styles.button}>Загрузить данные</button>
                <button onClick={clearData} className={styles.button}>Очистить таблицу</button>
                <button onClick={handleClick} className={styles.button}>Добавить строку</button>
            </div>
            {isLoading ? (
                <p>Загрузка данных...</p>
            ) : (
                <DataTable/>
            )}
        </div>
    );
};

export default Table;
