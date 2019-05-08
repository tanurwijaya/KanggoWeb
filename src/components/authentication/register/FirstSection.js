import React, { Component } from 'react'
import Text from '../../../presentationals/Text'
import { Container, TextField, Item, Button } from '../../../presentationals/index'
import { WHITE, PRIMARY_BLUE } from '../../../themes/Colors'
import DragAndDrop from '../../../presentationals/ImageDragDrop';
import SelectablePills from '../../../presentationals/SelectablePills';

class FirstSection extends Component {
    render() {
        const { email, error,onChangeEmail, onChangePassword, onChangeRetypePassword, isButtonDisabled, onButtonPressed } = this.props
        return (
            <div>
                <div style={{ width: '33%', height: 4, background: PRIMARY_BLUE, marginBottom:32 }}></div>
                <Container center>
                    <Text large>Create your account</Text>

                    <div style={{ width: '30%' }}>
                        <Item column>
                            <Text>Email</Text>
                            {/* <TextField disabled value={email}/> */}
                            <TextField onChange={onChangeEmail}/>
                        </Item>

                        <Item column>
                            <Text>Password</Text>
                            <TextField type={'password'}  onChange={onChangePassword} />
                        </Item>

                        <Item column>
                        <div>
                        <Text>Retype Password </Text>
                        <Text tiny color={'red'}>{error}</Text>
                        </div>
                            <TextField type={'password'}  onChange={onChangeRetypePassword} />
                        </Item>

                    </div>

                    <Button disabled={isButtonDisabled} onClick={onButtonPressed}><Text color={WHITE}>Selanjutnya</Text></Button>

                </Container>
            </div>
        )
    }

}

export default FirstSection