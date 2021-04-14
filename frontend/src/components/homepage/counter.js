import React from 'react';

import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';


const Counter = (props) => {
    return ( 
        <CountUp start={0} end={props.timer} duration={4} suffix="+" redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
     );
}
 
export default Counter;
