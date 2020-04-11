import styled from 'styled-components/native'
import { general } from '../../../assets/general'

// TODO: uncomment l19 and make it them go full width

export const Container = styled.KeyboardAvoidingView`
  flex-direction: column;
  flex: 1; 
  justify-content: center;
  background-color: ${general.styles.colors.lighter};
`;

export const DoubleContainer = styled.View`
  flex-direction: row;
`

export const RequiredInfo = styled.View`
  /*background-color: ${general.styles.colors.danger};*/
  flex-direction: column;
  padding: 10px 10px 10px 10px;
`;

export const Label = styled.Text`
  color: ${general.styles.colors.black};
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  height: 40px;
  padding: 0px 10px 0px 10px;

  background-color: ${general.styles.colors.white};
  border-radius: 3px;
`;

export const ButtonText = styled.Text`
  text-align: left;
  color: ${general.styles.colors.white};
  font-size: 16px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${general.styles.colors.oceanGreen};
  border-radius: 4px;
  border: 1px solid ${general.styles.colors.regular};
  height: 50px;
  margin: 30px 10px 30px 10px;
  justify-content: center;
  align-items: center;
`;
