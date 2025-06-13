import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.text}>© 2024 CUSKIN Việt Nam</Text>
    {/* Thông tin liên hệ hoặc link sẽ được bổ sung sau */}
  </View>
);

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    alignItems: 'center',
  },
  text: {
    color: colors.background,
    fontSize: 14,
  },
});

export default Footer;
