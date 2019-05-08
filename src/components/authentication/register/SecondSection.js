import React, { Component } from 'react'
import Text from '../../../presentationals/Text'
import { Container, TextField, Item, Button } from '../../../presentationals/index'
import { WHITE, PRIMARY_BLUE } from '../../../themes/Colors'
import DragAndDrop from '../../../presentationals/ImageDragDrop';
import SelectablePills from '../../../presentationals/SelectablePills';

class SecondSection extends Component {
    render() {
        const {onInputNameChange, onLogoChange, onFocusFieldSelected, onYearsChange, onDescriptionChange, isButtonDisabled, onButtonPressed} = this.props
        return (
            <div>
                <div style={{ width: '66%', height: 4, background: PRIMARY_BLUE, marginBottom:32 }}></div>
            <Container center>
                <Text large>Create your account</Text>

                <div>
                    <Item column>
                        <Text>Nama organisasi / komunitas</Text>
                        <TextField onChange={onInputNameChange} />
                    </Item>

                    <Item column>
                        <Text>Logo organisasi / komunitas</Text>
                        <DragAndDrop>
                            <div
                                style={{
                                    display: 'flex',
                                    flex: 1,
                                    flexDirection: 'column',
                                    border: 'dashed grey 2px',
                                    backgroundColor: '#fff',
                                    height: 160,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 16
                                }}
                            >

                                <Text>Drag and drop your images here or</Text>
                                <div style={{ marginTop: 16 }}>
                                    <button>Upload your file</button>
                                </div>

                            </div>
                        </DragAndDrop>
                    </Item>

                    <Item column>
                        <Text>Fokus organisasi / komunitas</Text>
                        <Item>
                            <SelectablePills onSelected={(list)=>onFocusFieldSelected(list)} list={['Pendidikan', 'Lingkungan', 'Sosial', 'Bencana']} />
                        </Item>
                    </Item>

                    <Item column>
                        <Text>Tahun berdiri</Text>
                        <TextField onChange={onYearsChange}/>
                    </Item>

                    <Item column>
                        <Text>Deskripsi</Text>
                        <TextField onChange={onDescriptionChange} />
                    </Item>
                </div>

                <Button onClick={onButtonPressed} disabled={isButtonDisabled}><Text color={WHITE}>Selanjutnya</Text></Button>

            </Container>
            </div>
        )
    }

}

export default SecondSection