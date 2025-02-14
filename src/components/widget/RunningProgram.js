import React, { Component } from 'react'
import styled from '@emotion/styled'
import Text from '../../presentationals/Text'
import { ViewWrapper, Wrapper } from '../../presentationals/index'

const RunningProgram = (props) => {
    const { eventName, numRegistered, numUnprocess, style } = props
    return (
        <ViewWrapper itemCenter flex={1} background={'#000'} spaceBetween>
            <Wrapper>
                <Wrapper column style={{ marginRight: 72 }}>
                    <Text color={'white'} bold large>Running Program</Text>
                    <Text color={'white'} medium>{eventName}</Text>
                </Wrapper>

                <Wrapper column>
                    <Text color={'white'} bold medium>{numRegistered}</Text>
                    <Text color={'white'} small>Mendaftar</Text>
                </Wrapper>

                <Wrapper column>
                    <Text color={'white'} bold medium>{numUnprocess}</Text>
                    <Text color={'white'} small>Belum diproses</Text>
                </Wrapper>
            </Wrapper>

            <ButtonRight onClick={() => alert('klik')}><Text color={'white'} small>Lihat Detail</Text></ButtonRight>
        </ViewWrapper>
    )
}

const ButtonRight = styled.button(props => ({
    display: 'flex',
    heigt: 'auto',
    right: 16,
    background: '#fff',
    padding: '16px 32px',
    margin: 16,
    ":hover": {
        cursor: 'pointer'
    }
}))

export default RunningProgram
