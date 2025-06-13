import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../constants/colors';

type Props = {
  name: string;
  price: string;
  image?: string;
  onPress?: () => void;
};

const ProductItem = ({ name, price, image, onPress }: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {image && <Image source={{ uri: image }} style={styles.image} />}
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price} đ</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  info: { flex: 1 },
  name: { fontWeight: 'bold', color: colors.text, fontSize: 16 },
  price: { color: colors.primary, marginTop: 4 },
});

export default ProductItem; 