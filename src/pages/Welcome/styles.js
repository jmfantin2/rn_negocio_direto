import styled from "styled-components/native";
import { colors, strings } from "../../../assets/general";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${colors.darkCyan};
  padding: 40px;
  justify-content: center;
  align-items: stretch;
`;

export const Logo = styled.Image`
  margin: 10px;
  width: auto;
`;

export const Title = styled.Text`
  text-align: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const TextInformation = styled.Text`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #dddddd;
  line-height: 21px;
`;

export const Error = styled.Text`
  color: yellow;
  text-align: center;
  margin-top: 10px;
`;

export const Form = styled.View`
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  background-color: #ffffff;
  border-radius: 50px;
  height: 44px;
  padding: 0px 20px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.white};
  border-radius: 50px;
  border: 1px solid ${colors.businessGreen};
  height: 50px;
  padding: 0px 20px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.businessGreen};
  font-weight: bold;
  font-size: 18px;
`;

export const SignInText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
`;

export const BottomForm = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-right: 15px;
  margin-top: 5px;
`;
