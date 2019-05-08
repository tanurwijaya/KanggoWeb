import React, { Component } from 'react'
import styled from '@emotion/styled'
import {LIGHT_GREY, WHITE, DARK_GREY, PRIMARY_BLUE, BLUE_DARKER} from '../themes/Colors'

export const ViewWrapper = styled.div(props => ({
    display: 'flex',
    flex : 1,
    flexDirection: props.row && 'row',
    alignItems : props.itemCenter && 'center',
    justifyContent: props.spaceBetween && 'space-between',
    background: props.background,
}))

export const Container = styled.div( props => ({
   display : 'flex',
   flexDirection: props.row ? 'row' : 'column',
   alignItems : props.center && 'center',
   justifyContent: props.center && 'center',
   height : props.center && '100%'
}))

export const TextField = styled.input( props => ({
    display: 'flex',
    padding : 8,
    border : `1px solid ${LIGHT_GREY}`,
    borderRadius: '4px',
    width: props.width ? props.width : 'auto',
    backgroundColor: WHITE,
    alignItems: 'flex-start',
    ":focus" : {
        outline:'none',
    },
    "::placeholder" : {
        color : DARK_GREY,
        fontSize : props.placeholderSize
    },
    "::-webkit-input-placeholder":{
        color: DARK_GREY,
        fontSize : props.placeholderSize
    },
    "::-moz-placeholder":{
        color: DARK_GREY,
        fontSize : props.placeholderSize
    }
}))

export const Button = styled.button ( props => ({
    background : !props.disabled ? PRIMARY_BLUE : LIGHT_GREY,
    padding : '4px 24px',
    border :  `1px solid ${!props.disabled ? PRIMARY_BLUE : LIGHT_GREY}`,
    borderRadius: '4px',
    ":hover":{
        cursor:'pointer'
    },
    ":focus" : {
        outline:'none'
    },
    ":active":{
        background: BLUE_DARKER,
        borderColor: BLUE_DARKER
    }
}))

export const Item = styled.div( props => ({
    display: 'flex',
    marginTop : !props.plain && 8,
    marginBottom : !props.plain && 8,
    flexDirection: props.column && 'column',
    alignItems : props.center && 'center',
   justifyContent: props.center && 'center',
}))

export const Wrapper = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    alignSelf: 'center',
    alignItems: 'start',
    margin: !props.plain && 16
}))