import React, { Component } from 'react'
import { Button } from '../../../presentationals';

class EmailNotFound extends Component {
  render() {
    return (
      <div>
        <Text>Akun dengan email test@example.com tidak ditemukan</Text>
        <Button>Buat Akun</Button>
        <Button>Coba Email Lain</Button>
      </div>
    )
  }
}