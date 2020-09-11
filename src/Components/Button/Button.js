import React from 'react';
import ReactLoading from 'react-loading';
import styles from "./_button.module.scss";

const Button = (props) => {
    const onClick = () => {
        if (props.loading) {
            return;
        }
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <button
            className={props.loading ? `${styles.default} ${styles.loadingDefault} ${props.className}` : `${styles.default} ${props.className}`}
            onClick={onClick}>
            {props.children}
            {
                props.loading &&
                <ReactLoading className={styles.loading} type={"spinningBubbles"} width={"25%"} height={"50%"}
                              color={props.loadingColor ? props.loadingColor : "black"}/>
            }
        </button>
    );
};

export default Button;
