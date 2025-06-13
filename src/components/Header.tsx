import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.logo}>CUSKIN</Text>
    {/* Menu hoặc icon sẽ được bổ sung sau */}
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 2,
  },
});

export default Header;
