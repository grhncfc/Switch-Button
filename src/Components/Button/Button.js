import React from 'react';
import ReactLoading from 'react-loading';
import styles from "./_button.module.scss";

const Button = (props) => {

    //TODO remove style prop and add default styles.
    //TODO allow users to freely override the default styles. (props.className)
    //TODO change this button into <Button></Button> and allow dynamic content.
    const onClick = () => {

        if (props.onClick) {
            props.onClick();
        }
        ;
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
