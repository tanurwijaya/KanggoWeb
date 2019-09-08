import React from "react";
import { ViewWrapper, Item, Container } from "../../presentationals";
import Text from "../../presentationals/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PRIMARY_BLUE, LIGHT_GREY } from "../../themes/Colors";
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";

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

      <Container
        column
        style={{ padding: 16, borderBottom: "1px solid black" }}
      >
        <Text small>Pertanyaan</Text>
        <Text>Jawaban</Text>
      </Container>

      <Container
        column
        style={{ padding: 16, borderBottom: "1px solid black" }}
      >
        <Text small>Pertanyaan</Text>
        <Text>Jawaban</Text>
      </Container>

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

      <Container column style={{ padding: 16 }}>
        <Text small>Kegiatan lainnya yang diikuti</Text>
        <Item style={{ marginTop: 8, overflowX: "scroll" }} plain>
          {userHistory &&
            userHistory.map(history => (
              <div
                key={history.activityID}
                style={{
                  height: 100,
                  width: 210,
                  marginRight: 8,
                  background: "#29BFFF"
                }}
              >
                <Text>{history.activityName}</Text>
              </div>
            ))}
        </Item>
      </Container>
    </div>
  );
}
