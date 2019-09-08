import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { thousandSeparator } from "../../utils/common";
import FundraisingConfirmModal from "./FundraisingConfirmModal";
import gql from "graphql-tag";
import {
  addTransferConfirmation,
  verifyPayment
} from "../../graphql/mutations";
class FundraisingList extends Component {
  state = {
    confirmationData: null,
    user: null,
    joinDate: null,
    amount: 0
  };

  componentDidMount = () => {
    //fetch data user
  };

  getJoinStatus = status => {
    switch (status) {
      case "WAITING":
        return "Belum Terverifikasi";
      case "PROCESSED":
        return "Konfirmasi oleh pengguna";
      case "PENDING":
        return "Konfirmasi oleh pengguna";
      case "SUCCESS":
        return "Terverifikasi";
      default:
        return "";
    }
  };

  onVerifyPayment = async () => {
    const { client, activity } = this.props;
    const { user, joinDate } = this.state;
    await client
      .mutate({
        mutation: gql(verifyPayment),
        variables: {
          input: {
            userID: user.id,
            joinAt: joinDate,
            activityID: activity.id
          }
        }
      })
      .then(({ data }) => {
        alert(data.verifyPayment && data.verifyPayment.message);
        this.closeModal();
      })
      .catch(err => {
        alert("Gagal memverifikasi pembayaran");
      });
  };

  addTransferConfirmation = async (transferAmount, bankHolderName, transferDate) => {
    const { client, activity } = this.props;
    const { user, joinDate } = this.state;
    await client
      .mutate({
        mutation: gql(addTransferConfirmation),
        variables: {
          input: {
            userID: user.id,
            activityID: activity.id,
            joinAt: joinDate,
            transferAmount: 30000,
            bankHolderName: "Alvin Tanurwijaya",
            transferDate: "2019-09-05"
          }
        }
      })
      .then((data) => {
        this.onVerifyPayment();
      })
      .catch(err => {
        console.log("err add transfer confirmation", err);
        alert("Gagal menambahkan konfirmasi pembayaran");
      });
  };

  openModal = (confirmationData, user, joinDate, amount) => {
    this.setState({
      confirmationData: confirmationData ? confirmationData : {},
      user: user,
      joinDate: joinDate,
      amount: amount
    });
  };

  closeModal = () => {
    this.setState({ confirmationData: null, user: null, joinDate: null, amount: 0 });
  };

  render() {
    const { data } = this.props;
    const { confirmationData, amount } = this.state;
    if (!data) {
      return null;
    } else if (
      !data.getParticipants.participants ||
      data.getParticipants.participants.legth < 1
    ) {
      return null;
    }
    return (
      <div style={{ marginBottom: 32 }}>
        <FundraisingConfirmModal
          isVisible={confirmationData != null}
          close={() => this.closeModal()}
          show={confirmationData != null}
          donationAmount={amount}
          confirmationData={confirmationData}
          addTransferConfirmation={(transferAmount, bankHolderName, transferDate)=>this.addTransferConfirmation(transferAmount, bankHolderName, transferDate)}
          onVerifyPayment={()=>this.onVerifyPayment()}
          isLoading={false}
        />
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Bank Tujuan</th>
              <th>Status</th>
              <th>Nominal Donasi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.getParticipants.participants.map((participant, index) => {
              return (
                <tr key={participant.joinDate}>
                  <td>{participant.user && participant.user.name}</td>
                  <td>BCA</td>
                  <td>{this.getJoinStatus(participant.status)}</td>
                  <td>{`Rp${thousandSeparator(
                    participant.donationAmount
                  )}`}</td>
                  <td>
                    {participant.status !== "SUCCESS" ? (
                      <button
                        onClick={() =>
                          this.openModal(
                            participant.transferConfirmation,
                            participant.user,
                            participant.joinDate,
                            participant.donationAmount
                          )
                        }
                      >
                        Verifikasi
                      </button>
                    ) : (
                      "Terverifikasi"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <div style={{ alignSelf: 'flex-end', marginTop: 8 }}>
          <button style={{ marginRight: 8 }}>{'<'}</button>
          <button>{'>'}</button>
        </div> */}
      </div>
    );
  }
}

export default withApollo(FundraisingList);
