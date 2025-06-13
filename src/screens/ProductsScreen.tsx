import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import ProductItem from '../components/ProductItem';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

interface Product {
  id: number;
  name: string;
  price: string;
  images: Array<{ src: string }>;
}

const consumerKey = 'ck_0adddcd68dfe5d6e0aba71ab5591942abdb75151';
const consumerSecret = 'cs_05c9f5281e1b03395b5f7f71b2f7c3cd683c6d98';

const ProductsScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://vqmm.id.vn/wp-json/wc/v3/products', {
      auth: {
        username: consumerKey,
        password: consumerSecret
      }
    })
    .then(response => {
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        setProducts([]);
      }
      setLoading(false);
    })
    .catch(error => {
      setLoading(false);
      Alert.alert('Lỗi', 'Lỗi lấy sản phẩm: ' + error.message);
    });
  }, []);

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetail', { productId: product.id });
  };

  if (loading) return <ActivityIndicator size="large" color={colors.primary} />;

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <ProductItem
          name={item.name}
          price={item.price}
          image={item.images[0]?.src}
          onPress={() => handleProductPress(item)}
        />
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
});

export default ProductsScreen;