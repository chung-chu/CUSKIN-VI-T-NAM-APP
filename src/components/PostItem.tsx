import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../constants/colors';

type Props = {
  title: string;
  excerpt: string;
  image?: string;
  onPress?: () => void;
};

const PostItem = ({ title, excerpt, image, onPress }: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {image && <Image source={{ uri: image }} style={styles.image} />}
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.excerpt} numberOfLines={2}>{excerpt}</Text>
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
  title: { fontWeight: 'bold', color: colors.text, fontSize: 16 },
  excerpt: { color: colors.gray, marginTop: 4 },
});

export default PostItem; 