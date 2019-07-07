import React, { Component } from 'react'
import Text from '../../../presentationals/Text'
import { Container, TextField, Item, Button, AreaField } from '../../../presentationals/index'
import { WHITE, PRIMARY_BLUE } from '../../../themes/Colors'
import DragAndDrop from '../../../presentationals/ImageDragDrop';
import SelectablePills from '../../../presentationals/SelectablePills';

class FirstSection extends Component {
  

    handleDrop = file => {
        console.log(file)
        // this.setState({ files: fileList });
      };

  render() {
    const {
      onInputNameChange,
      onYearsChange,
      onDescriptionChange,
      isButtonDisabled,
      onButtonPressed,
      onFocusFieldSelected
    } = this.props;
    return (
      <div>
        <div
          style={{
            width: "33%",
            height: 4,
            background: PRIMARY_BLUE,
            marginBottom: 32
          }}
        />
        <Container center>
          <Text larger>Create your account</Text>

          <div style={{ width: "30%" }}>
            <Item column>
              <Text>Nama Komunitas / Organisasi</Text>
              <TextField onChange={onInputNameChange} />
            </Item>

            <Item column>
              <Text>Logo organisasi / komunitas</Text>
              <DragAndDrop handleDrop={this.handleDrop}>
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    border: "dashed grey 2px",
                    backgroundColor: "#fff",
                    height: 160,
                    alignItems: "center",
                    justifyContent: "center",
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
                <SelectablePills
                  isWrap
                  onSelected={list => onFocusFieldSelected(list)}
                  list={[
                    "Pendidikan",
                    "Lingkungan",
                    "Sosial",
                    "Bencana"
                  ]}
                />
              </Item>
            </Item>

            <Item column>
              <Text>Tahun berdiri</Text>
              <TextField inpu onChange={onYearsChange}/>
            </Item>

            <Item column>
              <Text>Deskripsi</Text>
              <AreaField onChange={onDescriptionChange} />
            </Item>

          </div>

          <Button disabled={isButtonDisabled} onClick={onButtonPressed}>
            <Text color={WHITE}>Selanjutnya</Text>
          </Button>
        </Container>
      </div>
    );
  }
}

export default FirstSection