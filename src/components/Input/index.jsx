import React, { useState } from 'react'

import styles from './Input.module.css'

export const EditableInput = ({ value,  fontSize = "32px", fontWeight = "bold", saveHandler }) => {
    const [inputValue, setInputValue] = useState(value)
    const handleChange = (e) => { 
        setInputValue(e.target.value)
    }
    return (
    <div className={styles.editableInputContainer}>
        <input style={{fontSize:fontSize, fontWeight: fontWeight}} className={styles.editableInput} value={inputValue} onChange={handleChange}/>
        <button className={styles.Button} onClick={() =>saveHandler(inputValue)}>Save</button>
    </div>
    )
}
