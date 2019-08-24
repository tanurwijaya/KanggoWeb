import React, { Component } from "react";
import {thousandSeparator} from '../../utils/common'

class FundraisingList extends Component {
  componentDidMount = () => {
    //fetch data user
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
      <>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Bank Tujuan</th>
              <th>Tanggal Transfer</th>
              <th>Jumlah Transfer</th>
            </tr>
          </thead>
          <tbody>
            {data.getParticipants.participants.map(participant => {
              console.log(participant);
              return (
                <tr key={participant.joinDate}>
                  <td>{participant.user && participant.user.name}</td>
                  <td>BCA</td>
                  <td>081212121212</td>
                  <td>{`Rp${thousandSeparator(participant.donationAmount)}`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <div style={{ alignSelf: 'flex-end', marginTop: 8 }}>
          <button style={{ marginRight: 8 }}>{'<'}</button>
          <button>{'>'}</button>
        </div> */}
      </>
    );
  }
}

export default FundraisingList;
