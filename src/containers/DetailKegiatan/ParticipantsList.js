import React, { Component } from 'react'

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
            <th>Usia</th>
            <th>Domisili</th>
            <th>Form</th>
          </tr>
          <tr>
            <td>Alvin</td>
            <td>21</td>
            <td>Jakarta</td>
            <td><button>Jawaban</button></td>
          </tr>
          <tr>
            <td>Dzakwan</td>
            <td>21</td>
            <td>Bogor</td>
            <td><button>Jawaban</button></td>
          </tr>
        </table>
        <div style={{ alignSelf: 'flex-end', marginTop: 8 }}>
          <button style={{ marginRight: 8 }}>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </>
    )
  }
}

export default ParticipantsList