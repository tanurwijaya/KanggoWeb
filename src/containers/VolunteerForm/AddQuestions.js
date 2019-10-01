import React from 'react'
import Text from '../../presentationals/Text'
import { LIGHT_GREY } from '../../themes/Colors';
import styled from '@emotion/styled'

export default function AddQuestions({onAddQuestionPressed}) {
  return (
    <div style={{ display: 'flex', alignSelf: 'center' }}>
      {/* <AddWrapper onClick={onAddQuestionPressed('short')}> */}
      <AddWrapper onClick={()=>onAddQuestionPressed('ShortAnswer')}>
        <Text>Short Answer</Text>
      </AddWrapper>

      {/* <AddWrapper onClick={()=>onAddQuestionPressed('LongAnswer')}>
        <Text>Long Answer</Text>
      </AddWrapper> */}

      <AddWrapper onClick={()=>onAddQuestionPressed('RadioButton')}>
        <Text>Radio Button</Text>
      </AddWrapper>
    </div>
  )
}

const AddWrapper = styled.div({
  border: `1px solid ${LIGHT_GREY}`,
  margin: 8, padding: 8,
  ":hover": {
    cursor: 'pointer'
  },
})