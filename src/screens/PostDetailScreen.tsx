import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const PostDetailScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Chi tiết bài viết</Text>
    {/* Thông tin chi tiết bài viết sẽ được bổ sung sau */}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' },
  title: { color: colors.primary, fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});

export default PostDetailScreen;
