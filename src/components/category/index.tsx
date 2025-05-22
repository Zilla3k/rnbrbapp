import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
  category: any;
}

export function CategoryChips({ categories, selected, onSelect, category }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {categories.map((category) => {
          const isSelected = category === selected;
          return (
            <TouchableOpacity
              key={category}
              onPress={() => onSelect(category)}
              style={[
                styles.chip,
                isSelected && styles.chipSelected,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  isSelected && styles.chipTextSelected,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

