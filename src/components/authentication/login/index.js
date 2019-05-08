import React, { Component } from 'react'
import styled from '@emotion/styled'
import Text from '../../../presentationals/Text'
import { Container, TextField, Item, Button } from '../../../presentationals/index'
import EmailNotFound from './EmailNotFound'
import InsertEmail from './InsertEmail'
import InsertPassword from './InsertPassword'
import { WHITE } from '../../../themes/Colors'
import { queryAdminsByEmailIdIndex, getAdmin } from '../../../graphql/queries'
import { withApollo, Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

class MainLogin extends Component {

  state = {
    email: "",
    password: "",
    organisasi: null,
    shouldShowRegister : false
  }

  onCheckPress = async () => {
    const { data } = await this.props.client.query({
      query: queryAdminsByEmailIdIndex,
      variables: { email: this.state.email }
    })
    if (data && data.queryAdminsByEmailIdIndex && data.queryAdminsByEmailIdIndex.items && data.queryAdminsByEmailIdIndex.items.length) {
      let item = data.queryAdminsByEmailIdIndex.items[0]
      
      this.setState({
        organisasi:item
      })
    }else{
      // navigate to init register
      this.setState({shouldShowRegister:true})
    }
  }

  onLoginPress = async () => {
    const { data } = await this.props.client.query({
      query: gql(getAdmin),
      variables: { email: this.state.email, password: this.state.password }
    })
    if(data && data.getAdmin && data.getAdmin.id){
      // this.props.history.push('/asd')
    }
    // if(data && data.queryAdminsByEmailIdIndex && data.queryAdminsByEmailIdIndex.items && data.queryAdminsByEmailIdIndex.items.length){
    //   let item = data.queryAdminsByEmailIdIndex.items[0]
    //   this.setState({
    //     namaOrganisasi : item.nama_komunitas,
    //     id : item.id 
    //   })
    // }
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  onEnterEmail = (e) => {
    if (e.key === 'Enter') {
      this.onCheckPress()
    }
  }

  onEnterPassword = (e) => {
    if (e.key === 'Enter') {
      this.onLoginPress()
    }
  }

  onCancelRegister = () => {
    this.setState({shouldShowRegister: false})
  }


  render() {
    const { organisasi,shouldShowRegister } = this.state
    return (
      <Container center>
        <div>

          {/* {shouldShowRegister && 
          <EmailNotFound/>
          } */}
{/* <EmailNotFound/> */}
          {!(organisasi && organisasi.id) ?
            <InsertEmail
              onCheckPress={this.onCheckPress}
              onEmailChange={this.onEmailChange}
              onEnterEmail={this.onEnterEmail}
            />
            :
            <InsertPassword
            organisasi={organisasi}
            onLoginPress={this.onLoginPress}
            onPasswordChange={this.onPasswordChange}
            onEnterPassword={this.onEnterPassword}
            />
          }

         
        </div>
      </Container>

    )
  }
}

export default withApollo(MainLogin)