import React, { Component } from 'react'
import Text from "../../../presentationals/Text"
import { Container, KegiatanCardWrapper } from '../../../presentationals';
import { WHITE } from '../../../themes/Colors';

export default function TambahKegiatanCard({ onCardClicked }) {
    return (
        <KegiatanCardWrapper>
            <Container onClick={onCardClicked} center>
                <h1 style={{ color: 'black', margin: 8 }}>+</h1>
                <Text medium>Tambah Kegiatan Baru</Text>
            </Container>
            </KegiatanCardWrapper>
    )
}