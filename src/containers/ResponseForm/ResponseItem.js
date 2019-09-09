import React from "react";
import { Container, Item } from "../../presentationals";
import Text from "../../presentationals/Text";
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PRIMARY_BLUE, LIGHT_GREY, DARK_GREY } from "../../themes/Colors";

export default function ResponseItem({ form }) {
  const { question, answer, type, selected, options } = form;
  return (
    <Container column style={{ padding: 16, borderBottom: "1px solid black" }}>
      <div style={{borderBottom:`1px solid ${LIGHT_GREY}`, width:'50%', marginBottom: 4}}>
      <Text color={DARK_GREY} small>{question}</Text>
      </div>
      <AnswerResponse
        type={type}
        answer={answer}
        options={options}
        selected={selected}
      />
    </Container>
  );
}

export function AnswerResponse({ type, answer, options, selected }) {
  if (type === "RadioButton") {
    const answer = selected[0];
    return options.map(option => {
      if (option === answer) {
        return (
          <Item key={option}>
            <FontAwesomeIcon
              style={{
                height: 16,
                width: 16,
                color: PRIMARY_BLUE,
                marginRight: 4
              }}
              icon={faCheckCircle}
            />
            <Text small>{option}</Text>
          </Item>
        );
      }
      return (
        <Item key={option}>
          <FontAwesomeIcon
            style={{ height: 16, width: 16, color: LIGHT_GREY, marginRight: 4 }}
            icon={faCircle}
          />
          <Text small>{option}</Text>
        </Item>
      );
    });
  } else if (type === "ShortAnswer") {
    return <Text bold>{answer}</Text>;
  } else return null;
}
