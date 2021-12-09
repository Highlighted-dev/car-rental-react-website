import React, {useState} from 'react'
import "./Alert.css"
import {AiOutlineCloseCircle, AiOutlineWarning} from "react-icons/ai"

const Alert = ({warning}) => {
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
      setActive(!isActive); 
     };
    return (
        <div className={isActive? "alertClass show" : "alertClass hide"}>
            <AiOutlineWarning className="warning" />
            <span className="msg">{warning}</span>
            <span className="close-btn">
                <AiOutlineCloseCircle className="close" onClick={ToggleClass}/>
            </span>
        </div>
    )
}

export default Alert
