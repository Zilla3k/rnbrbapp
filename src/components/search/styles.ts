import { colors } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 60,
    borderRadius: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.gray.light,
    fontSize: 16,
  },
  button: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    paddingHorizontal: 20,
    gap: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});