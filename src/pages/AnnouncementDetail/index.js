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
  Label,
  ContainerQtt
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
      <TouchableOpacity onPress={() => console.log(announcement)}>
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
      {announcement.category ?
      <>
      <ContainerQtt>
        <Label>Categoria: </Label><Text>{announcement.category[0].name} </Text>
      </ContainerQtt>
      <ContainerQtt>
        <Label>Quantidade: </Label><Text>{announcement.category[0].quantity} </Text>
      </ContainerQtt>
      </>
      : null}

      {announcement.category ?
      <>
      <ContainerQtt>
        <Label>Categoria: </Label><Text>{announcement.category[1].name} </Text>
      </ContainerQtt>
      <ContainerQtt>
        <Label>Quantidade: </Label><Text>{announcement.category[1].quantity} </Text>
      </ContainerQtt>
      </>
      : null}

      {announcement.breed ?
      <>
      <ContainerQtt>
        <Label>Raça: </Label><Text>{announcement.breed[0].name} </Text>
      </ContainerQtt>
      <ContainerQtt>
       <Label>Quantidade: </Label><Text>{announcement.breed[0].quantity} </Text>
      </ContainerQtt>
      </>
      : null}

      {announcement.breed ?
      <>
      <ContainerQtt>
        <Label>Raça: </Label><Text>{announcement.breed[1].name} </Text>
      </ContainerQtt>
      <ContainerQtt>
        <Label>Quantidade: </Label><Text>{announcement.breed[1].quantity} </Text>
      </ContainerQtt>
      </>
      : null }

      <ContainerQtt>
        <Label>Idade: </Label><Text>{announcement.ageRange} </Text>
      </ContainerQtt>
      <ContainerQtt>
        <Label>Peso: </Label><Text>{announcement.weight}</Text>
      </ContainerQtt>

      {announcement.location ? 
      <>
      <ContainerQtt>
        <Label>Estado: </Label><Text>{announcement.location.state}</Text>
      </ContainerQtt>
      <ContainerQtt>
        <Label>Cidade: </Label><Text>{announcement.location.city}</Text>
      </ContainerQtt>
      </>
      : null }

      {announcement.observations ?
      <ContainerQtt>
       <Label>Observações: </Label><Text>{announcement.observations[0]}, {announcement.observations[1]}</Text>
      </ContainerQtt>
      : null}

      <ContainerQtt>
        <Label>Data de Criação: </Label><Text>{announcement.createdDate}</Text>
      </ContainerQtt>
      <ContainerQtt>
       <Label>Data de Encerramento: </Label><Text>{announcement.endDate}</Text>
      </ContainerQtt>
      <ContainerQtt>
        <Label>Preço Inicial: </Label><Text>{announcement.initialPrice}</Text>
      </ContainerQtt>
      <ContainerQtt>
        <Label>Preço Atual: </Label><Text>{announcement.currentPrice}</Text>
      </ContainerQtt>
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