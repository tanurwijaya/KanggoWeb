import React from "react";
import { Item, Container } from "../../presentationals";
import Text from "../../presentationals/Text";
import { WHITE, LIGHT_GREY } from "../../themes/Colors";

export default function PreviousActivity({ userHistory }) {
  return (
    <Container column style={{ padding: 16 }}>
      <div style={{ borderBottom: `1px solid ${LIGHT_GREY}`, width: "50%" }}>
        <Text small>Kegiatan lainnya yang diikuti</Text>
      </div>
      <Item style={{ marginTop: 8, overflowX: "scroll" }} plain>
        {userHistory &&
          userHistory.map(history => (
            <div
              key={history.activityID}
              style={{
                flexDirection: "column",
                justifyContent: "spaceBetween",
                height: 100,
                width: 240,
                borderRadius: 8,
                marginRight: 8,
                padding: 16,
                background: "#29BFFF"
              }}
            >
              <div style={{ marginTop: 48 }}>
                <Text color={WHITE}>{history.activityName}</Text>
              </div>
            </div>
          ))}
      </Item>
    </Container>
  );
}
