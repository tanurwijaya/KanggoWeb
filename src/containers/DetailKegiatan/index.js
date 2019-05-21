import React, { Component } from 'react'
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Text from '../../presentationals/Text'
import HeaderKegiatan from './HeaderKegiatan';
import { Button, Wrapper } from '../../presentationals';
import { WHITE } from '../../themes/Colors';
import ParticipantsList from './ParticipantsList';

class DetailKegiatan extends Component {

    state = {

    }

    render() {
        const { } = this.state
        // const { params } = this.props.match
        console.log(this.props)
        return (
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <HeaderKegiatan />
                <Wrapper plain column>
                <Text large>Ada 4 pendaftar yang belum diproses</Text>
                <Button style={{marginTop:8, marginBottom: 32}}><Text color={WHITE}>Proses Sekarang</Text></Button>

                <Text large>Peserta diterima</Text>
                <ParticipantsList/>
                </Wrapper>
                {/* <h1>{params.event_id}</h1> */}

            </div>
        )
    }


}

export default withApollo(DetailKegiatan)