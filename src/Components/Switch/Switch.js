import React, {useEffect, useRef, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from "./_switch.module.scss";

const Switch = ({onChange, classNameForInput, thumbClassName, ...restProps}) => {
    const [isChecked, setIsChecked] = useState(false);
    const node = useRef();
    const randomId = uuidv4();
    useEffect(() => {
        if (onChange) {
            onChange(node.current, isChecked);
        }
    }, [isChecked]);

    const onInputChange = (e) => {
        setIsChecked(!isChecked);
    };
    //
    return (
        <>
            <input {...restProps} ref={node} className={`${styles.defaultInput} ${classNameForInput}`}
                   checked={isChecked}
                   onChange={onInputChange} type="checkbox"
                   id={randomId}
            />
            <label className={`${styles.defaultLabel} ${thumbClassName}`} htmlFor={randomId}/>
        </>
    );
};

export default Switch;
