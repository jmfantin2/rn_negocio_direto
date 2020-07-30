import styled from 'styled-components/native';
import { colors } from 'general';

import { Dimensions } from 'react-native';
const screenW = Dimensions.get('window').width;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 18px 0px 0px 0px;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${colors.businessBrown};
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 2px 0px;
`;

export const Input = styled.TextInput`
  height: 40px;
  padding: 0px 10px 0px 10px;
  background-color: ${colors.lighter};
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: ${colors.ruralGreen};
  border-radius: 50px;
  width: ${screenW / 3}px;
`;
