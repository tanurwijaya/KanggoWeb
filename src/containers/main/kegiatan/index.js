import React, { Component } from 'react'
import CreateKegiatanModal from './CreateKegiatanModal';

import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { addActivity } from '../../../graphql/mutations';

import ListKegiatan from './ListKegiatan';
import OnProgessActivity from './OnProgressActivity';

class KegiatanScreen extends Component {

    state = {
        isModalCreateVisible: false,
        namaKegiatan: '',
        jenisKegiatan: '',
        listKegiatan: []
    }

    render() {
        const { isModalCreateVisible, namaKegiatan, jenisKegiatan, listKegiatan } = this.state
        return (
            <>

                <OnProgessActivity
                    eventName={'Testing dari props'}
                    numRegistered={32}
                    numUnprocess={1}
                />
                
                <ListKegiatan
                    listKegiatan={['Test nama kegiatan 1', 'Test nama kegiatan 2', 'Test nama kegiatan 3', 'Test nama kegiatan 4', 'Test nama kegiatan 5']}
                    onAddCardPressed={this.onAddCardPressed}
                />

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
        const { client } = this.props
        const { data } = await client.mutate({
            mutation: gql(addActivity),
            variables: {
                input: {
                    title: this.state.namaKegiatan,
                    tipeKegiatan: this.state.jenisKegiatan
                }
            }
        })
        console.log(data)
        //Navigate to detail kegiatan
    }
}

export default withApollo(KegiatanScreen)