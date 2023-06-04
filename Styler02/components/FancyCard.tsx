import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1653495484245-995e89467475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City - Jaipur</Text>
          <Text style={styles.cardDiscription}>
            The Hawa Mahal is a Palace in the city of Jaipur, India. Build from
            red and pink sandstone, it is on the edge of the City Palace.
          </Text>
          <Text style={styles.cardFooter}>12 Mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  cardContainer: {},
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#FFFFFF',
  },
  card: {
    width: 340,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 1,
    textAlign: 'right',
    position: 'relative',
    top: -28,
  },
  cardDiscription: {
    color: '#242B2E',
    fontSize: 13,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
    textAlign: 'right',
  },
});
