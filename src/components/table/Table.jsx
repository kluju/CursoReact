import React from 'react';
import './Table.css';
const Table = (props) => (
    <table className = {props.className}>{props.children}</table>
);

export default Table;