import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import programmingLanguages from './languages-list'; 
import ProgrammingLanguage from './list-styled';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={programmingLanguages}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <ProgrammingLanguage
            name={item.name}
            experience={item.experience}
            logo={item.logo}
          />
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3E0',
    padding: 10,
  },
});

export default App;

