import React, { Component } from 'react'
import Text from '../../presentationals/Text';
import { RED_ERROR, GREEN } from '../../themes/Colors';

class ParticipantsList extends Component {

  componentDidMount = () => {
    //fetch data user
  }



  render() {
    return (
      <>
        <table>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Tanggal mendaftar</th>
            <th>Status</th>
          </tr>
          <tr>
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
          </tr>
        </table>
        {/* <div style={{ alignSelf: 'flex-end', marginTop: 8 }}>
          <button style={{ marginRight: 8 }}>{'<'}</button>
          <button>{'>'}</button>
        </div> */}
      </>
    )
  }
}

export default ParticipantsList