import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";

import api from "../../services/api";
import { deleteUser } from "../../utils";
import AdItem from "../../components/AdItem";
import { general } from "../../../assets/general";
import { Container, AdList } from "./styles";

export default function AnnouncementCreation(props) {
  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  );
}

AnnouncementCreation.navigationOptions = ({ navigation }) => {
  return {
    title: "Criar um anúncio",
    headerBackTitleVisible: false,
  };
};

AnnouncementCreation.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
