import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, ScrollView, View } from "react-native";
import PropTypes from "prop-types";

import api from "../../services/api";
import { deleteUser } from "../../utils";
import AdItem from "../../components/AdItem";
import { general } from "../../../assets/general";
import { Container, AdList } from "./styles";

import { AntDesign } from "@expo/vector-icons";

export default function Home(props) {
  const [data, setData] = useState([]);
  // const [refreshing, setRefreshing] = useState(false);

  const ads = {
    items: [
      {
        id: "L7-04-20",
        cep: {
          city: "Osório",
          state: "RS",
        },
        categories: "Terneiros castrados, entre outros",
        image: "https://app.kshost.com.br/images/video.png",
      },
      {
        id: "L6-04-20",
        cep: {
          city: "Esteio",
          state: "RS",
        },
        categories: "Vacas, entre outros",
        image: "https://app.kshost.com.br/images/video.png",
      },
      {
        id: "L5-04-20",
        cep: {
          city: "Cachoeira do Sul",
          state: "RS",
        },
        categories: "Touros",
        image: "https://app.kshost.com.br/images/video.png",
      },
      {
        id: "L4-04-20",
        cep: {
          city: "Vacaria",
          state: "RS",
        },
        categories: "Novilhos castrados, entre outros",
        image: "https://app.kshost.com.br/images/video.png",
      },
      {
        id: "L3-04-20",
        cep: {
          city: "Ijuí",
          state: "RS",
        },
        categories: "Vacas com cria",
        image: "https://app.kshost.com.br/images/video.png",
      },
      {
        id: "L2-04-20",
        cep: {
          city: "Santana do Livramento",
          state: "RS",
        },
        categories: "Novilhas, entre outros",
        image: "https://app.kshost.com.br/images/video.png",
      },
      {
        id: "L1-04-20",
        cep: {
          city: "Erechim",
          state: "RS",
        },
        categories: "Terneiros inteiros",
        image: "https://app.kshost.com.br/images/video.png",
      },
    ],
  };

  useEffect(() => {
    function loadProducts() {
      setData(ads.items);
      // console.log(ads.items)
    }

    loadProducts();
  }, []);

  renderListItem = ({ item }) => <AdItem product={item} />;

  return (
    <Container>
      <AdList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderListItem}
        // onRefresh={loadProducts}
        // refreshing={refreshing}
      />
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("AnnouncementCreation")}
        >
          <AntDesign
            name="plussquareo"
            size={42}
            color={general.styles.colors.oceanGreen}
          />
          <Text> </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

Home.navigationOptions = ({ navigation }) => {
  return {
    title: `${general.strings.CLIENT_TITLE}`,
    headerBackTitleVisible: true,
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          deleteUser().then(() => {
            navigation.navigate("AuthLoading");
          })
        }
        style={{ marginRight: 10 }}
      >
        <Text style={{ color: general.styles.colors.white }}>
          {general.strings.EXIT}
        </Text>
      </TouchableOpacity>
    ),
  };
};

Home.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
