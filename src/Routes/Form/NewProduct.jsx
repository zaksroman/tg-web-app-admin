import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from './NewProduct.module.css'
import clsx from 'clsx'
import {postDataApi} from "../../Variables";

const NewProduct = () => {

    const navigate = useNavigate()

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

    const addProductToDB = async (newProduct) => {
        try {
            const response = await fetch(postDataApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });
            if (response.ok) {
                alert('Товар успешно добавлен');
                navigate(-1)
            } else {
                throw new Error('Ошибка при добавлении товара');
            }
        } catch (error) {
            console.error(error);
            alert('Произошла ошибка');
        }
    }

    const addProduct = async () => {
        const newProduct = {
            _id: Math.random().toString(),
            title: title,
            price: price,
            description: description,
            img: img
        }
        await addProductToDB(newProduct)
    }

    const actionButton = title && price && description

    return (
        <div /*className={styles.formContainer}*/>
            <input
                className={styles.formInput}
                type="text"
                placeholder={'Название'}
                onChange={titleHandler}/>
            <input
                className={styles.formInput}
                type="text"
                placeholder={'Цена'}
                onChange={priceHandler}/>
            <input
                className={styles.formInput}
                type="text"
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