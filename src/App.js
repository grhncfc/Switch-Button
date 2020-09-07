import React, {useState} from 'react';
import styles from "./App.module.scss"
import Button from "./Components/Button/Button";
import Switch from "./Components/Switch/Switch";


function App() {
    const [loading, setLoading] = useState(false);
    const [containerStyle, setContainerStyle] = useState({background: "white"});
    // const onChange = (e, stil) => {
    //     setContainerStyle(stil ? {background: "white"} : {background: "black"});
    // };

    const onClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div style={containerStyle} className={styles.container}>
            <Button className={"btnStyle2"} text={"BUTTON"}/>
            <Button className={styles.submitBtn} onClick={onClick} loading={loading} text={"test"}/>
            <Switch onChange={"berk"}/>
            <Switch/>
        </div>
    );
}

export default App;
