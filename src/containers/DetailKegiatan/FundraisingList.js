import React, { Component } from "react";
import { thousandSeparator } from "../../utils/common";

class FundraisingList extends Component {
  componentDidMount = () => {
    //fetch data user
  };

  getJoinStatus = status => {
    switch (status) {
      case "WAITING":
        return "Belum Terverifikasi";
      case "PROCESSED":
        return "Konfirmasi oleh pengguna";
      case "PENDING":
        return "Konfirmasi oleh pengguna";
      case "SUCCESS":
        return "Terverifikasi";
      default:
        return "";
    }
  };

  render() {
    const { data } = this.props;
    console.log(data);
    if (!data) return null;
    else if (
      !data.getParticipants.participants ||
      data.getParticipants.participants.legth < 1
    )
      return null;
    return (
      <div style={{marginBottom:32}}>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Bank Tujuan</th>
              <th>Status</th>
              <th>Nominal Donasi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.getParticipants.participants.map(participant => {
              console.log(participant);
              return (
                <tr key={participant.joinDate}>
                  <td>{participant.user && participant.user.name}</td>
                  <td>BCA</td>
                  <td>{this.getJoinStatus(participant.status)}</td>
                  <td>{`Rp${thousandSeparator(
                    participant.donationAmount
                  )}`}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <div style={{ alignSelf: 'flex-end', marginTop: 8 }}>
          <button style={{ marginRight: 8 }}>{'<'}</button>
          <button>{'>'}</button>
        </div> */}
      </div>
    );
  }
}

export default FundraisingList;
