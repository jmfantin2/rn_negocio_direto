// dumb component => styled right away!

import styled from "styled-components/native";
import { general } from "../../../../../assets/general";

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${general.styles.colors.light};
  padding: 30px;
  justify-content: space-between;
`;

export default Container;
