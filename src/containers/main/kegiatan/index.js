import React, { Component } from 'react'
import CreateKegiatanModal from './CreateKegiatanModal';

import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { createActivity } from '../../../graphql/mutations'
import ListKegiatan from './ListKegiatan';
import OnProgessActivity from './OnProgressActivity';
import DetailKegiatan from '../../DetailKegiatan';
import { getActivity } from '../../../graphql/queries'
import FormKegiatan from '../../DetailKegiatan/Form';
import EditKegiatan from '../../EditKegiatan';

class KegiatanScreen extends Component {

    state = {
        isModalCreateVisible: false,
        namaKegiatan: '',
        jenisKegiatan: '',
        loadingCreate : false,
        listKegiatan: []
    }

    componentDidMount = () => {
        this.getListActivity()
    }

    render() {
        const { isModalCreateVisible, namaKegiatan, jenisKegiatan, listKegiatan, loadingCreate } = this.state
        const { history, client } = this.props
        if (history.location.pathname.includes('/kegiatan/') && !history.location.pathname.includes('edit') ) {
            return <DetailKegiatan history={history} />
        } else if (history.location.pathname.includes('/edit')){
            return <EditKegiatan history={history} client={client} />
        } else {
            return (
                <>

                    <OnProgessActivity
                        eventName={'Testing dari props'}
                        numRegistered={32}
                        numUnprocess={1}
                    />

                    <ListKegiatan
                        onClick={(activityID)=>this.goToDetailActivity(activityID)}
                        history={this.props.history}
                        listKegiatan={this.state.listKegiatan}
                        onAddCardPressed={this.onAddCardPressed}
                    />

                    <CreateKegiatanModal
                        isLoading = {loadingCreate}
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

    goToDetailActivity(activityID){
        const { history } = this.props
        history.push('kegiatan/'+activityID)
    }

    onAddCardPressed = () => {
        this.setState({ isModalCreateVisible: true })
    }

    dismissAddModal = () => {
        this.setState({ isModalCreateVisible: false })
    }

    onChangeActivityName = (event) => {
        this.setState({ namaKegiatan: event.target.value })
    }

    onSelectActivityType = (list) => {
        let jenisKegiatan = ''
        list.map((item, index) => {
            if (item.selected)
                jenisKegiatan = item.value
        })
        this.setState({ jenisKegiatan })
    }

    onCreateKegiatan = async () => {
        this.setState({loadingCreate : true })
        const { client } = this.props
        const { data } = await client.mutate({
            mutation: gql(createActivity),
            variables: {
                input: {
                    activityName: this.state.namaKegiatan,
                    activityType: this.state.jenisKegiatan,
                    organizationID : localStorage.getItem('userid')
                }
            }
        })

        if(data){
            this.setState({
                isModalCreateVisible:false,
                loadingCreate : false
            })
        }
        //Navigate to detail kegiatan
    }

    getListActivity = async() => {
        const { data } = await this.props.client.query({
            query: gql(getActivity),
            variables: { organizationID: localStorage.getItem('userid'),
            activityType: ""
         }
          })
          if(data && data.getActivity && data.getActivity.length){
              this.setState({listKegiatan : data.getActivity })
          }
    }
}

export default withApollo(KegiatanScreen)