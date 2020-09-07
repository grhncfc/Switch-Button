import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {seperator} from "../../utils/common/Functions";
import styles from "./Switch.module.scss";

const Switch = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const randomId = uuidv4();
    const forLabel = seperator(styles, props.classNameForLabel);
    const forInput = seperator(styles, props.classNameForInput);

    const onChange = (e) => {
        setIsChecked(!isChecked);
        props.onChange(e, isChecked);
    }
    const onChangeDefault = (e) => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <input {...props} checked={isChecked} onChange={onChange} type="checkbox" id={randomId}
                   className={forInput}/>
            <label htmlFor={randomId} className={forLabel}/>
        </>
    );
};

export default Switch;
