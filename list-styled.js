import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProgrammingLanguage = ({ name, experience, logo }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.experience}>Опыт: {experience}</Text>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E0F7FA', 
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  experience: {
    fontSize: 16,
    color: '#666',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default ProgrammingLanguage;
