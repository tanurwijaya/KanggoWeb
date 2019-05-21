import React, { Component } from 'react'
import ShortAnswer from '../../presentationals/Form/ShortAnswer';
import LongAnswer from '../../presentationals/Form/LongAnswer';
import RadioButton from '../../presentationals/Form/RadioButton';

class EditKegiatan extends Component {

  componentDidMount = () => {
    //fetch data user
  }



  render() {
    return (
        <>
      <ShortAnswer/>
      <LongAnswer/>
      <RadioButton/>
      </>
    )
  }
}

export default EditKegiatan