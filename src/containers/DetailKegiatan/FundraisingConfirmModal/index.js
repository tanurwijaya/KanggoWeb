import React, { useState } from "react";
import { Item, TextField, Button } from "../../../presentationals";
import Text from "../../../presentationals/Text";
import { WHITE } from "../../../themes/Colors";
import { Modal } from "react-bootstrap";

export default function FundraisingConfirmModal({
  isVisible,
  close,
  show,
  donationAmount,
  confirmationData,
  onVerifyPayment,
  addTransferConfirmation,
  isLoading
}) {
  
  console.log('donationAmount1',donationAmount)
  const [bankHolderName, setBankHolderName] = useState('')
  const [transferAmount, setTransferAmount] = useState(donationAmount)
  const [transferDate, setTransferDate] = useState(new Date().toISOString().substring(0, 10))

  const isButtonDisabled = () => {
    if(bankHolderName && transferAmount && transferDate){
      return false
    }else if(confirmationData && confirmationData.bankHolderName){
      return false
    }
    return true
  }

  const sanitizeNumber = (numb) => {
    if(!numb){
      return 0
    }else if(numb.trim == 0){
      return numb
    }
    return numb.replace(/^0+/, '')
  }

  const onModalClose = () => {
    setBankHolderName('')
    setTransferAmount(0)
    setTransferDate(new Date().toISOString().substring(0, 10))
    close()
  }

  const onButtonPress = () => {
    if(confirmationData && confirmationData.bankHolderName){
      onVerifyPayment()
    }else{
      addTransferConfirmation(transferAmount, bankHolderName, transferDate)
    }
  }

  const getAmountValue = () => {
    if(confirmationData.transferAmount){
      return confirmationData.transferAmount
    }else if(transferAmount){
      return transferAmount
    }else if(donationAmount){
      return donationAmount
    }
    return 0
  }
  
  if (!isVisible) return null;
  else
    return (
      <Modal show={show} onHide={onModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Transfer</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Item column>
            <Item>
              <Text>Nama Pemilik Rekening</Text>
            </Item>
            <TextField
              onChange={({target}) => setBankHolderName(target.value)}
              disabled={confirmationData.bankHolderName}
              value={confirmationData.bankHolderName || bankHolderName}
            />
          </Item>

          <Item column>
            <Item>
              <Text>Nominal Transfer</Text>
            </Item>
            <TextField
            type='number'
              onChange={({target}) => setTransferAmount(sanitizeNumber(target.value))}
              disabled={confirmationData.transferAmount}
              value={getAmountValue()|| 0}
            />
          </Item>

          <Item column>
            <Item>
              <Text>Tanggal Transfer</Text>
            </Item>
            <TextField
              type='date'
              onChange={({target}) => setTransferDate(target.value)}
              disabled={confirmationData.transferDate}
              value={confirmationData.transferDate || transferDate}
            />
          </Item>
        </Modal.Body>

        <Modal.Footer>
          {isLoading ? null : (
            <Button disabled={isButtonDisabled()} onClick={()=>onButtonPress()}>
              <Text large color={WHITE}>
                Konfirmasi Pembayaran
              </Text>
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
}
