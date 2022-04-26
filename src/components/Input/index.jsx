import React, { useState } from 'react'

import {Button} from '../Button'
import styles from './Input.module.css'

export const EditableInput = ({ value,  fontSize = "32px", fontWeight = "bold", saveHandler }) => {
    const [inputValue, setInputValue] = useState(value)
    const handleChange = (e) => { setInputValue(e.target.value) }
    const handleOnClick = (e) => {
        e.preventDefault()
        return saveHandler(inputValue)
    }
    return (
    <div className={styles.editableInputContainer}>
        <input style={{fontSize:fontSize, fontWeight: fontWeight}} className={styles.editableInput} value={inputValue} onChange={handleChange}/>
        <Button name="Save" handler={handleOnClick}/>
    </div>
    )
}
