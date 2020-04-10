import styled from 'styled-components/native'
import { general } from '../../../assets/general'

export const Container = styled.View`
  display: flex;
  flex: 1; 
`;

export const Title = styled.Text`
  text-align: left;
  color: ${general.styles.colors.black};
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
`;

export const Input = styled.TextInput`
  background-color: #ffffff;
  border-radius: 3px;
  height: 44px;
  padding: 0px 20px;
  margin: 10px;
`;
