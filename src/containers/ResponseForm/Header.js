import React from 'react'
import Text from '../../presentationals/Text'
import { ViewWrapper, Wrapper } from '../../presentationals'

export default function Header({activityName}){
    return(
        <ViewWrapper itemCenter style={{ marginBottom: 16, marginTop: 16, marginLeft:32, marginRight: 32 }} >
        <ViewWrapper style={{paddingTop:8, paddingBottom:8}} itemCenter flex={1} background={'#000'} spaceBetween>
            <Wrapper>
                <Text color={'white'} bold large>{activityName}</Text>
            </Wrapper>
        </ViewWrapper>
        </ViewWrapper>
    )
}