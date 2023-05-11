import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>P10 Racing</Text>
      <Text style={{marginBottom: 20}}>Welcome to P10 Racing</Text>
      <ScrollView style={styles.scrolling}>
      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Hello, world!')}
      >
        <Text style={styles.buttonLabel}>Press me!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Hello, world!')}
      >
        <Text style={styles.buttonLabel}>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Hello, world!')}
      >
        <Text style={styles.buttonLabel}>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Hello, world!')}
      >
        <Text style={styles.buttonLabel}>Button 2</Text>
      </TouchableOpacity>
        
        
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
          <Text style={styles.label}>Scroll me plz</Text>
        </ScrollView>
      <StatusBar style="auto" />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  scrolling: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 15,
    borderRadius: 4,
    backgroundColor: '#00747a',
    alignSelf: 'center',
    marginHorizontal: 20,
    marginBottom: 6,
    minWidth: '70%',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    alignSelf: 'center',
    color: 'white',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  
});
