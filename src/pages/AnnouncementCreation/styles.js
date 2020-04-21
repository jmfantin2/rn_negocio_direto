import styled from "styled-components/native";
import { FlatList } from "react-native";
import { general } from "../../../assets/general";

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${general.styles.colors.light};
  padding: 30px;
`;

export const UploadVideo = styled.View`
  background-color: ${general.styles.colors.lighter};
  padding: 80px;
  align-items: center;
  border-width: 3px;
  border-color: ${general.styles.colors.businessGreen};
  border-radius: 3px;
  border-style: dashed;
  margin: 0px 0px 30px 0px;
`;

export const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
  color: #000000;
  line-height: 21px;
`;

export const AdList = styled(FlatList)`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  background-color: #398ad7;
  border-radius: 3px;
  height: 44px;
  padding: 0px 20px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
`;
