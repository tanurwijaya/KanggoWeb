import React from "react";
import Text from "../../../presentationals/Text";
import {
  Container,
  KegiatanCardWrapper,
  KegiatanInnerWrapper
} from "../../../presentationals";
import TambahKegiatanCard from "./TambahKegiatanCard";
import moment from "moment";

export default function ListKegiatan({
  onAddCardPressed,
  listKegiatan,
  history,
  onClick
}) {
  return (
      <RenderList
        history={history}
        onAddCardPressed={onAddCardPressed}
        onClick={onClick}
        listKegiatan={listKegiatan}
      />
  );
}

function RenderList({ history, listKegiatan, onAddCardPressed, onClick }) {
  let currentActivity = [];
  let prevActivity = [];
  let today = new Date().toISOString().slice(0, 10);
  listKegiatan.map((item, index) => {
    if (!item.deletedAt && moment(today).isBefore(item.activityDateEnd)) {
      return currentActivity.push(
        <Kegiatan key={item.id} index={index} onClick={onClick} item={item} />
      );
    } else if (
      !item.deletedAt &&
      !moment(today).isBefore(item.activityDateEnd)
    ) {
      return prevActivity.push(
        <Kegiatan key={item.id} index={index} onClick={onClick} item={item} />
      );
    }
    return null
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 32 }}>
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
          {currentActivity}
        </div>
      </Container>

      <Container style={{ marginLeft: 16, marginRight: 16 }} column>
        <div style={{ marginLeft: 16, marginRight: 16 }}>
          <Text large>Kegiatan Sebelumnya</Text>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {prevActivity}
        </div>
      </Container>
    </div>
  );
}

function Kegiatan({ index, onClick, item }) {
  return (
    <KegiatanCardWrapper key={index}>
      <KegiatanInnerWrapper onClick={() => onClick(item.id)}>
        <Text large>{item.activityName}</Text>
        <Text tiny>{item.participant}</Text>
      </KegiatanInnerWrapper>
    </KegiatanCardWrapper>
  );
}
