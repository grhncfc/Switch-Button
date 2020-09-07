import React,{useState} from 'react';
import styles from "./App.module.scss"
import Button from "./Components/Button/Button";
import Switch from "./Components/Switch/Switch";


function App() {
  const [containerStyle,setContainerStyle] = useState({background: "white" });
  const onChange = (e,stil) =>{
  setContainerStyle(stil ? {background: "white" } : {background: "black" });
  }
  return (
    <div style={containerStyle} className={styles.container}>
      <Button className={"btnStyle2"} text={"BUTTON"} />
      <Switch onChange={onChange} />
      <Switch />
    </div>
  );
}
export default App;
