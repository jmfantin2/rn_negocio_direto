import styled from "styled-components/native";
import { general } from "../../../assets/general";

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${general.styles.colors.light};
`;

export const UploadVideo = styled.View`
  background-color: ${general.styles.colors.lighter};
  padding: 80px;
  align-items: center;
  border-width: 3px;
  border-color: ${general.styles.colors.businessGreen};
  border-radius: 3px;
  border-style: dashed;
  margin: 30px 30px 0px 30px;
`;

export const Divider = styled.View`
  padding: 10px 0px 10px 0px;
  background-color: ${general.styles.colors.oceanGreen};
  margin: 30px 0px 0px 0px;
`;
export const SwitchSection = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 30px 30px 0px 30px;
`;

export const Description = styled.Text`
  color: ${general.styles.colors.black};
  text-align: center;
  font-size: 16px;
`;

export const Section = styled.View`
  padding: 20px 30px 30px 30px;
`;

export const Title = styled.Text`
  color: ${general.styles.colors.white};
  font-size: 18px;
  font-weight: bold;
  align-self: center;
`;

export const Label = styled.Text`
  color: ${general.styles.colors.oceanGreen};
  font-size: 18px;
  font-weight: bold;
`;
