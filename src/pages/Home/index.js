import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, RefreshControl, View } from "react-native";
import PropTypes from "prop-types";

import api from "../../services/ann";
import { deleteUser } from "../../utils";
import AdItem from "../../components/AdItem";
import { colors, strings } from "../../../assets/general";
import { Container, AdList } from "./styles";

import { AntDesign } from "@expo/vector-icons";

export default function Home(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refresh, makeRefresh] = useState(0);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        setData([]);
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
    setTimeout(() => setLoading(false), 1200);
  }, [refresh]);

  renderListItem = ({ item }) => <AdItem product={item} />;

  return (
    <Container>
      <AdList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderListItem}
        refreshControl={
          <RefreshControl
            colors={[colors.darkCyan, colors.success]}
            refreshing={loading}
            onRefresh={() => makeRefresh(refresh + 1)}
          />
        }
      />
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("AnnouncementCreation")}
        >
          <AntDesign name="plussquareo" size={42} color={colors.darkCyan} />
          <Text> </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

Home.navigationOptions = ({ navigation }) => {
  return {
    title: `${strings.CLIENT_TITLE}`,
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
        <Text style={{ color: colors.white }}>{strings.EXIT}</Text>
      </TouchableOpacity>
    ),
  };
};

Home.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
