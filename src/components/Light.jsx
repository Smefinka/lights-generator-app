import { useState } from "react";
import lightOff from "/images/light-off.svg";
import lightOn from "/images/light-on.svg";
function Light(){
    const [onLight, setOn] = useState(false);
    //const [light, setLight] = useState(lightOff)
    const light = onLight ? lightOn : lightOff;
   function handleLightChange(){
    setOn(!onLight)
   } 
    return(
        <>
<img src={light} onClick={handleLightChange} />
        </>
    )
}
export default Light;