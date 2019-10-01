import React from 'react'
import Text from '../../presentationals/Text'
import { ViewWrapper, Wrapper, Button } from '../../presentationals'
import { WHITE } from '../../themes/Colors';


const Header = (props) => {
    const { eventName, onSavePressed } = props
    return (
        <ViewWrapper itemCenter style={{ marginBottom: 16, marginTop: 16 }} >
        <ViewWrapper itemCenter flex={1} background={'#000'} spaceBetween>
            <Wrapper>
                <Text color={'white'} bold large>{eventName}</Text>
            </Wrapper>

            <Wrapper>
                <Button onClick={()=>onSavePressed()}><Text color={WHITE}>Simpan</Text></Button>
            </Wrapper>
        </ViewWrapper>
        </ViewWrapper>
    )
}

export default Header