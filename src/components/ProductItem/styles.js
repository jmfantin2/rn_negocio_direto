import styled from 'styled-components/native'
import {general} from '../../../assets/general'

export const Container = styled.View`
  flex: 1;
  background-color: ${general.styles.colors.white};
  elevation: 3;
  flex-direction: row;
  border-radius: 3px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  height: 50px;
  width: 70px;
  border-radius: 4px
  align-self: center;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const ProductName = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;
