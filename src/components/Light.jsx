import { useState } from "react";
import lightOff from "/images/light-off.svg";
import lightOn from "/images/light-on.svg";
function Light(){
    const [onLight, setOn] = useState(true);
    const [light, setLight] = useState(lightOff)
   function handleLightChange(){
    if(!onLight){
        setLight(lightOn);
        setOn(true)
    }else{
        setLight(lightOff);
        setOn(false)
    }
   } 
    return(
        <>
<img src={light} onClick={handleLightChange} />
        </>
    )
}
export default Light;