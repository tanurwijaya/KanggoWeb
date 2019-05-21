import React, { Component } from 'react'
import Text from '../Text'
import { TextField, AreaField } from '..';

export default function LongAnswer(){
    return(
        <div style={{display:'flex', flex:1, flexDirection:'column', margin: 16}}>
        <Text large >Pertanyaannya</Text>
        <AreaField disabled value={'Test'}/>
        </div>
    )
}