import React from 'react';

function leftsideheaderComponent(props) {
    return (
        <section>
            <div>This is a side navigation bar</div>
            <div><button onClick={props.clickFn}>{props.btnName}</button></div>
        </section>
    )
}
export default leftsideheaderComponent;