import { colors } from '@/styles/theme'
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  timeScrollViewTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black.base,
    marginBottom: 8,
  },
    timeScrollView: {
    marginBottom: 20,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeButton: {
    borderWidth: 1,
    borderColor: colors.gray.light,
    borderRadius: 8,
    padding: 8,
    width: '31%',
    alignItems: 'center',
  },
  selectedTimeButton: {
    backgroundColor: colors.gray.base,
  },
  selectedTimeText: {
    color: colors.white.base,
  },
})