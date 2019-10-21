import React from "react";
import Text from "../../presentationals/Text"
import { LIGHT_GREY, BLACK } from "../../themes/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faMapPin } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export default function DetailWidget({activityDateStart,activityDateEnd, location}){
    return(
        <div style={{display:'flex', flexDirection:'column',justifyContent:'spaceBetween',flex : 1, padding: 16, border:`1px solid ${LIGHT_GREY}`, marginBottom:16}}>
            <div style={{display:'flex', alignItems:'center', flexDirection:'row', flex:1}}>
                <FontAwesomeIcon style={{color:BLACK, marginRight:8}} icon={faCalendarAlt}/>
                {/* <Text>{activityDateStart}</Text> */}
                <Text>{moment(activityDateStart,"YYYY-MM-DD").format("ddd, DD-MMM-YYYY")}</Text>
                <Text style={{marginLeft:8, marginRight:4}}>sampai</Text>
                <Text>{moment(activityDateEnd,"YYYY-MM-DD").format("ddd, DD-MMM-YYYY")}</Text>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'row'}}>
                <FontAwesomeIcon style={{color:BLACK, marginRight:8}} icon={faMapPin}/>
                <Text>{location}</Text>
            </div>
        </div>
    )
}