import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainLogin from './components/authentication/MainLogin'
import * as serviceWorker from './serviceWorker';
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';
import appSyncConfig from './aws-exports'

const client = new AWSAppSyncClient({
    url: appSyncConfig.aws_appsync_graphqlEndpoint,
    region: appSyncConfig.aws_appsync_region,
    auth: {
      type: appSyncConfig.aws_appsync_authenticationType,
      apiKey: appSyncConfig.aws_appsync_apiKey,
    }
  });

  const WithProvider = () => (
    <ApolloProvider client={client}>
      <Rehydrated>
        <MainLogin />
      </Rehydrated>
    </ApolloProvider>
  );

ReactDOM.render(<WithProvider />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
