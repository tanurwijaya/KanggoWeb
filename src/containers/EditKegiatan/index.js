import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import Text from "../../presentationals/Text";
import styled from "@emotion/styled";
import {
  Button,
  Wrapper,
  Item,
  AreaField,
  TextField,
  ViewWrapper,
  Dropdown
} from "../../presentationals";
import { WHITE, LIGHT_GREY, DARK_GREY } from "../../themes/Colors";
import { getActivityDetail } from "../../graphql/queries";
import HeaderKegiatan from "../DetailKegiatan/HeaderKegiatan";
import Spinner from "react-spinner-material";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactQuill from "react-quill";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-quill/dist/quill.snow.css';
import Header from "./Header";
import moment from 'moment'
import { updateActivity } from '../../graphql/mutations'

class EditKegiatan extends Component {
  state = {
    description: "",
    startDate: "",
    endDate: "",
    activityName: "",
    location:"",
    activityID: ""
  };

  componentDidMount = () => {
    const { history } = this.props;
    if (history && history.location) {
      let activityID = history.location.pathname.replace("/kegiatan/", "");
      activityID = activityID.replace("/edit", "");
      this.getActivityDetail(activityID);
    }
  };

  getActivityDetail = async activityID => {
    await this.props.client
      .query({
        query: gql(getActivityDetail),
        variables: {
          activityID: activityID
        }
      })
      .then(({ data }) => {
        if(data.getActivityDetail){
          const {activityDateEnd, activityDateStart, activityDescription, activityName, activityType, location } = data.getActivityDetail
          this.setState({ description: activityDescription,
            activityID : activityID,
            startDate: activityDateStart ? moment(activityDateStart, "YYYY-MM-DD").toDate() : null,
            endDate: activityDateEnd ? moment(activityDateEnd, "YYYY-MM-DD").toDate() : null,
            activityName: activityName,
            location: location
           });
        }
      })
      .catch(err => {});
  };

  onDescriptionChange = html => {
    this.setState({ description: html });
  };

  onStartDateChange = date => {
    this.setState({ startDate: date });
  };

  onEndDateChange = date => {
    this.setState({ endDate: date });
  };

  onLocationChange = (event) => {
    this.setState({location : event.target.value})
  }

  onActivityNameChange = (event) => {
    this.setState({activityName : event.target.value})
  }

  onSavePressed = async () => {
    const {client, history} = this.props
    await client.mutate({
      mutation: gql(updateActivity),
      variables: {input:{
        activityID: this.state.activityID,
        organizationID: localStorage.getItem('userid'),
        activityName : this.state.activityName,
        activityDescription: this.state.description,
        isVirtualActivity : false,
        location : this.state.location,
        dateStart : moment(this.state.startDate,"YYYY-MM-DDTHH:mm:ss.SSSZ").format('YYYY-MM-DD'),
        dateEnd: moment(this.state.endDate,"YYYY-MM-DDTHH:mm:ss.SSSZ").format('YYYY-MM-DD')
      }
    }
    }).then(({data})=>{
      if(!data && data.updateActivity && data.updateActivity.error){
        history.push('/')
      }
    }).catch(error => {
      console.log(error)
      alert('Gagal mengubah data kegiatan, silakan coba lagi nanti')
    })
  }

  render() {
    const { activityName } = this.state;
    if (!activityName) {
      return (
        <Item center>
          <Spinner
            size={40}
            spinnerColor={"#333"}
            spinnerWidth={2}
            visible={true}
          />
        </Item>
      );
    }
    return (
      <div style={{ marginLeft: 32, marginRight: 32, paddingBottom: 32 }}>
        <Header eventName={activityName} onSavePressed={()=>this.onSavePressed()}/>

        <Wrapper column style={{ marginTop: 24 }} plain>
          <Text large style={{ marginBottom: 4 }}>
            Nama kegiatan
          </Text>
          <TextField onChange={this.onActivityNameChange} value={activityName} style={{width:'80%'}}/>
        </Wrapper>

        <Wrapper column style={{ marginTop: 24 }} plain>
          <Text large style={{ marginBottom: 4 }}>
            Deskripsi Kegiatan
          </Text>

          <ReactQuill
          style={{width:'80%', maxWidth:'80%'}}
            theme={"snow"}
            value={this.state.description}
            modules={EditKegiatan.modules}
            onChange={this.onDescriptionChange}
          />
        </Wrapper>

        <Wrapper column style={{ marginTop: 24 }} plain>
          <Text large style={{ marginBottom: 4 }}>
            Lokasi
          </Text>
          <Dropdown onChange={this.onLocationChange} value={this.state.location} width={"80%"}>
            <option value="Jakarta">Jakarta</option>
            <option value="Tangerang">Tangerang</option>
            <option value="Bandung">Bandung</option>
          </Dropdown>
        </Wrapper>

        <ViewWrapper style={{ marginTop: 24 }} plain>
          <Wrapper style={{ marginRight: 64 }} plain column>
            <Text large style={{ marginBottom: 4 }}>
              Tanggal Mulai
            </Text>
            <DatePicker
            dateFormat="dd/MM/yyyy"
              selected={this.state.startDate}
              onChange={this.onStartDateChange}
            />
          </Wrapper>

          <Wrapper plain column>
            <Text large style={{ marginBottom: 4 }}>
              Tanggal Selesai
            </Text>
            <DatePicker
            dateFormat="dd/MM/yyyy"
              selected={this.state.endDate}
              onChange={this.onEndDateChange}
            />
          </Wrapper>
        </ViewWrapper>

        <Wrapper column style={{ marginTop: 24 }} plain>
          <Text large>Harus mengisi form untuk mendaftar</Text>
          <Text color={DARK_GREY} style={{ marginBottom: 4 }}>
            Jika opsi ini dipilih maka pengguna yang akan mendaftar
            diharuskan mengisi form terlebih dahulu
          </Text>

          <AddFormWrapper onClick={() => alert("click")}>
            <FontAwesomeIcon
              style={{
                height: 24,
                width: 24,
                color: DARK_GREY,
                alignSelf: "center",
                marginBottom: 8
              }}
              icon={faPlus}
            />
            <Text color={DARK_GREY} large center>
              Buat Form Pendaftaran
            </Text>
          </AddFormWrapper>
        </Wrapper>
      </div>
    );
  }
}

EditKegiatan.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["clean"]
  ],
  clipboard: {
    matchVisual: false
  }
};

EditKegiatan.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
];

const AddFormWrapper = styled.div(props => ({
  padding: 56,
  border: `1px solid ${LIGHT_GREY}`,
  width: "80%",
  display: "flex",
  flexDirection: "column",
  marginTop: 8,
  ":hover": {
    cursor: "pointer"
  }
}));

export default EditKegiatan;
