import IconAdd from "../icons/IconAdd";
import IconMinus from "../icons/IconMinus";
import styles from "../components/Counter.module.css"
import { useState } from "react";
function Counter(props){
    const [value, setValue] = useState(0);
    function handleDecreament() {
        if(value <= 0){
            return setValue(0);
        }
        setValue(value-1);
    }
    function handleIncreament(){
        setValue(value+1)
    }
    return(
        <>
  <div className={styles.nav}>
       <p>
        {value} {props.text} 
        </p>
       <nav>
        
       <IconMinus onClick={handleDecreament} /> 

       <IconAdd  onClick={handleIncreament}/>
       </nav>
      
       </div>
  
        </>
    )
}
export default Counter;