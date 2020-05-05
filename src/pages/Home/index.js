import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, ScrollView, View } from "react-native";
import PropTypes from "prop-types";

import api from "../../services/ann";
import { deleteUser } from "../../utils";
import AdItem from "../../components/AdItem";
import { general } from "../../../assets/general";
import { Container, AdList } from "./styles";

import { AntDesign } from "@expo/vector-icons";

export default function Home(props) {
  const [data, setData] = useState([]);
  // const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        const retrieved = await api.get("/api/v1/announcements");
        console.log("content:", retrieved.data.content);
        setData(retrieved.data.content);
      } catch (e) {
        console.log("Erro:", e);
      }
      //setData(ads.items);
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
