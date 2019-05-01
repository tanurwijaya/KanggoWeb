import React, { Component } from 'react'
import styled from '@emotion/styled'
import Text from '../../../presentationals/Text'
import { Container, TextField, Item, Button } from '../../../presentationals/index'
import { WHITE } from '../../../themes/Colors'
import { API, graphqlOperation } from 'aws-amplify'
import { queryAdminsByEmailIdIndex, getAdmin } from '../../../graphql/queries'
import { withApollo, Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

class MainRegister extends Component {
  render() {
    return (
      <h1>register</h1>
        )
  }
}

export default MainRegister