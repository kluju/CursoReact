import React from 'react';

const Content = (props) => (
    <div className={props.className} style={props.style}>{props.children}</div>
);

export default Content;