import React, { Component } from 'react'
import styled from '@emotion/styled'
import Text from '../../../presentationals/Text'
import { Container, TextField, Item, Button } from '../../../presentationals/index'
import { WHITE } from '../../../themes/Colors'
import { API, graphqlOperation } from 'aws-amplify'
import { queryAdminsByEmailIdIndex, getAdmin } from '../../../graphql/queries'
import { withApollo, Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

class MainLogin extends Component {

  state = {
    email: "",
    password: "",
    organisasi: null
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
    }
  }

  onLoginPress = async () => {
    const { data } = await this.props.client.query({
      query: gql(getAdmin),
      variables: { email: this.state.email, password: this.state.password }
    })
    if(data && data.getAdmin && data.getAdmin.id){
      this.props.history.push('/asd')
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


  render() {
    const { organisasi } = this.state
    return (
      <Container center>
        <div>

          {organisasi && organisasi.id ?
            <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center',alignItems:'center', marginBottom: 16 }}>
              <div style={{ width: 50, height: 50, borderRadius: 25, background: 'grey' }}></div>

              <img 
              style={{ width: 150, height: 150, marginLeft: 16 }}
              src={organisasi.url_logo_komunitas} alt={organisasi.nama_komunitas}/>

            </div>
            :
            <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <div style={{ width: 100, height: 100, borderRadius: 50, background: 'grey' }}></div>
            </div>
          }
         

          {!(organisasi && organisasi.id) ?
            <EmailField
              onEmailChange={this.onEmailChange}
              onEnterEmail={this.onEnterEmail}
            />
            :
            <Item column>
              <PasswordField
                onPasswordChange={this.onPasswordChange}
                onEnterPassword={this.onEnterPassword}
              />
            </Item>
          }


          <Item center>
            <Button onClick={this.onCheckPress}><Text tiny color={WHITE}>CEK</Text></Button>
          </Item>
        </div>
      </Container>

    )
  }
}

const EmailField = ({ onEmailChange, onEnterEmail }) => (
  <div>
    <Text>Email</Text>

    <Item>
      <TextField width={'200px'} placeholder={'test@example.com'} onChange={onEmailChange} onKeyDown={onEnterEmail} />
    </Item>
  </div>
)

const PasswordField = ({ onPasswordChange, onEnterPassword }) => (
  <div>
    <Text>Password</Text>

    <Item>
      <TextField type={'password'} width={'200px'} placeholder={'password'} onChange={onPasswordChange} onKeyDown={onEnterPassword} />
    </Item>
  </div>
)

export default withApollo(MainLogin)