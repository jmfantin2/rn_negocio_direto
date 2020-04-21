/* NOTICE: 
    - We are not using styled.Picker since react-native/picker is deprecated.
    - We are also not using react-native-community/picker because it sucks.
*/
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

import RNPickerSelect from "react-native-picker-select";
import { general } from "../../../assets/general";

import { Ionicons } from "@expo/vector-icons";

import { Container, UploadVideo } from "./styles";

export default function AnnouncementCreation(props) {
  return (
    <Container>
      {/* Video upload */}
      <TouchableOpacity>
        <UploadVideo>
          <Ionicons
            name="md-videocam"
            size={42}
            color={general.styles.colors.oceanGreen}
          />
          <Text>Envie um vídeo</Text>
        </UploadVideo>
      </TouchableOpacity>

      {/*
      <RNPickerSelect
        placeholder={"Selecione uma categoria"}
        items={sports}
        onValueChange={(value) => {
          this.setState({
            favSport0: value,
          });
        }}
        onUpArrow={() => {
          this.inputRefs.firstTextInput.focus();
        }}
        onDownArrow={() => {
          this.inputRefs.favSport1.togglePicker();
        }}
        style={pickerSelectStyles}
        value={this.state.favSport0}
        ref={(el) => {
          this.inputRefs.favSport0 = el;
        }}
      /> */}

      <RNPickerSelect
        onValueChange={(value) => console.log("S-Category2: ", value)}
        items={[
          { label: "Football", value: "football" },
          { label: "Baseball", value: "baseball" },
          { label: "Hockey", value: "hockey" },
        ]}
      />
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
