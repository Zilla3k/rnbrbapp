import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

export const styles = StyleSheet.create({
  input: {
    width: 317,
    height: 60,
    borderRadius: 8,
    padding: 20,
    color: colors.black.base,
    borderWidth: 1,
    borderColor: colors.gray.light,
    marginTop: 20,
    fontSize: 16,
  },
});