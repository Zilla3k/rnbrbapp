import { CategoryChips } from '@/components/category';
 
import { SearchButton } from '@/components/search';
 
import { ServiceCard } from '@/components/servceCard';

import React, { useState } from 'react';
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  View
} from 'react-native';

const HomeScreen = () => {
  const categories = ['Tudo', 'Barba', 'Cabelo', 'Bigode', 'Luzes'];
  const [selectedCategory, setSelectedCategory] = useState('Tudo');

  const [search, setSearch] =  useState('')

  const services = [
    { title: 'Totem', price: 'R$240', image: require('@/assets/totem.png'), category: 'Barba'},
    { title: 'Totem', price: 'R$240', image: require('@/assets/totem.png'), category: 'Barba'},
    { title: 'Totem', price: 'R$240', image: require('@/assets/totem.png'), category: 'Barba'},
    { title: 'Totem', price: 'R$280', image: require('@/assets/totem.png'), category: 'Cabelo'},
    { title: 'Totem', price: 'R$10', image: require('@/assets/totem.png'), category: 'Bigode'},
    { title: 'Totem', price: 'R$10', image: require('@/assets/totem.png'), category: 'Bigode'},
  ];

  const filteredServices = selectedCategory === 'Tudo'
        ? services
        : services.filter((service) => service.category === selectedCategory);

  const aoPressionar = () => {
    setTimeout(() => {
      Keyboard.dismiss();
    }, .01);
    setSearch('');
    console.log(search);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo, Henrique!</Text>
      
      <SearchButton
        placeholder='Buscar Barbearias'
        iconName='search'
        value={search}
        onChangeText={setSearch}
        onPress={aoPressionar}
      />

      <CategoryChips
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        category={services.map(i => i.category[0])}
      />

      <FlatList
        data={filteredServices}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ServiceCard
            title={item.title}
            price={item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    paddingBottom: 20,
  },
  gridRow: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
