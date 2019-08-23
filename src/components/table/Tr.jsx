import React from 'react';

const Tr = (props) => (
    <tr className={props.className}>{props.children}</tr>
);

export default Tr;