import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from './NewProduct.module.css'
import clsx from 'clsx'

const NewProduct = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')


    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const priceHandler = (e) => {
        setPrice(e.target.value)
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const imgHandler = (e) => {
        setImg(e.target.value)
    }


    const addProduct = () => {
        const newProduct = {
            title: title,
            price: price,
            description: description,
            img: img
        }

        dispatch({type: 'ADD_PRODUCT', payload: newProduct})
        navigate(-1)
        alert('Товар успешно добавлена')
    }

    const actionButton = title && price && description && img

    return (
        <div /*className={styles.formContainer}*/>
            <input
                className={styles.formInput}
                type="text"
                placeholder={'Название'}
                onChange={titleHandler}/>
            <input
                className={styles.formInput}
                type="number"
                step="1"
                placeholder={'Цена'}
                onChange={priceHandler}/>
            <input
                className={styles.formInput}
                type="number"
                step="1"
                placeholder={'Описание'}
                onChange={descriptionHandler}/>
            <input
                // className={styles.formInput}
                type="file"
                placeholder={'Изображения'}
                onChange={imgHandler}/>
            <button
                className={clsx ({
                    [styles.formButton]: true,
                    [styles.disabled]: !actionButton
                })}
                onClick={addProduct}
                disabled={!actionButton}
            >Добавить товар
            </button>
        </div>
    );
};

export default NewProduct;