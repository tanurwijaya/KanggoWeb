import React, { Component } from 'react'
import Text from "../../../presentationals/Text"
import { Container, KegiatanCardWrapper } from '../../../presentationals';
import TambahKegiatanCard from './TambahKegiatanCard';
import { WHITE } from '../../../themes/Colors';

export default function ListKegiatan({ onAddCardPressed, listKegiatan, history }) {
  return (
    <div style={{ position: 'absolute', display: 'flex' }}>
      <Container style={{ marginLeft: 16, marginRight: 16 }} column>
        <div style={{ marginLeft: 16, marginRight: 16 }}>
          <Text large>Kegiatan Sebelumnya</Text>
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          <TambahKegiatanCard
            onCardClicked={onAddCardPressed}
          />
          <RenderList
          history={history}
            listKegiatan={listKegiatan}
          />

        </div>
      </Container>
    </div>
  )
}

function RenderList({ history, listKegiatan }) {
  let view = []
  listKegiatan.map((item, index) => {
    view.push(
      <KegiatanCardWrapper>
        <div onClick={()=>console.log(history.push('event/'+item.id))} style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: 16, justifyContent: 'flex-end', alignItems: 'flex-start', height: '100%' }}>
          <Text large>{item.activityName}</Text>
          <Text tiny>{item.participant}</Text>
        </div>
      </KegiatanCardWrapper>
    )
  })
  return view
}