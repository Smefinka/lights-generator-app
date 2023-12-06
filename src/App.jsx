import "./App.css";
import Counter from "./components/Counter";
import Light from "./components/Light";
function App() {
  return (<>
   
    <nav className="nav1">
    Lights1 generator
    <p style={{paddingRight: '70px'}}>0 bulbs</p>
    <Counter text="row" count="0" /> 
    <Counter text="columns" count="0" />
       </nav>
    <Light />
    </>);
}

export default App;
