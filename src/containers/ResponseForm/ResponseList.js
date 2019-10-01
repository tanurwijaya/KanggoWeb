import React from "react";
import { ViewWrapper, Item } from "../../presentationals";
import Text from "../../presentationals/Text";
import PreviousActivity from "./PreviousActivity";
import ResponseItem from "./ResponseItem";

export default function ResponseList({ userData,formData,  userHistory }) {
  console.log('formData',formData)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 32,
        marginTop:4,
        marginBottom:4,
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

      {formData &&
        formData.map(form => (
          <ResponseItem key={`${form.question}-${userData.id}`} form={form} />
        ))}

      <PreviousActivity userHistory={userHistory} />
    </div>
  );
}
