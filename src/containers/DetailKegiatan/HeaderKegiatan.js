import React from "react";
import Text from "../../presentationals/Text";
import { ViewWrapper, Wrapper, Button } from "../../presentationals";

import { WHITE } from "../../themes/Colors";
import { thousandSeparator } from "../../utils/common";

const HeaderKegiatan = props => {
  const {
    eventName,
    navigateToEdit,
    fundraisingProgress,
    activityType,
    participantAmount
  } = props;
  return (
    <ViewWrapper itemCenter style={{ marginBottom: 16, marginTop: 16 }}>
      {/* <Container center style={{borderRadius:'50%', background:'grey', width: 48, height:48, marginRight:16}}>
        <FontAwesomeIcon style={{color:'white'}} icon={faChevronLeft}/>
        </Container> */}
      <ViewWrapper itemCenter flex={1} background={"#000"} spaceBetween>
        <Wrapper>
          <Text color={"white"} bold large>
            {eventName}
          </Text>
        </Wrapper>

        <Wrapper>
          {activityType === "Fundraising" ? (
            <Wrapper column>
              <Text color={"white"} large bold>
                {`Rp${thousandSeparator(fundraisingProgress)}`}
              </Text>
              <Text color={"white"} medium>
                Terukumpul
              </Text>
            </Wrapper>
          ) : (
            <Wrapper column>
              <Text color={"white"} large bold>
                {participantAmount}
              </Text>
              <Text color={"white"} medium>
                Mendaftar
              </Text>
            </Wrapper>
          )}
          <Wrapper>
            <Button onClick={() => navigateToEdit()}>
              <Text color={WHITE}>Edit</Text>
            </Button>
          </Wrapper>
          x
          {/*  <Wrapper column>
                    <Text color={'white'} large bold>4</Text>
                    <Text color={'white'} medium>Belum diproses</Text>
                </Wrapper> */}
        </Wrapper>
      </ViewWrapper>
    </ViewWrapper>
  );
};

export default HeaderKegiatan;
