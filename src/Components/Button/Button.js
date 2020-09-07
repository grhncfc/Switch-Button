import React from 'react';
import ReactLoading from "react-loading";
import styles from "./Button.module.scss";
import {seperator} from "../../utils/common/Functions";

const Button = (props) => {
    const btnClassName = seperator(styles, props.className);

    //TODO remove style prop and add default styles. style={{display: "flex", justifyContent: "center", alignItems: "center"}}
    //TODO allow users to freely override the default styles. (props.className)
    //TODO change this button into <Button></Button> and allow dynamic content.

    return (
        <button {...props} onClick={props.onClick}
                className={styles.default}>
            {
                props.loading ?
                    <ReactLoading type={"spinningBubbles"} width={"50%"} height={"100%"} color={"white"}/> : props.text
            }
        </button>
    );
};

export default Button;
