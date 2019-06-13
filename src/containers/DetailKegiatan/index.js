import React, { Component } from 'react'
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Text from '../../presentationals/Text'
import HeaderKegiatan from './HeaderKegiatan';
import { Button, Wrapper, Item } from '../../presentationals';
import { WHITE, LIGHT_GREY } from '../../themes/Colors';
import ParticipantsList from './ParticipantsList';

class DetailKegiatan extends Component {

    state = {

    }

    onClickForm = () => {
        console.log(this.props)
        const {history} = this.props
        history.push(history.location.pathname+'/'+'forms')
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

                <div onClick={this.onClickForm} style={{width:'100%', height: 50, background: LIGHT_GREY, marginBottom:32}}>

                </div>

                <Text large>Peserta diterima</Text>
                <ParticipantsList/>
                </Wrapper>
            </div>
        )
    }


}

export default withApollo(DetailKegiatan)