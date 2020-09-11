import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from "./_switch.module.scss";

const Switch = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const randomId = uuidv4();
    const onChange = (e) => {
        setIsChecked(!isChecked);
        if (props.onChange) {
            props.onChange(e, isChecked);
        }
    };
    return (
        <>
            <input className={`${styles.defaultInput} ${props.classNameForInput}`} {...props} checked={isChecked}
                   onChange={onChange} type="checkbox"
                   id={randomId}
            />
            <label className={`${styles.defaultLabel} ${props.classNameForLabel}`} htmlFor={randomId}/>
        </>
    );
};

export default Switch;
