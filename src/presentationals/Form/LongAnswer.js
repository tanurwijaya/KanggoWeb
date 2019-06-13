import React from 'react'
import Text from '../Text'
import { LIGHT_GREY } from '../../themes/Colors';
import FormItem from './FormItem';

export default function LongAnswer({onRemovePressed, onFormQuestionChange}){
    return(
        <FormItem onRemovePressed={()=>onRemovePressed()} onFormQuestionChange={(value)=>onFormQuestionChange(value)}>
            <Text style={{width:'80%',borderBottom: `1px dotted ${LIGHT_GREY}`,marginBottom:8}} color={LIGHT_GREY} small>Long Answer Text</Text>
        </FormItem>
    )
}