import React from "react";
import Text from "../../../presentationals/Text";
import { Container, KegiatanCardWrapper } from "../../../presentationals";
import TambahKegiatanCard from "./TambahKegiatanCard";

export default function ListKegiatan({
  onAddCardPressed,
  listKegiatan,
  history,
  onClick
}) {
  return (
    <div style={{ position: "absolute", display: "flex", marginTop:32 }}>
      <Container style={{ marginLeft: 16, marginRight: 16 }} column>
        <div style={{ marginLeft: 16, marginRight: 16 }}>
          <Text large>Kegiatan Sedang Berjalan</Text>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          <TambahKegiatanCard onCardClicked={onAddCardPressed} />
          <RenderList
            history={history}
            onClick={onClick}
            listKegiatan={listKegiatan}
          />
        </div>
      </Container>
    </div>
  );
}

function RenderList({ history, listKegiatan, onClick }) {
  let view = [];
  listKegiatan.map((item, index) => {
    if (!item.deletedAt) {
      //kasih validasi date end lagi
      view.push(
        <KegiatanCardWrapper key={index}>
          <div
            onClick={() => onClick(item.id)}
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              padding: 16,
              justifyContent: "flex-end",
              alignItems: "flex-start",
              height: "100%"
            }}
          >
            <Text large>{item.activityName}</Text>
            <Text tiny>{item.participant}</Text>
          </div>
        </KegiatanCardWrapper>
      );
    }
  });
  return view;
}
