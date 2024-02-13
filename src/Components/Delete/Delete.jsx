import React, {useState} from 'react';
import styles from './Delete.module.css'
import {deleteDataApi} from "../../Variables";

const Delete = ({product}) => {

    const [showModal, setShowModal] = useState(false)

    const modalHandler = () => {
        setShowModal(true)
    }

    const deleteHandler = () => {
        async function deleteProduct(productId) {
            try {
                const response = await fetch(deleteDataApi + productId, {
                    method: 'DELETE'
                });
                const data = await response.json();
                console.log(data.message);
                window.location.reload()
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
        deleteProduct(product._id)
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