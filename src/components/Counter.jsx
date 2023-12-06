import IconAdd from "../icons/IconAdd";
import IconMinus from "../icons/IconMinus";
import styles from "../components/Counter.module.css"
import { useState } from "react";
function Counter(props){
    const [value1, setValue1] = useState(0);
    function handleDecreament1() {
        if(value1 <= 0){
            return setValue1(0);
        }
        setValue1(value1-1);
    }
    function handleIncreament1(){
        setValue1(value1+1)
    }
    return(
        <>
  <div className={styles.nav}>
       <p>
        {value1} {props.text} 
        </p>
       <nav>
       <IconMinus onClick={handleDecreament1} /> 
       <IconAdd  onClick={handleIncreament1}/>
       </nav>
      
       </div>
  
        </>
    )
}
export default Counter;