// components/ServiceCard.tsx
import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
  title: string;
  price: string;
  image: ImageSourcePropType;
}

export function ServiceCard({ title, price, image } : Props){
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};
