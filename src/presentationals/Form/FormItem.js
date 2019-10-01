import React from 'react'
import { FormItemWrapper, FormInputQuestion } from '..';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FormItem({ children,onRemovePressed, onFormQuestionChange }) {
  return (
    <FormItemWrapper>
      <FormInputQuestion onChange={(event)=>onFormQuestionChange(event.target.value)} placeholder={'placeholder'} />
      {children}
      <div onClick={()=>onRemovePressed()} style={{ display: 'flex', alignSelf: 'flex-end', marginTop: 16, flexDirection: 'row' }}>
        <FontAwesomeIcon style={{ color: '#f75d2a', width: 16, height: 16 }} icon={faTrash} />
      </div>
    </FormItemWrapper>
  )
}