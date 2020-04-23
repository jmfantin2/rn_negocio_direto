import styled from "styled-components/native";
import { general } from "../../../assets/general";

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${general.styles.colors.light};
`;

export const UploadVideo = styled.View`
  background-color: ${general.styles.colors.lighter};
  padding: 80px;
  align-items: center;
  border-width: 3px;
  border-color: ${general.styles.colors.businessGreen};
  border-radius: 3px;
  border-style: dashed;
  margin: 30px 30px 0px 30px;
`;

export const Divider = styled.View`
  padding: 10px 0px 10px 0px;
  background-color: ${general.styles.colors.oceanGreen};
  margin: 30px 0px 0px 0px;
`;

export const Line = styled.View`
  background-color: ${general.styles.colors.oceanGreen};
  padding: 1px 0px 0px 0px;
  margin: 20px 0px 25px 0px;
`;

export const SwitchSection = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 30px 30px 0px 30px;
`;

export const ContainerQtt = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 18px 0px 0px 0px;
  align-items: center;
`;

export const InputQtt = styled.TextInput`
  height: 40px;
  padding: 0px 10px 0px 10px;
  background-color: ${general.styles.colors.lighter};
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: ${general.styles.colors.oceanGreen};
  border-radius: 3px;
`;

export const SelectorBG = styled.View`
  height: 40px;
  flex: 1;
  background-color: ${general.styles.colors.lighter};
  margin: 0px 0px 20px 0px;
`;

export const Description = styled.Text`
  color: ${general.styles.colors.black};
  text-align: center;
  font-size: 16px;
`;

export const Section = styled.View`
  padding: 20px 30px 30px 30px;
`;

export const Title = styled.Text`
  color: ${general.styles.colors.white};
  font-size: 18px;
  font-weight: bold;
  align-self: center;
`;

export const Label = styled.Text`
  color: ${general.styles.colors.oceanGreen};
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 2px 0px;
`;

// RNPickerSelect (not styled-components)
export const pickerStyle = {
  inputIOS: {
    color: "white",
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
  },
  inputAndroid: {
    color: general.styles.colors.black,
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
