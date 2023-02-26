import React from "react";

function HeaderComponent(props) {
    return(
        <section>
            <div>
                <h1>{props.title}</h1>
                <p>Paragraph in the header</p>
            </div>
            <div>
                Another div
                <button onClick={props.clickFn}>{props.btnName}</button>
            </div>
        </section>
    );
}

export default HeaderComponent;