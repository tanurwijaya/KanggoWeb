import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Text = (props) => {
    const { tiny, small, medium, large, larger, children, center, bold, color, style } = props
    let fontSize = 14

    if(tiny){
        fontSize = 10
    }else if(small){
        fontSize = 12
    }else if(medium){
        fontSize = 14
    }else if(large){
        fontSize = 16
    }else if(larger){
        fontSize = 21
    }

    if (typeof children === 'string' || typeof children === 'number' ) {
        if (center) {
            if (bold) {
                return <StyledText style={{...style, color: color, fontSize:fontSize}} bold center>{children}</StyledText>
            } else {
                return <StyledText style={{...style, color: color, fontSize:fontSize}} center>{children}</StyledText>
            }
        } else {
            if (bold) {
                return <StyledText style={{...style, color: color, fontSize:fontSize}} bold>{children}</StyledText>
            } else {
                return <StyledText style={{...style, color: color, fontSize:fontSize}}>{children}</StyledText>
            }
        }
    }
    return null
}

Text.defaultProps = {
    size: 18,
    children: '',
    color : '#000'
}

Text.propTypes = {
    size: PropTypes.string,
    children: PropTypes.string
}

const StyledText = styled.span(props => ({
    color: '#fff',
    textAlign: props.center ? 'center' : 'left',
    fontWeight: props.bold && 'bold'
}))

export default Text