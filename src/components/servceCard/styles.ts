import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    width: '48%',
    shadowColor: colors.gray.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: .15,
    shadowRadius: 4,
  },
  card: {
    backgroundColor: colors.gray.base,
    borderColor: colors.gray.base,
    overflow: 'hidden',
    marginBottom: 12,
    borderRadius: 5,
  },
  image: {
    height: 120,
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    padding: 8,
    color: colors.white.base
  },
  price: {
    fontSize: 14,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});
