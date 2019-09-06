import React from "react";
import "./style.css";

export default function Toogle({ onToggleOn, onToogleOff,isToogleOn }) {

  const handleChange = ({target}) => {
    console.log("target", target);
    if (target.checked){
      target.removeAttribute('checked');
      onToggleOn()
   } else {
      target.setAttribute('checked', true);
      onToogleOff()
   }
  }

  console.log('isToogleOn',isToogleOn)

  return (
    <label class="switch">
      <input
        type="checkbox"
        onChange={handleChange}
        defaultChecked={isToogleOn}
      />
      <span class="slider round" />
    </label>
  );
}
