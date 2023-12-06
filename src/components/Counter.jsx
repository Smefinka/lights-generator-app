import IconAdd from "../icons/IconAdd";
import IconMinus from "../icons/IconMinus";
import styles from "../components/Counter.module.css"
import { useState } from "react";
function Counter(props){
    function decrement(){
        props.onCLickD(props.name);
    }
    function increment(){
        props.onCLickI(props.name);
    }
    return(
        <>
  <div className={styles.nav}>
       <p>
       {props.value} {props.text} 
        </p>
       <nav>
       <IconMinus onClick={() => decrement()} /> 
       <IconAdd onClick={() => increment()} />
       </nav>
      
       </div>
  
        </>
    )
}
export default Counter;