import React from 'react';

const career = (props) => {
    return(
        <div>
            <h1 onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave}>{props.name}</h1>
        </div>
    );
}
export default career;