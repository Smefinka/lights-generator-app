import "./App.css";
import Counter from "./components/Counter";
function App() {
  return (<>
   
    <nav className="nav">
    Lights generator
    <p style={{paddingRight: '70px'}}>0 bulbs</p>
    <Counter text="row" count="0" /> 
    <Counter text="columns" count="0" />
       </nav>
    
    </>);
}

export default App;
