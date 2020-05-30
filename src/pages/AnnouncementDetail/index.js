import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import PropTypes from "prop-types";

import api from "../../services/ann";

import * as constants from "../../helpers/CattleUtility/constants";
import { Video } from "expo-av";
import videoTest from "../../../assets/video.mp4";

import { Container, Label, ContainerQtt } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { general } from "../../../assets/general";

export default function AnnouncementDetail({ navigation }) {
  const id = navigation.getParam("id");
  const [announcement, setAnnouncement] = useState({});

  useEffect(() => {
    async function retrieveAnnouncement() {
      try {
        console.log("essa iD", id);
        const retrieved = await api.get(`/api/v1/announcements/${id}`);
        console.log("ret data:", retrieved.data);
        setAnnouncement(retrieved.data);
      } catch (e) {
        console.log("Erro:", e);
      }
      //setData(ads.items);
      // console.log(ads.items)
    }

    retrieveAnnouncement();
  }, []);

  return (
    <Container>
      <Video
        useNativeControls={true}
        source={videoTest}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping
        style={{ height: 300 }}
      />
      <View
        style={{
          height: 200,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons
          name="ios-construct"
          size={80}
          color={general.styles.colors.oceanGreen}
        />
        <Text>{announcement.createdDate}</Text>
      </View>
    </Container>
  );
}

AnnouncementDetail.navigationOptions = ({ navigation }) => {
  return {
    title: "Detalhes do Anúncio",
    headerBackTitleVisible: false,
  };
};

AnnouncementDetail.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
