import React, { Component } from 'react'
import CreateKegiatanModal from './CreateKegiatanModal';

import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { addActivity } from '../../../graphql/mutations';

import ListKegiatan from './ListKegiatan';

import OnProgessActivity from './OnProgressActivity';
import DetailKegiatan from '../../DetailKegiatan';
import { getActivity } from '../../../graphql/queries'

const kegiatan = [
    {
        id: 'EVT-0001',
        name: 'Test Nama Kegiatan 1',
        participant: 5,

    },
    {
        id: 'EVT-0002',
        name: 'Test Nama Kegiatan 2',
        participant: 14,
    },
    {
        id: 'EVT-0003',
        name: 'Test Nama Kegiatan 3',
        participant: 24,
    }
]

class KegiatanScreen extends Component {

    state = {
        isModalCreateVisible: false,
        namaKegiatan: '',
        jenisKegiatan: '',
        listKegiatan: []
    }

    componentDidMount = () => {
        this.getListActivity()
    }

    render() {
        const { isModalCreateVisible, namaKegiatan, jenisKegiatan, listKegiatan } = this.state
        const { history } = this.props
        if (history.location.pathname.includes('/event/')) {
            return <DetailKegiatan />
        } else {
            return (
                <>

                    <OnProgessActivity
                        eventName={'Testing dari props'}
                        numRegistered={32}
                        numUnprocess={1}
                    />

                    <ListKegiatan
                        history={this.props.history}
                        listKegiatan={this.state.listKegiatan}
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
                    activityName: this.state.namaKegiatan,
                    activityType: this.state.jenisKegiatan,
                    organizationID : "05751330-77b7-11e9-9240-4fb71a53c7ed"
                }
            }
        })
        console.log(data)
        //Navigate to detail kegiatan
    }

    getListActivity = async() => {
        const { data } = await this.props.client.query({
            query: getActivity,
            variables: { organizationID: "dff62540-793c-11e9-89df-c11b52bc8ee5",
            activityType: ""
         }
          })
          if(data && data.getActivity && data.getActivity.length){
              this.setState({listKegiatan : data.getActivity })
          }
          console.log(data)
    }
}

export default withApollo(KegiatanScreen)