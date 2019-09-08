import React from "react";
import "./style.css";

export default function Toogle({ onToggleOn, onToogleOff,isToogleOn }) {

  const handleChange = ({target}) => {
    if (target.checked){
      target.removeAttribute('checked');
      onToggleOn()
   } else {
      target.setAttribute('checked', true);
      onToogleOff()
   }
  }


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
