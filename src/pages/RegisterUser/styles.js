import styled from 'styled-components/native'
import { general } from '../../../assets/general'

export const Container = styled.KeyboardAvoidingView`
  display: flex;
  flex: 1; 
  margin-top: 20px;
`;

export const Title = styled.Text`
  text-align: left;
  color: ${general.styles.colors.black};
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
`;

export const Label = styled.Text`
  text-align: left;
  color: ${general.styles.colors.black};
  font-size: 15px;
  font-weight: bold;
  margin-left: 18px;
`;

export const Input = styled.TextInput`
  background-color: ${general.styles.colors.white};
  border-radius: 3px;
  height: 44px;
  padding: 0px 20px;
  margin: 10px;
`;

export const ButtonText = styled.Text`
  text-align: left;
  color: ${general.styles.colors.white};
  font-size: 15px;
  font-weight: bold;
  margin-left: 18px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${general.styles.colors.oceanGreen};
  border-radius: 4px;
  border: 1px solid ${general.styles.colors.regular};
  height: 50px;
  padding: 0px 20px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;
