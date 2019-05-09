import React, { Component } from 'react'
import CreateKegiatanModal from './CreateKegiatanModal';
import { Button } from 'react-bootstrap';
import Text from "../../../presentationals/Text"
import { Container } from '../../../presentationals';
import TambahKegiatanCard from './TambahKegiatanCard';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { addActivity } from '../../../graphql/mutations';

class KegiatanScreen extends Component {

    state = {
        isModalCreateVisible: false,
        namaKegiatan: '',
        jenisKegiatan: '',
    }

    render() {
        const { isModalCreateVisible, namaKegiatan, jenisKegiatan } = this.state
        return (
            <>



                <div style={{ position: 'absolute', display: 'flex' }}>
                    <Container column>
                        <Text large>Kegiatan Sebelumnya</Text>
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                            <TambahKegiatanCard
                                onCardClicked={this.onAddCardPressed}
                            />
                            <div style={{ width: 300, height: 200, margin: 16, background: 'grey' }}></div>
                        </div>
                    </Container>
                </div>

                <CreateKegiatanModal
                    onChangeActivityName={this.onChangeActivityName}
                    onSelectActivityType={(list) => this.onSelectActivityType(list)}
                    onBackdropPressed={this.dismissAddModal}
                    isVisible={isModalCreateVisible}
                    close={this.dismissAddModal}
                    show={this.onAddCardPressed}
                    onCreatePressed={this.onCreateKegiatan}
                    disabled={!(namaKegiatan && jenisKegiatan)}
                    style={{ height: '100%', width: '100%' }} />

            </>
        )
    }

    onAddCardPressed = () => {
        this.setState({ isModalCreateVisible: true })
        console.log('show')
    }

    dismissAddModal = () => {
        this.setState({ isModalCreateVisible: false })
        console.log('hide')
    }

    onChangeActivityName = (event) => {
        this.setState({ namaKegiatan: event.target.value })
    }

    onSelectActivityType = (list) => {
        let jenisKegiatan = ''
        console.log('list', list)
        list.map((item, index) => {
            if (item.selected)
                jenisKegiatan = item.value
        })
        this.setState({ jenisKegiatan })
    }

    onCreateKegiatan = async () => {
        const {client} = this.props
        const {data} = await client.mutate({
            mutation: gql(addActivity),
            variables: {
                input:{
                    title: this.state.namaKegiatan,
                tipeKegiatan : this.state.jenisKegiatan 
                }
             }
        })
        console.log(data)
        // console.log(this.props)
        // console.log('Jenis kegiatan', this.state.jenisKegiatan)
    }
}

export default withApollo(KegiatanScreen)