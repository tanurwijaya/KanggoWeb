import React from "react";
import { ViewWrapper, Item, Container } from "../../presentationals";
import Text from "../../presentationals/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PRIMARY_BLUE, LIGHT_GREY } from "../../themes/Colors";
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import PreviousActivity from "./PreviousActivity";
import ResponseItem from "./ResponseItem";

export default function ResponseList({ userData, userHistory }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 32,
        border: "1px solid black"
      }}
    >
      <ViewWrapper
        style={{ padding: 16, borderBottom: "1px solid black" }}
        spaceBetween
      >
        <Item column plain>
          <Text bold>{userData.name}</Text>
          <Text>{userData.email}</Text>
        </Item>
        <Item plain>{/* <Text>081291103131</Text> */}</Item>
      </ViewWrapper>

      <ResponseItem question={'A'} type={''} answer={'B'}/>

      <ResponseItem question={'C'} type={''} answer={'D'}/>

      <Container
        column
        style={{ padding: 16, borderBottom: "1px solid black" }}
      >
        <Text small>Pertanyaan</Text>
        <Item>
          <FontAwesomeIcon
            style={{
              height: 16,
              width: 16,
              color: PRIMARY_BLUE,
              marginRight: 4
            }}
            icon={faCheckCircle}
          />
          <Text small>Jawaban 1</Text>
        </Item>

        <Item>
          <FontAwesomeIcon
            style={{ height: 16, width: 16, color: LIGHT_GREY, marginRight: 4 }}
            icon={faCircle}
          />
          <Text small>Jawaban 2</Text>
        </Item>
      </Container>

      <PreviousActivity userHistory={userHistory}/>
    </div>
  );
}
