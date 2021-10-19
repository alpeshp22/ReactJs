import React from "react";
import './CheckBoxStyle.css';

export default function CheckBox(props) {
    return (
        <>
            <div class="form-check">
                <input class="form-check-input" type={props.type} name={props.name} id={props.id} />
                <label class="form-check-label" for={props.id}>
                    {props.label} <a href="#">{props.labelLink}</a>
                </label>
            </div>
        </>
    )
}