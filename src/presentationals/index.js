import React, { Component } from 'react'
import styled from '@emotion/styled'

export const ViewWrapper = styled.div(props => ({
    display: 'flex',
    flex : 1,
    flexDirection: props.row && 'row',
    alignItems : props.itemCenter && 'center',
    justifyContent: props.spaceBetween && 'space-between',
    background: props.background,
}))

export const Wrapper = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    alignSelf: 'center',
    alignItems: 'start',
    margin: !props.plain && 16
}))