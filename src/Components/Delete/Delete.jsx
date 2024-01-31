import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import styles from './Delete.module.css'

const Delete = ({item}) => {

    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    const modalHandler = () => {
        setShowModal(true)
    }

    const deleteHandler = () => {
        dispatch({type: 'DELETE_ROW', payload: item.name})
        setShowModal(false)
    }

    const leaveHandler = () => {
        setShowModal(false)
    }

    return (
        <div>
            { showModal && (
                   <div className={styles.modal}>
                        <div
                            className={styles.modalContent}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p>Вы действительно хотите удалить строку?</p>
                            <div>
                                <button onClick={leaveHandler} className={styles.button}>Оставить</button>
                                <button onClick={deleteHandler} className={styles.button}>Удалить</button>
                            </div>
                        </div>
                    </div>
            )}
            <button onClick={modalHandler} className={styles.button}>Удалить</button>
        </div>
    );
};

export default Delete;