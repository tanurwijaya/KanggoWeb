import React, { Component } from 'react'
import Text from '../../presentationals/Text';
import { PRIMARY_BLUE, RED_ERROR, GREEN } from '../../themes/Colors';

class FundraisingList extends Component {

  componentDidMount = () => {
    //fetch data user
  }



  render() {
    return (
      <>
        <table>
          <tr>
            <th>Nama Pemilik Rekening</th>
            <th>Bank Tujuan</th>
            <th>Transfer Date</th>
            <th>Jumlah Transfer</th>
          </tr>
          <tr>
            <td>Alvin Tanurwijaya</td>
            <td>BCA</td>
            <td>081212121212</td>
            <td>17 Oktober 2019</td>
          </tr>
          <tr>
            <td>Dzakwan</td>
            <td>BCA</td>
            <td>081212121212</td>
            <td>17 Oktober 2019</td>
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

export default FundraisingList