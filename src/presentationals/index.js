import React, { Component } from 'react'
import styled from '@emotion/styled'
import { LIGHT_GREY, WHITE, DARK_GREY, PRIMARY_BLUE, BLUE_DARKER, BLACK } from '../themes/Colors'

export const ViewWrapper = styled.div(props => ({
    display: 'flex',
    flex: 1,
    flexDirection: props.row && 'row',
    alignItems: props.itemCenter && 'center',
    justifyContent: props.spaceBetween && 'space-between',
    background: props.background,
}))

export const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.row ? 'row' : 'column',
    alignItems: props.center && 'center',
    justifyContent: props.center && 'center',
    height: props.center && '100%'
}))

export const LogoutButton = styled.div(props => ({
  borderTop: "1px solid #FF6961",
  borderBottom: "1px solid #FF6961",
  display: "flex",
  flex: 1,
  padding: 8,
  marginBottom: 32,
  width: "100%",
  justifyContent: "center",
  ":hover": {
    cursor: !props.disabled && 'pointer'
},
}));

export const TextField = styled.input(props => ({
    display: 'flex',
    paddingTop:4,
    paddingBottom:4,
    paddingLeft: 8,
    paddingRight:8,
    border: `1px solid ${LIGHT_GREY}`,
    borderRadius: '4px',
    width: props.width ? props.width : 'auto',
    backgroundColor: props.disabled ? LIGHT_GREY : WHITE,
    alignItems: 'flex-start',
    ":focus": {
        outline: 'none',
    },
    "::placeholder": {
        color: DARK_GREY,
        fontSize: props.placeholderSize
    },
    "::-webkit-input-placeholder": {
        color: DARK_GREY,
        fontSize: props.placeholderSize
    },
    "::-moz-placeholder": {
        color: DARK_GREY,
        fontSize: props.placeholderSize
    }
}))

export const UnderlineInput = styled.input(props => ({
    display: 'flex',
    paddingBottom: 8,
    paddingTop: 8,
    borderBottom: `1px solid ${LIGHT_GREY}`,
    borderTop: `0`,
    borderLeft: `0`,
    borderRight: `0`,
    fontSize: props.fontSize && props.fontSize,
    width: props.width ? props.width : 'auto',
    backgroundColor: WHITE,
    alignItems: 'flex-start',
    outline: 'none',
    ":focus": {
        borderBottom: `1px solid ${BLACK}`,
        outline: 'none',
    },
    "::placeholder": {
        color: DARK_GREY,
        fontSize: props.placeholderSize
    },
    "::-webkit-input-placeholder": {
        color: DARK_GREY,
        fontSize: props.placeholderSize
    },
    "::-moz-placeholder": {
        color: DARK_GREY,
        fontSize: props.placeholderSize
    }
}))

export const AreaField = styled.textarea(props => ({
    display: 'flex',
    paddingTop:4,
    paddingBottom:4,
    paddingLeft: 8,
    paddingRight:8,
    height: 80,
    minHeight: 80,
    maxHeight: 300,
    maxLines: 5,
    border: `1px solid ${LIGHT_GREY}`,
    borderRadius: '4px',
    width: props.width ? props.width : 'auto',
    backgroundColor: props.disabled ? LIGHT_GREY : WHITE,
    alignItems: 'flex-start',
    ":focus": {
        outline: 'none',
    },
    "::placeholder": {
        color: DARK_GREY,
        fontSize: props.placeholderSize
    },
    "::-webkit-input-placeholder": {
        color: DARK_GREY,
        fontSize: props.placeholderSize
    },
    "::-moz-placeholder": {
        color: DARK_GREY,
        fontSize: props.placeholderSize
    }
}))

export const Button = styled.button(props => ({
    background: !props.disabled ? PRIMARY_BLUE : LIGHT_GREY,
    padding: '4px 24px',
    border: `1px solid ${!props.disabled ? PRIMARY_BLUE : LIGHT_GREY}`,
    borderRadius: '4px',
    ":hover": {
        cursor: !props.disabled && 'pointer'
    },
    ":focus": {
        outline: 'none'
    },
    ":active": {
        background: BLUE_DARKER,
        borderColor: BLUE_DARKER
    }
}))

export const SecondaryButton = styled.button(props => ({
    background: WHITE,
    padding: '4px 24px',
    border: `1px solid ${!props.disabled ? PRIMARY_BLUE : LIGHT_GREY}`,
    borderRadius: '4px',
    ":hover": {
        cursor: !props.disabled && 'pointer'
    },
    ":focus": {
        outline: 'none'
    },
    ":active": {
        background: BLUE_DARKER,
        borderColor: BLUE_DARKER
    }
}))

export const Item = styled.div(props => ({
    display: 'flex',
    marginTop: !props.plain && 8,
    marginBottom: !props.plain && 8,
    flexDirection: props.column && 'column',
    alignItems: props.center && 'center',
    justifyContent: props.center && 'center',
}))

export const Wrapper = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    alignSelf: 'center',
    alignItems: 'start',
    margin: !props.plain && 16
}))

export const KegiatanCardWrapper = styled.div(props => ({
    width: 240,
    height: 160,
    background: WHITE,
    border: '1px solid #C4C4C4',
    borderRadius: 16,
    MozBorderRadius: 16,
    boxShadow: '0 0 11px rgba(33,33,33,.2)',
    margin: 16,
    ":hover": {
        cursor: 'pointer',
        boxShadow: '0 0 21px rgba(33,33,33,.5)'
    },
}))

export const Dropdown = styled.select(props => ({
display:'flex',
background: props.disabled ? LIGHT_GREY :'white',
height:32,
width: props.width ? props.width : 'auto',
}))

export const SidebarItem = styled.div(props => ({
    display: 'flex',
    padding: 16,
    alignItems: 'center',
    background: props.selected ? 'white' : 'black',
    borderTop: '1px solid white',
    borderColor: '#fff',
    flexDirection: 'row',
    ":hover": {
        cursor: 'pointer'
    }
}))

export const FormItemWrapper = styled.div(props => ({
    display: 'flex',

    flexDirection: 'column',
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    margin: 16,
    border: `1px solid ${LIGHT_GREY}`,
    borderRadius: 8
}))

export const FormInputQuestion = styled.input(props => ({
    display: 'flex',
    paddingBottom: 8,
    paddingTop: 8,
    borderBottom: `1px solid ${DARK_GREY}`,
    borderTop: `0`,
    borderLeft: `0`,
    borderRight: `0`,
    marginBottom: 16,
    width: props.width ? props.width : 'auto',
    backgroundColor: WHITE,
    alignItems: 'flex-start',
    outline: 'none',
    ":focus": {
        borderBottom: `1px solid ${BLACK}`,
        outline: 'none',
    },
    "::placeholder": {
        color: DARK_GREY,
        fontSize: props.placeholderSize
    },
    "::-webkit-input-placeholder": {
        color: DARK_GREY,
        fontSize: props.placeholderSize
    },
    "::-moz-placeholder": {
        color: DARK_GREY,
        fontSize: props.placeholderSize
    }
}))

// export const SecondaryButton = styled.div(props => ({
//     border: "1px solid #FF6961",
//     marginRight: 32,
//     paddingTop: 8,
//     paddingBottom: 8,
//     paddingLeft: 16,
//     paddingRight: 16,
//     borderRadius: 4,
//     ":hover": {
//       cursor: "pointer"
//     }
//   }));