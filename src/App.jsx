import "./App.css";
import Counter from "./components/Counter";
import { Grid } from "./components/Grid";
import Light from "./components/Light";
import { useState } from "react";
function App() {
  const [valueRow, setValueRow] = useState(0);
  const [valueCol, setValueCol] = useState(0);
  function handleDecreament(name) {
    if(name === "row"){
      if(valueRow <= 0){
        return setValueRow(0);
    }
    setValueRow(valueRow-1);
    }else{
      if(valueCol <= 0){
        return setValueCol(0);
    }
    setValueCol(valueCol-1);
    }
     
  }
  function handleIncreament(name){
    if(name === "row"){
      setValueRow(valueRow+1)
    }else{
      setValueCol(valueCol+1)
      if(valueCol >= 9){
        setValueCol(9)
      }
    }
  }
const sumLights = valueRow * valueCol;
const arrLights = Array.from({length: sumLights})


  return (<>
   
    <nav className="nav1">
    <span>Lights generator </span>
    <p style={{paddingRight: '70px'}}> {sumLights} bulbs</p>
    <Counter text="row" value={valueRow}  name="row" onCLickD={handleDecreament} onCLickI={handleIncreament}/>
    <Counter text="columns" name="col" value={valueCol} onCLickD={handleDecreament} onCLickI={handleIncreament} />
       </nav>
       <Grid columns={valueCol}>
       {arrLights.map((val,ind)=> {
           return <Light key={ind}/>      
       })}
       </Grid>
  
    </>);
}

export default App;
