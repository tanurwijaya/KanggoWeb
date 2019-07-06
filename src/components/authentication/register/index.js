import React, { Component } from 'react'
import FirstSectionRegister from './FirstSection';
import SecondSectionRegister from './SecondSection';
import { createAdmin } from '../../../graphql/mutations'
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom'

const REGISTER_PAGE = {
  PASSWORD : 'password_page',
  MAIN: 'main_page',
  ADMIN: 'admin_page'
}

class MainRegister extends Component {

  state = {
    page: REGISTER_PAGE.PASSWORD,
    email: "",
    password: "",
    retypePassword : "",
    name: "",
    logo: "",
    focusField: [],
    years: "",
    description: "",
    adminName: "",
    contactPerson: "",
    error : ""
  }

  render() {
    const { page, password, retypePassword, name, focusField, years, description, adminName, contactPerson, error } = this.state
    if(localStorage.getItem('userid')){
      return <Redirect to="/"></Redirect>
    }

    if(page === REGISTER_PAGE.PASSWORD){
      return (
        <FirstSectionRegister
          email={"alvintest@test.com"}
          onChangeEmail={this.onChangeEmail}
          isButtonDisabled={
            !(password && retypePassword && name && focusField,
            years,
            description) || error
          }
          onButtonPressed={this.goToSecondForm}
          onInputNameChange={this.onInputNameChange}
          onLogoChange={this.onLogoChange}
          onFocusFieldSelected={list => this.onFocusFieldSelected(list)}
          onYearsChange={this.onYearsChange}
          onDescriptionChange={this.onDescriptionChange}
          error={error}
        />
      );
    }
    if (page === REGISTER_PAGE.MAIN) {
      return (
        <SecondSectionRegister
        onAdminNameChange={this.onAdminNameChange}
        onContactPersonChange={this.onContactPersonChange}
        onChangePassword={this.onChangePassword}
        onChangeRetypePassword={this.onChangeRetypePassword}
          isButtonDisabled={!(adminName && contactPerson && password && retypePassword)}
          onButtonPressed={this.registerAdmin}
        />
      )
    }
    return null
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value})
  }

  onChangePassword = (event) => {
    this.setState({ password: event.target.value, error : '' })
  }

  onChangeRetypePassword = (event) => {
    let retypePassword = event.target.value
    this.setState({ retypePassword, error : '' })
  }

  onInputNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  onLogoChange = (image) => {

  }

  onFocusFieldSelected = (list) => {
    let selectedItem = []
    list.map((item, index) => {
      if (item.selected)
        selectedItem.push(item.value)
    })
    this.setState({ focusField: selectedItem })
  }

  onYearsChange = (event) => {
    this.setState({ years: event.target.value })
  }

  onDescriptionChange = (event) => {
    this.setState({ description: event.target.value })
  }

  onAdminNameChange = (event) => {
    this.setState({ adminName: event.target.value })
  }

  onContactPersonChange = (event) => {
    this.setState({ contactPerson: event.target.value })
  }

  goToSecondForm = () => {
    const {password, retypePassword} = this.state
    let error = ''
    if(password !== retypePassword){
      error = "(password tidak sesuai)"
      this.setState({error})
    }else{
      this.setState({ page: REGISTER_PAGE.MAIN })
    }
  }


  registerAdmin = async () => {
    const { data } = await this.props.client.mutate({
      mutation: gql(createAdmin),
      variables: {
        email: this.state.email,
        password: this.state.password,
        nama_komunitas: this.state.name,
        url_logo_komunitas: '',
        bidang_komunitas: '',
        tahun_dibentuk: this.state.years,
        deskripsi: this.state.description,
        nama_admin: this.state.adminName,
        contact_person_phone: this.state.contactPerson
      }
    })
  }
}

export default withApollo(MainRegister) 