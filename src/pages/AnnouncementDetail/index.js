import React, { useState, useEffect } from "react";
import { TouchableOpacity, Switch, Text, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import PropTypes from "prop-types";

import { general } from "../../../assets/general";

import { Ionicons } from "@expo/vector-icons";

import * as constants from "../../helpers/constants";
import { Video } from 'expo-av';
import videoTest from "../../../assets/video.mp4";

import {
  Container,
} from "./styles";

export default function AnnouncementDetail() {
  const [announcement, setAnnouncement] = useState({});

  useEffect(() => {
    function loadAnnouncement() {
      setAnnouncement(constants.ANNOUNCEMENT);
    }
    loadAnnouncement();
  }, []);

  return (
    <Container>
      <TouchableOpacity>
        <Video
          source={videoTest}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ height: 300 }}
        />
      </TouchableOpacity>
      <Text>{announcement.weight}</Text>
    </Container>

  )

}

AnnouncementDetail.navigationOptions = ({ navigation }) => {
  return {
    title: "Detalhe do Anuncio",
    headerBackTitleVisible: false,
  };
};

AnnouncementDetail.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};