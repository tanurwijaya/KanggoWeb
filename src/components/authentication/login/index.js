import React, { Component } from 'react'
import { Container } from '../../../presentationals/index'
import EmailNotFound from './EmailNotFound'
import InsertEmail from './InsertEmail'
import InsertPassword from './InsertPassword'
import { checkAdminEmail, getAdmin } from '../../../graphql/queries'
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import KanggoLogo from '../../../assets/images/app_icon.png'
import { Redirect } from 'react-router-dom'

class MainLogin extends Component {
  state = {
    email: "",
    password: "",
    organisasi: null,
    shouldShowRegister: false,
    emailLoading : false,
    passwordLoading : false,
  };

  onCheckPress = async () => {
    this.setState({emailLoading: true})
    await this.props.client.query({
      query: gql(checkAdminEmail),
      variables: { email: this.state.email }
    }).then( ({data}) =>{
      if(data.checkAdminEmail && data.checkAdminEmail.id){
          this.setState({
            organisasi: data.checkAdminEmail,
            emailLoading: false
          });
      }
    }).catch(e => {
      this.setState({ shouldShowRegister: true,
        emailLoading: false
       });
    });
  };

  validateEmail = email => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  onLoginPress = async () => {
    const {history} = this.props
    await this.props.client.query({
      query: gql(getAdmin),
      variables: { email: this.state.email, password: this.state.password }
    }).then(({data})=>{
      if(data && data.getAdmin && data.getAdmin.id){
        localStorage.setItem('userid', data.getAdmin.id);
        history.push('/')
      }
    }).catch((e)=>{
      alert('Password tidak sesuai')
    });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onEnterEmail = e => {
    if (e.key === "Enter") {
      this.onCheckPress();
    }
  };

  onEnterPassword = e => {
    if (e.key === "Enter") {
      this.onLoginPress();
    }
  };

  hideModal = () => {
    this.setState({ shouldShowRegister: false });
  };
  

  render() {
    const { organisasi, shouldShowRegister, email,emailLoading  } = this.state;
    const {history} = this.props

    if(localStorage.getItem('userid')){
      return <Redirect to="/"></Redirect>
    }

    if(shouldShowRegister){
      return (
        <Container center>
          <EmailNotFound
          email={email}
          hideModal={this.hideModal}
          doRegister={()=>history.push(`/register/${email}`)}
          />
        </Container>
      );
    }
    return (
      <Container center>
        <div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 16
            }}
          >
            <img style={{ width: "70%" }} src={KanggoLogo} alt="logo" />
          </div>

          {!(organisasi && organisasi.id) ? (
            <InsertEmail
            isFetching={emailLoading}
              isButtonDisabled={!this.validateEmail(email)}
              onCheckPress={this.onCheckPress}
              onEmailChange={this.onEmailChange}
              onEnterEmail={this.onEnterEmail}
            />
          ) : (
            <InsertPassword
              organisasi={organisasi}
              onLoginPress={this.onLoginPress}
              onPasswordChange={this.onPasswordChange}
              onEnterPassword={this.onEnterPassword}
            />
          )}
        </div>
      </Container>
    );
  }
}

export default withApollo(MainLogin)