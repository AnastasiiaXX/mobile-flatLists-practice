import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import programmingLanguages from './languages-list'; 
import ProgrammingLanguage from './list-styled';

const App = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [languages, setLanguages] = useState(programmingLanguages);

  const onRefresh = () => {
    setRefreshing(true);
    
    setTimeout(() => {
      setLanguages([...languages]);
      setRefreshing(false);
    }, 2000);
  };

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
        refreshing={refreshing}
        onRefresh={onRefresh}
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
