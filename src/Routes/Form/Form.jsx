import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from './Form.module.css'
import clsx from 'clsx'

const Form = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [mass, setMass] = useState('')
    const [hairColor, setHairColor] = useState('')
    const [skinColor, setSkinColor] = useState('')

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const heightHandler = (e) => {
        setHeight(e.target.value)
    }

    const massHandler = (e) => {
        setMass(e.target.value)
    }

    const hair_colorHandler = (e) => {
        setHairColor(e.target.value)
    }

    const skin_colorHandler = (e) => {
        setSkinColor(e.target.value)
    }

    const addRow = () => {
        const newRow = {
            name: name,
            height: Number(height),
            mass: Number(mass),
            hair_color: hairColor,
            skin_color: skinColor
        }

        dispatch({type: 'ADD_ROW', payload: newRow})
        navigate(-1)
        alert('Строка успешно добавлена')
    }

    const actionButton = name && height && mass && hairColor && skinColor

    return (
        <div className={styles.formContainer}>
            <input
                className={styles.formInput}
                type="text"
                placeholder={'Имя'}
                onChange={nameHandler}/>
            <input
                className={styles.formInput}
                type="number"
                step="1"
                placeholder={'Рост'}
                onChange={heightHandler}/>
            <input
                className={styles.formInput}
                type="number"
                step="1"
                placeholder={'Вес'}
                onChange={massHandler}/>
            <input
                className={styles.formInput}
                type="text"
                placeholder={'Цвет волос'}
                onChange={hair_colorHandler}/>
            <input
                className={styles.formInput}
                type="text"
                placeholder={'Цвет кожи'}
                onChange={skin_colorHandler}/>
            <button
                className={clsx ({
                    [styles.formButton]: true,
                    [styles.disabled]: !actionButton
                })}
                onClick={addRow}
                disabled={!actionButton}
            >Добавить строку
            </button>
        </div>
    );
};

export default Form;