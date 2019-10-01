import React, { Component } from 'react'
import Text from '../../../presentationals/Text'
import { Container, TextField, Item, Button } from '../../../presentationals/index'
import { WHITE, PRIMARY_BLUE } from '../../../themes/Colors'
import DragAndDrop from '../../../presentationals/ImageDragDrop';
import SelectablePills from '../../../presentationals/SelectablePills';

class ThirdSectionRegister extends Component {
    render() {
        const { onAdminNameChange, onContactPersonChange, isButtonDisabled, onButtonPressed } = this.props
        return (
            <div>
                <div style={{ width: '100%', height: 4, background: PRIMARY_BLUE, marginBottom:32 }}></div>
                <Container center>
                    <Text large>Create your account</Text>

                    <div style={{ width: '30%' }}>
                        <Item column>
                            <Text>Nama admin</Text>
                            <TextField onChange={onAdminNameChange} />
                        </Item>

                        <Item column>
                            <Text>Contact Person</Text>
                            <TextField onChange={onContactPersonChange} />
                        </Item>

                    </div>

                    <Button disabled={isButtonDisabled} onClick={onButtonPressed}><Text color={WHITE}>Selanjutnya</Text></Button>

                </Container>
            </div>
        )
    }

}

export default ThirdSectionRegister