import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";

import api from "../../services/api";
import { deleteUser } from "../../utils";
import AdItem from "../../components/AdItem";
import { general } from "../../../assets/general";
import { Container, AdList } from "./styles";

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
        image:
          "https://www.paginacampeira.com.br/wp-content/uploads/2017/08/58b4e2828525e284fcdc8126ce1342da.png",
      },
      {
        id: "L6-04-20",
        cep: {
          city: "Esteio",
          state: "RS",
        },
        categories: "Vacas, entre outros",
        image:
          "https://imagens.mfrural.com.br/mfrural-produtos-us/277979-278638-1473061-venda-permanente-de-gado-leiteiro-racas-holandesa-jersey-e-jersolanda-bezerras-novilhas-e-vacas.jpg",
      },
      {
        id: "L5-04-20",
        cep: {
          city: "Cachoeira do Sul",
          state: "RS",
        },
        categories: "Touros",
        image:
          "https://blogs.canalrural.com.br/leiloblog/wp-content/uploads/sites/6/2017/05/navirai-fiv.jpg",
      },
      {
        id: "L4-04-20",
        cep: {
          city: "Vacaria",
          state: "RS",
        },
        categories: "Novilhos castrados, entre outros",
        image: "https://img.olx.com.br/images/26/269005025424487.jpg",
      },
      {
        id: "L3-04-20",
        cep: {
          city: "Ijuí",
          state: "RS",
        },
        categories: "Vacas com cria",
        image:
          "https://cdn.pixabay.com/photo/2015/06/10/08/57/calf-804622_960_720.jpg",
      },
      {
        id: "L2-04-20",
        cep: {
          city: "Santana do Livramento",
          state: "RS",
        },
        categories: "Novilhas, entre outros",
        image:
          "https://http2.mlstatic.com/novilhas-jersey-D_NQ_NP_964405-MLB25009646727_082016-F.jpg",
      },
      {
        id: "L1-04-20",
        cep: {
          city: "Erechim",
          state: "RS",
        },
        categories: "Terneiros inteiros",
        image:
          "https://lh3.googleusercontent.com/proxy/Cx7u1swF1M3Fs98NR4KWwg3ZvNT4_Cris7W16KOAHhZMMvKfGaGJH-qxV9T3XIqc1AJtpSSJttl8sagGWsX0lpPj_a4gzTewsHBFgpu527DVOF4GGVcjlFJtNZp6plb0oYTsEr3olOEBar5bi-Y",
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
      <TouchableOpacity
        onPress={() => props.navigation.navigate("AnnouncementCreation")}
      >
        <Text>{general.strings.CREATE_ANNOUNCEMENT}</Text>
      </TouchableOpacity>
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
