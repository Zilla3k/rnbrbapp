import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../styles/theme";

export const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 60,
    borderRadius: 8,
    backgroundColor: colors.gold.base,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  buttonDisabled: {
    backgroundColor: colors.gray.light,
  },
  text: {
    color: colors.white.base,
    fontSize: 18,
    fontFamily: fontFamily.bold
  },
  textDisabled: {
    color: colors.gray.dark, 
  },
});