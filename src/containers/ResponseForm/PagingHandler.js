import React from "react";
import Text from "../../presentationals/Text";
import { ViewWrapper } from "../../presentationals";
import { DARK_GREY } from "../../themes/Colors";
import styled from '@emotion/styled'

export default function PagingHandler({current, max, onPressNext, onPressPrev}) {
  return (
    <ViewWrapper
      style={{ paddingTop: 8, paddingBottom: 8 }}
      itemCenter
      flex={1}
      spaceBetween
    >
      <ViewWrapper />
      <ViewWrapper
        style={{ marginLeft: 32, marginRight: 32 }}
        itemCenter
        flex={1}
        spaceBetween
      >
        <ViewWrapper />
        <ButtonPrevNext onClick={onPressPrev} style={{ marginRight: 16 }}>
          <Text bold large>
            {"<"}
          </Text>
        </ButtonPrevNext>
        <Text color={DARK_GREY} large>{current}</Text>
        <Text color={DARK_GREY} large>{" / "}</Text>
        <Text color={DARK_GREY} large>{max}</Text>
        <ButtonPrevNext onClick={onPressNext} style={{ marginLeft: 16 }}>
          <Text bold large>
            {">"}
          </Text>
        </ButtonPrevNext>
      </ViewWrapper>
    </ViewWrapper>
  );
}

const ButtonPrevNext = styled.div(props => ({
  ":hover": {
    cursor: 'pointer'
},
}))