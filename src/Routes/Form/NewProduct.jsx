import React, {useState, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import styles from './NewProduct.module.css'
import clsx from 'clsx'
import {postDataApi} from "../../Variables";

const NewProduct = () => {

    const navigate = useNavigate()
    const fileInputRef = useRef()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState([])


    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const priceHandler = (e) => {
        setPrice(e.target.value)
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const handleImageChange = (e) => {
        const files = e.target.files
        const imagesArray = [...images]

        for (let i = 0; i < files.length; i++) {
            imagesArray.push(files[i])
        }
        setImages(imagesArray)
    }

    const removeImage = (index) => {
        const newImages = images.filter((img, i) => i !== index)
        setImages(newImages)
    }

    const addProductToDB = async () => {
        try {
            const formData = new FormData();
            formData.set('title', title);
            formData.set('price', price);
            formData.set('description', description);

            for (let i = 0; i < images.length; i++) {
                formData.append(`images`, images[i]);
            }

            const response = await fetch(postDataApi, {
                method: 'POST',
                body: formData
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

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    const actionButton = title && price && description && images.length > 0

    return (
        <div className={styles.formContainer}>
            <input
                className={styles.formInput}
                type="text"
                placeholder={'Название'}
                onChange={titleHandler}
            />
            <input
                className={styles.formInput}
                type="text"
                placeholder={'Цена'}
                onChange={priceHandler}
            />
            <textarea
                className={styles.textarea}
                // type="text"
                placeholder={'Описание'}
                onChange={descriptionHandler}
            />
            <p>Выберете максимум 5 изображений </p>
            <input
                type="file"
                style={{ display: 'none' }}
                onChange={handleImageChange}
                multiple
                ref={fileInputRef}
            />
            <button onClick={handleButtonClick}>Выбрать файл</button>
            <button
                className={clsx ({
                    [styles.formButton]: true,
                    [styles.disabled]: !actionButton
                })}
                onClick={addProductToDB}
                disabled={!actionButton}
            >Добавить товар
            </button>
            {images.length > 0 && (
                <div>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={URL.createObjectURL(image)} alt={`Product ${index}`} className={styles.img}/>
                            <button onClick={() => removeImage(index)}>Удалить</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NewProduct;