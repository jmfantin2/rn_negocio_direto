import styled from "styled-components/native";
import { colors } from "general";

export const Label = styled.Text`
  color: ${colors.oceanGreen};
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 2px 0px;
`;

export const SelectBG = styled.View`
  height: 40px;
  background-color: ${colors.lighter};
`;

export const pickerStyle = {
  inputIOS: {
    color: "white",
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
  },
  inputAndroid: {
    color: colors.black,
    fontSize: 18,
    marginLeft: 10,
    marginTop: 5,
  },
  placeholderColor: "white",
  underline: { borderTopWidth: 0 },
  icon: {
    position: "absolute",
    backgroundColor: "transparent",
    borderTopWidth: 5,
    borderTopColor: "#00000099",
    borderRightWidth: 5,
    borderRightColor: "transparent",
    borderLeftWidth: 5,
    borderLeftColor: "transparent",
    width: 0,
    height: 0,
    top: 20,
    right: 15,
  },
};
