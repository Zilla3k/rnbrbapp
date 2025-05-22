import { colors } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    marginTop:20
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  scroll: {
    marginBottom: 20,
  },
  chip: {
    // backgroundColor: colors.gray.light,
    borderWidth: 1,
    borderColor: colors.gray.light,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginRight: 10,
  },
  chipSelected: {
    backgroundColor: colors.gold.base,
  },
  chipText: {
    color: colors.gray.base,
    fontWeight: "bold"
  },
  chipTextSelected: {
    color: colors.white.base,
  },
});