import React from 'react';
import './InputLabel.css';
import { MyContext } from '../../contex/MyContext'
const InputLabel = (props) => {
    return (
        
        <MyContext.Consumer>
            {(context) => (
                <>
                    <label>{props.label}</label>
                <input type={props.type} name = {props.name} className={props.className} value={props.value}  placeholder={props.placeholder} onChange={context.handleOnChange}/>
                </>
            )}
        </MyContext.Consumer>
        
    )
}

export default InputLabel;