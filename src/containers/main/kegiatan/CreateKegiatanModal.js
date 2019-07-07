import React, { Component } from 'react'
import { Container, Item, TextField, Button } from "../../../presentationals";
import Text from "../../../presentationals/Text"
import { BLACK, WHITE, PRIMARY_BLUE } from '../../../themes/Colors';
import SelectablePills from '../../../presentationals/SelectablePills';
import { Modal } from 'react-bootstrap'

export default function CreateKegiatanModal({ isVisible,close, show, onBackdropPressed,onChangeActivityName,  onSelectActivityType, onCreatePressed, disabled, isLoading }) {
    if (!isVisible) return null
    else return (
           <Modal show={show} onHide={close}>
             <Modal.Header closeButton>
               <Modal.Title>Buat kegiatan baru</Modal.Title>
             </Modal.Header>

             <Modal.Body>
               <Item column>
                 <Item>
                   <Text>Nama Kegiatan</Text>
                 </Item>
                 <TextField
                   onChange={onChangeActivityName}
                   placeholder={"Nama kegiatan"}
                 />
               </Item>

               <Item column>
                 <Item>
                   <Text>Jenis Kegiatan</Text>
                 </Item>
                 <div
                   style={{
                     display: "flex",
                     flex: 1,
                     flexDirection: "row",
                     flexWrap: "wrap"
                   }}
                 >
                   <SelectablePills
                     single
                     onSelected={list => onSelectActivityType(list)}
                     list={["Fundraising", "Volunteer"]}
                   />
                 </div>
               </Item>
             </Modal.Body>

             <Modal.Footer>
               {isLoading ? null : (
                 <Button disabled={disabled} onClick={onCreatePressed}>
                   <Text large color={WHITE}>
                     Buat
                   </Text>
                 </Button>
               )}
             </Modal.Footer>
           </Modal>
         );
}