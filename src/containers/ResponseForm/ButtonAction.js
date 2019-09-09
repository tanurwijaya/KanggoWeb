import React from "react";
import { ViewWrapper, Item } from "../../presentationals";
import Text from "../../presentationals/Text";
import { RED_ERROR, GREEN, WHITE } from "../../themes/Colors";

export default function ButtonAction({onPressAccept, onPressReject}){
    return(
        <ViewWrapper
          spaceBetween
        >
          <Item/>
          <div style={{ marginLeft: 32, marginRight: 32 }}>
            <button onClick={()=>onPressReject()} style={{ marginRight: 16, background: RED_ERROR }}>
              <Text color={WHITE}>Tolak</Text>
            </button>
            <button onClick={()=>onPressAccept()} style={{ background: GREEN }}><Text color={WHITE}>Terima</Text></button>
          </div>
        </ViewWrapper>
    )
}