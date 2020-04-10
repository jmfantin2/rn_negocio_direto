import styled from 'styled-components/native'
import { general } from '../../../assets/general'

export const Container = styled.KeyboardAvoidingView`
  display: flex;
  flex: 1; 
  background-color: ${general.styles.colors.lighter};
`;

export const LabelContainer = styled.View`
  flexDirection: row;
  margin: 20px 0px 0px 10px;
  align-items: flex-end;
`;

export const Label = styled.Text`
  color: ${general.styles.colors.black};
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  background-color: ${general.styles.colors.white};
  border-radius: 3px;
  height: 44px;
  border-width:1px;
  margin: 10px 10px 0px 10px;
  padding: 0px 10px 0px 10px;
`;

export const ButtonText = styled.Text`
  text-align: left;
  color: ${general.styles.colors.white};
  font-size: 15px;
  font-weight: bold;
  margin: 0px 0px 0px 18px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${general.styles.colors.oceanGreen};
  border-radius: 4px;
  border: 1px solid ${general.styles.colors.regular};
  height: 50px;
  margin: 30px 10px 0px 10px;
  justify-content: center;
  align-items: center;
`;

export const Notice = styled.Text`
  font-size: 12px;
  margin-left: 8px;
`
