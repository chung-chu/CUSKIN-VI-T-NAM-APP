import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import colors from '../constants/colors';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  images: Array<{ src: string }>;
  categories: Array<{ name: string }>;
  attributes: Array<{
    name: string;
    options: string[];
  }>;
}

const { width } = Dimensions.get('window');

const ProductDetailScreen = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const productId = route.params?.productId;

  useEffect(() => {
    if (!productId) return;

    axios.get(`https://vqmm.id.vn/wp-json/wc/v3/products/${productId}`, {
      auth: {
        username: 'ck_0adddcd68dfe5d6e0aba71ab5591942abdb75151',
        password: 'cs_05c9f5281e1b03395b5f7f71b2f7c3cd683c6d98'
      }
    })
    .then(response => {
      setProduct(response.data);
      setLoading(false);
    })
    .catch(error => {
      setLoading(false);
      console.error('Error fetching product:', error);
    });
  }, [productId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Không tìm thấy sản phẩm</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.images[0]?.src }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price} đ</Text>

        {product.categories.length > 0 && (
          <View style={styles.categoriesContainer}>
            {product.categories.map((category, index) => (
              <View key={index} style={styles.categoryTag}>
                <Text style={styles.categoryText}>{category.name}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Mô tả sản phẩm</Text>
        <Text style={styles.description}>{product.description}</Text>

        {product.attributes.length > 0 && (
          <>
            <View style={styles.divider} />
            <Text style={styles.sectionTitle}>Thông số kỹ thuật</Text>
            {product.attributes.map((attr, index) => (
              <View key={index} style={styles.attributeContainer}>
                <Text style={styles.attributeName}>{attr.name}:</Text>
                <Text style={styles.attributeValue}>
                  {attr.options.join(', ')}
                </Text>
              </View>
            ))}
          </>
        )}
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: colors.error,
  },
  imageContainer: {
    width: width,
    height: width,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  categoryTag: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  attributeContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  attributeName: {
    fontSize: 14,
    color: colors.text,
    fontWeight: 'bold',
    width: 120,
  },
  attributeValue: {
    fontSize: 14,
    color: colors.text,
    flex: 1,
  },
  bottomContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  addToCartButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
