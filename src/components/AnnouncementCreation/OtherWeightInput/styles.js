import styled from 'styled-components/native';
import { colors } from 'general';

import { Dimensions } from 'react-native';
const screenW = Dimensions.get('window').width;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  padding: 18px 0px 0px 0px;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${colors.businessGreen};
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 2px 0px;
`;

export const Input = styled.TextInput`
  padding: 3px 0px 3px 0px;
  background-color: ${colors.oceanGreen};
  text-align: center;
  font-size: 16px;
  color: ${colors.white};
  border-radius: 50px;
  width: 50px;
  margin-right: 4px;
`;
