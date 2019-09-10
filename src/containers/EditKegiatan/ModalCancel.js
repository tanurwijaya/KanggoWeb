import React, { useState } from "react";
import { Item, TextField, Button } from "../../presentationals";
import Text from "../../presentationals/Text";
import { WHITE, RED_ERROR } from "../../themes/Colors";
import { Modal } from "react-bootstrap";

export default function ModalCancel({ close, show, onCancelPress, isLoading }) {
  const [cancelReason, setCancelReason] = useState("");

  const onModalClose = () => {
    setCancelReason("");
    close();
  };

  return (
    <Modal show={show} onHide={onModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Batalkan kegiatan</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Item column>
          <Item>
            <Text>Alasan Pembatalan</Text>
          </Item>
          <TextField
            onChange={({ target }) => setCancelReason(target.value)}
            value={cancelReason}
          />
        </Item>

      </Modal.Body>

      <Modal.Footer>
        {isLoading ? null : (
          <Button color={RED_ERROR} disabled={!cancelReason} onClick={() => onCancelPress(cancelReason)}>
            <Text large color={WHITE}>
              Batalkan Kegiatan
            </Text>
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
