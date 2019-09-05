import React from 'react';
import './Form.css';
const Form = (props) => (
    <form className={props.className}>{props.children}</form>
);

export default Form;