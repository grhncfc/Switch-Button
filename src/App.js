import React, {useState} from 'react';
import Button from "./Components/Button/Button";
import styles from "./_app.module.scss";
import DeleteIcon from '@material-ui/icons/Delete';
import Switch from "./Components/Switch/Switch";

function App() {
    const [loading, setLoading] = useState(false);

    const onClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
    const onChange = (e, checked) => {
        console.log(e.target.checked, checked)
    }
    return (
        <div className={styles.container}>
            <Button onClick={onClick} loading={loading}>
                <div className={styles.btnText}>Button</div>
                <DeleteIcon className={styles.iconStyle}/>
            </Button>
            <Switch onChange={onChange}/>
        </div>
    );
}

export default App;
