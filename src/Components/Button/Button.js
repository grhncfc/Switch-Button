import React,{useState} from 'react';
import ReactLoading from "react-loading";
import {seperator} from "./seperatorFunction";


const Button = (props) => {
    const [loading,setLoading] = useState(false);
    const btnClassName = seperator(props.className);
    const onClick = () => {
        setLoading(true);
        setTimeout(() => { setLoading(false); }, 2000);
    }
    return (
            <button {...props} onClick={onClick} style={{display: "flex", justifyContent: "center", alignItems: "center" }} className={btnClassName}>
                {props.loading ? !loading ? props.text :
                <ReactLoading type={"spinningBubbles"} width={"50%"} height={"100%"} color={"white"}/>  : (props.text) }
            </button>
    );
};

export default Button;