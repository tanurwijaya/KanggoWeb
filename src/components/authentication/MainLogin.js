import React, { Component } from 'react'
import styled from '@emotion/styled'
import Text from '../../presentationals/Text'
import { Container, TextField, Item, Button } from '../../presentationals/index'
import { WHITE } from '../../themes/Colors';
import {API, graphqlOperation} from 'aws-amplify'
import {queryAdminsByEmailIdIndex} from '../../graphql/queries'
import { withApollo, Query } from 'react-apollo';
import gql from 'graphql-tag';

class MainLogin extends Component {

  state = {
    email : ""
  }

  onLoginPress = async () => {
// console.log(this.props.client.query(queryAdminsByEmailIdIndex,{email:this.state.email}))
    // const loginResult = await API.graphql(graphqlOperation(queryAdminsByEmailIdIndex, { email: this.state.email }))
    // console.log(loginResult)
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  render() {
    const {email} = this.state
    return (
      <Container center>
        <div>

          <Query query={queryAdminsByEmailIdIndex} variables={{email}}>
          {({loading, error, data}) => {
            if (loading) return null
            if (error) return null
            if(data && data.queryAdminsByEmailIdIndex && data.queryAdminsByEmailIdIndex.items && data.queryAdminsByEmailIdIndex.items.length){
              console.log(data.queryAdminsByEmailIdIndex.items)
              return(
                <div style={{display:'flex',width:100, height:100, borderRadius:50, background:'grey', alignContent:'center',justifyContent:'center'}}></div>
              )
            }
            return null

          }
          
        }
          </Query>
          <Text>Email</Text>

          <Item>
            <TextField width={'200px'} placeholder={'test@example.com'} onChange={this.onEmailChange} />
          </Item>

          <Item center>
            <Button onClick={this.onLoginPress}><Text tiny color={WHITE}>CEK</Text></Button>
          </Item>
        </div>
      </Container>

    )
  }
}

export default withApollo(MainLogin)