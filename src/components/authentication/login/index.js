import React, { Component } from 'react'
import Text from '../../../presentationals/Text'
import { Container } from '../../../presentationals/index'
import EmailNotFound from './EmailNotFound'
import InsertEmail from './InsertEmail'
import InsertPassword from './InsertPassword'
import { WHITE } from '../../../themes/Colors'
import { checkAdminEmail, getAdmin } from '../../../graphql/queries'
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import KanggoLogo from '../../../assets/images/app_icon.png'

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
    console.log('1')
    const {data} = await this.props.client.query({
      query: gql(checkAdminEmail),
      variables: { email: this.state.email }
    }).catch(res => {
      console.log('res',res)
    });
    if (
      data &&
      data.checkAdminEmail
    ) {
      let item = data.checkAdminEmail;
      this.setState({
        organisasi: item,
        emailLoading: false
      });
    } else {
      // navigate to init register
      this.setState({ shouldShowRegister: true,
        emailLoading: false
       });
    }
  };

  validateEmail = email => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  onLoginPress = async () => {
    const response = await this.props.client.query({
      query: gql(getAdmin),
      options: { fetchPolicy: 'no-cache' },
      variables: { email: this.state.email, password: this.state.password }
    }).then(({data})=>{
      if(data && data.getAdmin && data.getAdmin.id){
        // localStorage.setItem('userid', data.getAdmin.id);
        localStorage.setItem('userid', data.getAdmin.id);
      }
    }).catch((res)=>{
      console.log('catch',res)
    });

    console.log('response',response)
    if(response && response.errors){
      console.log('error')
    }else if(response && response.data && response.data.getAdmin){
      console.log('masuk')
    }

    

    // if (data && data.getAdmin && data.getAdmin.id) {
    //   // this.props.history.push('/asd')
    //   console.log(data.getAdmin)
    // }
    // if(data && data.checkAdminEmail && data.checkAdminEmail.items && data.checkAdminEmail.items.length){
    //   let item = data.checkAdminEmail.items[0]
    //   this.setState({
    //     namaOrganisasi : item.nama_komunitas,
    //     id : item.id
    //   })
    // }
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

  onCancelRegister = () => {
    this.setState({ shouldShowRegister: false });
  };

  render() {
    const { organisasi, shouldShowRegister, email,emailLoading  } = this.state;
    return (
      <Container center>
        <div>
          {/* {shouldShowRegister && 
          <EmailNotFound/>
          } */}
          {/* <EmailNotFound/> */}
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