import React, { Component } from "react";
import Text from "../../presentationals/Text";
import { RED_ERROR, GREEN, WARNING } from "../../themes/Colors";
import { withRouter } from "react-router-dom";
import moment from "moment";

class ParticipantsList extends Component {
  componentDidMount = () => {
    //fetch data user
  };

  getStatus = status => {
    switch (status) {
      case "WAITING":
        return (
          <Text large color={WARNING}>
            Belum diproses
          </Text>
        );
      case "PROCESSED":
        return "Konfirmasi oleh pengguna";
      case "PENDING":
        return "Konfirmasi oleh pengguna";
      case "SUCCESS":
        return (
          <Text large color={GREEN}>
            Diterima
          </Text>
        );
      case "REJECTED":
        return (
          <Text large color={RED_ERROR}>
            Ditolak
          </Text>
        );
      default:
        return "";
    }
  };

  onClickProcess = (userId) => {
    const {history, activity, data} = this.props
    const {pathname} = history.location
    history.push({
      pathname: `${pathname}/responses/${userId}`,
      data: {
        formID:activity.formID,
        listParticipants : data.getParticipants.participants
      }
    })
  }

  getActionItem = (userId, status) => {
    let clickHandler = null
    let buttonText = ""
    switch (status) {
      case "WAITING":
        buttonText = "Proses";
        clickHandler = ()=>this.onClickProcess(userId);
        break;
      case "SUCCESS":
        buttonText = "Lihat Respon";
        clickHandler = ()=>this.onClickProcess(userId);
        break;
      case "REJECTED":
        buttonText = "Lihat Respon";
        clickHandler = ()=>this.onClickProcess(userId);
        break;
      default:
        buttonText = "Lihat Respon";
        clickHandler = ()=>this.onClickProcess(userId);
    }
    return (<button onClick={clickHandler}>{buttonText}</button>)
  }

  render() {
    const { data } = this.props;
    if (!data) {
      return null;
    } else if (
      !data.getParticipants.participants ||
      data.getParticipants.participants.legth < 1
    ) {
      return null;
    }
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Tanggal mendaftar</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.getParticipants.participants.map((participant, index) => {
              return (
                <tr key={participant.joinDate}>
                  <td>{participant.user && participant.user.name}</td>
                  <td>{participant.user && participant.user.email}</td>
                  <td>
                    {moment(
                      participant.joinDate,
                      "YYYY-MM-DDTHH:mm:ss.SSSZ"
                    ).format("DD-MM-YYYY")}
                  </td>
                  <td>{this.getStatus(participant.status)}</td>
                  <td>{this.getActionItem(participant.user.id, participant.status)}</td>
                </tr>
              );
            })}
          </tbody>
          {/* <tr>
            <td>Alvin</td>
            <td>alvin@tanurwijaya.com</td>
            <td>081212121212</td>
            <td>17 Oktober 2019</td>
            <td><Text color={GREEN}>Diterima</Text></td>
          </tr>
          <tr>
            <td>Alvin</td>
            <td>dzakwanilham@gmail.com</td>
            <td>081212121212</td>
            <td>19 Oktober 2019</td>
            <td><Text color={RED_ERROR}>Ditolak</Text></td>
          </tr> */}
        </table>
        {/* <div style={{ alignSelf: 'flex-end', marginTop: 8 }}>
          <button style={{ marginRight: 8 }}>{'<'}</button>
          <button>{'>'}</button>
        </div> */}
      </>
    );
  }
}

export default withRouter(ParticipantsList);
