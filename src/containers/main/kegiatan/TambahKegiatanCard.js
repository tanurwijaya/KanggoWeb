import React, { Component } from 'react'
import Text from "../../../presentationals/Text"
import { Container } from '../../../presentationals';
import { WHITE } from '../../../themes/Colors';

export default function TambahKegiatanCard({ onCardClicked }) {
    return (
        <div  style={{ width: 300, height: 200, background: WHITE, border: '1px solid #C4C4C4', borderRadius: 16, margin: 16 }}>
            <Container onClick={onCardClicked} center>
                <h1 style={{ color: 'black', margin: 8 }}>+</h1>
                <Text medium>Tambah Kegiatan Baru</Text>
            </Container>
        </div>
    )
}