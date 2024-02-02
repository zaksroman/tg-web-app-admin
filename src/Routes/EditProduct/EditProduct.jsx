import React, {useState} from 'react';
import styles from './EditProduct.module.css'
import {useSelector} from "react-redux"
import {useNavigate, useParams} from "react-router-dom";
import {editDataApi} from "../../Variables";

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
    const [img, setImg] = useState(prodCharacteristics(_id).img)

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

    const editProduct = async () => {
        const updatedData = {
            _id: _id,
            title: title,
            price: price,
            description: description,
            img: img
        };
        await fetch(`${editDataApi}${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(response => response.json())
            .then(() => {
                alert('Товар успешно изменен');
                navigate(-1)
            })
            .catch(error => {
                console.error('Ошибка при обновлении товара:', error);
            });
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={titleHandler}
            />
            <input
                type="text"
                value={price}
                onChange={priceHandler}
            />
            <input
                type="text"
                value={description}
                onChange={descriptionHandler}
            />
            <input
                type="file"
                value={img}
                onChange={imgHandler}
            />
            <button onClick={editProduct}>Сохранить изменения</button>
        </div>
    );
};

export default EditProduct;