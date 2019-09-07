import React from "react";
import { ViewWrapper, Item } from "../../presentationals";
import { RED_ERROR, GREEN } from "../../themes/Colors";

export default function ButtonAction(){
    return(
        <ViewWrapper
          spaceBetween
        >
          <Item/>
          <div style={{ marginLeft: 32, marginRight: 32 }}>
            <button style={{ marginRight: 16, background: RED_ERROR }}>
              Tolak
            </button>
            <button style={{ background: GREEN }}>Terima</button>
          </div>
        </ViewWrapper>
    )
}