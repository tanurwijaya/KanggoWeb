import React, { Component } from 'react'
import Text from '../Text'
import { TextField } from '..';

export default function ShortAnswer(){
    return(
        <div style={{display:'flex', flex:1, flexDirection:'column', margin: 16}}>
        <Text large >Pertanyaannya</Text>
        <TextField disabled value={'Test'}/>
        </div>
    )
}