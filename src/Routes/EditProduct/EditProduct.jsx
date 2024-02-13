import React, {useState} from 'react';
import styles from './EditProduct.module.css'
import {useSelector} from "react-redux"
import {useNavigate, useParams} from "react-router-dom";
import {editDataApi, imgDataApi} from "../../Variables";

const EditProduct = () => {
    const navigate = useNavigate()
    const products = useSelector(state => state.products)
    const { _id } = useParams()

    const prodCharacteristics = (_id) => {
        return products.find((product)=> product._id === _id )
    }

    const [title, setTitle] = useState(prodCharacteristics(_id).title)
    const [price, setPrice] = useState(prodCharacteristics(_id).price)
    const [description, setDescription] = useState(prodCharacteristics(_id).description)
    const [images, setImages] = useState(prodCharacteristics(_id).images)

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
        const files = e.target.files;
        setImages([...images, ...files])
    }

    const deleteImage = (index) => {
        const newImages = images.filter((img, i) => i !== index)
        setImages(newImages)
    }

    const editProduct = async () => {
        try {
            const editData = new FormData();
            editData.set('title', title);
            editData.set('price', price);
            editData.set('description', description);

            for (let i = 0; i < images.length; i++) {
                editData.append(`images`, images[i]);
            }

            const response = await fetch(editDataApi, {
                method: 'PUT',
                body: editData
            });

            if (response.ok) {
                alert('Товар успешно обновлен');
                navigate(-1)
            } else {
                throw new Error('Ошибка при обновлении товара');
            }
        } catch (error) {
            console.error(error);
            alert('Произошла ошибка');
        }
    }

    return (
        <div>
            <p>Название</p>
            <input
                type="text"
                value={title}
                onChange={titleHandler}
            />
            <p>Цена</p>
            <input
                type="text"
                value={price}
                onChange={priceHandler}
            />
            <p>Описание</p>
            <input
                type="text"
                value={description}
                onChange={descriptionHandler}
            />
            <input
                type="file"
                onChange={imgHandler}
                multiple
            />
            {images.map((image, index) => (
                <div key={index}>
                    <img src={imgDataApi + images[index]} className={styles.img} alt={'test'}/>
                    <button onClick={() => deleteImage(index)}>Удалить</button>
                </div>
            ))}

            {/*<button onClick={editProduct}>Сохранить изменения</button>*/}
        </div>
    );
};

export default EditProduct;