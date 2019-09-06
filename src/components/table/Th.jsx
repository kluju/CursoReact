import React from 'react';

const Th = (props) => (
    <th colspan={props.colspan} scope={props.scope}>{props.children}</th>
);

export default Th;