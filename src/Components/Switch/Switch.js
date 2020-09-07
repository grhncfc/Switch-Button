import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {seperator} from "./seperatorFunction";

const Switch = (props) => {
    const [style,setStyle] = useState(false);
    const randomId = uuidv4();
    const forLabel = seperator(props.classNameForLabel);
    const forInput = seperator(props.classNameForInput);
    const onChange = (e) => {
        setStyle(!style);
        props.onChange(e,style);
    }
    const onChangeDefault = (e) => {
        setStyle(!style);
    }
      return (
        <>
            <input {...props} checked={style} onChange={props.onChange ? onChange  : onChangeDefault} type="checkbox" id={randomId} className={forInput} />
            <label htmlFor={randomId} className={forLabel}/>
        </>
    );
};

export default Switch;