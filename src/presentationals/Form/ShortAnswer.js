import React from 'react'
import Text from '../Text'
import { LIGHT_GREY } from '../../themes/Colors';
import FormItem from './FormItem';

export default function ShortAnswer({onRemovePressed, onFormQuestionChange}){
    return(
        <FormItem onRemovePressed={()=>onRemovePressed()} onFormQuestionChange={(value)=>onFormQuestionChange(value)}>
            <Text style={{width:'80%',borderBottom: `1px solid ${LIGHT_GREY}`,marginBottom:8}} color={LIGHT_GREY} small>Short Answer Text</Text>
        </FormItem>
    )
}
