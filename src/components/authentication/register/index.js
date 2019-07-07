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
    year: "",
    description: "",
    adminName: "",
    contactPerson: "",
    error : ""
  }

  componentDidMount = () => {
    const {match} = this.props
    console.log(match)
    if(match && match.params && match.params.email){
      this.setState({email:match.params.email})
    }
  }

  render() {
    const { page, password, retypePassword, name, focusField, year, description, adminName, contactPerson, error } = this.state
    if(localStorage.getItem('userid')){
      return <Redirect to="/"></Redirect>
    }

    if(page === REGISTER_PAGE.PASSWORD){
      return (
        <FirstSectionRegister
          isButtonDisabled={
            !(password && retypePassword && name && focusField,
            year,
            description)
          }
          onButtonPressed={()=>this.setState({ page: REGISTER_PAGE.MAIN })}
          onInputNameChange={this.onInputNameChange}
          onLogoChange={this.onLogoChange}
          onFocusFieldSelected={list => this.onFocusFieldSelected(list)}
          onYearsChange={this.onYearsChange}
          onDescriptionChange={this.onDescriptionChange}
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
          isButtonDisabled={!(adminName && contactPerson && password && retypePassword)||error}
          onButtonPressed={()=>this.checkRetypePassword()}
          error={error}
        />
      )
    }
    return null
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
    this.setState({ year: event.target.value })
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

  checkRetypePassword = () => {
    const {password, retypePassword} = this.state
    let error = ''
    if(password !== retypePassword){
      error = "password tidak sesuai"
      alert(error)
      this.setState({error})
    }else{
      this.registerAdmin()
    }
  }


  registerAdmin = async () => {
    const {history} = this.props
    await this.props.client.mutate({
      mutation: gql(createAdmin),
      variables: {input:{
        email: this.state.email,
        password: this.state.password,
        organizationName: this.state.name,
        urlLogo: '-',
        focusType: this.state.focusField,
        year: this.state.year,
        description: this.state.description,
        adminName: this.state.adminName,
        contactPersonPhone: this.state.contactPerson
      }
    }
    }).then(({data})=>{
      if(data && data.createAdmin && data.createAdmin.id){
        localStorage.setItem('userid', data.createAdmin.id);
        history.push('/')
      }
    }).catch(error => {
      alert('Gagal melakukan pendaftaran, silakan coba lagi nanti')
    })
  }
}

export default withApollo(MainRegister) 