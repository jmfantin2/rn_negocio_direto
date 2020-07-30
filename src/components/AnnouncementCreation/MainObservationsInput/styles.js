import styled from 'styled-components/native';
import { colors } from 'general';

export const Container = styled.View`
  flex: 1;
  padding: 18px 0px 0px 0px;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${colors.ruralGreen};
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 2px 0px;
`;

export const Input = styled.TextInput`
  height: 100%;
  width: 100%;
  margin: 10px 0px 0px 0px;
  padding: 0px 10px 0px 10px;
  background-color: ${colors.lighter};
  font-size: 18px;
  color: ${colors.darkCyan};
  border-radius: 4px;
`;
