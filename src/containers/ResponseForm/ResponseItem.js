import React from "react";
import { Container } from "../../presentationals";
import Text from "../../presentationals/Text";

export default function ResponseItem({ question, answer }) {
  return (
    <Container column style={{ padding: 16, borderBottom: "1px solid black" }}>
      <Text small>{question}</Text>
      <AnswerResponse type={""} answer={answer} />
    </Container>
  );
}

export function AnswerResponse({ type, answer }) {
  if (type === "RadioButton") {
    return null;
  } else if (type === "ShortAnswer") {
    return <Text>{answer}</Text>;
  } else return null
}
