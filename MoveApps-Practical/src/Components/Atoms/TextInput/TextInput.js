import React from "react";

export default function TextInput(props) {
    return (
        <>
            <input type={props.type} className="form-control" id={props.id} placeholder={props.placeholder} />
        </>

    )
}
