import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Button2Screen = ({route}) => {
  const [buttonsEnabled, setButtonsEnabled] = useState(false);
  const navigation = useNavigation();
  const { id } = route.params;

  const handleNavigation = (routeName) => {
    navigation.navigate(routeName, { id: id, testRoute: `test${routeName}` });
  };

  const languageButtons = [
    { label: "Q'eqchi'", route: 'qechi' },
    { label: "K'iche'", route: 'kiche' },
    { label: 'Mam', route: 'mam' },
    { label: "Poqomchi'", route: 'poqomchi' },
    { label: 'Kaqchikel', route: 'kaqchiquel' },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.headerText, { fontSize: windowWidth > 600 ? 36 : 24 }]}>Selecciona el idioma que deseas aprender</Text>
      <View style={styles.languageButtonsContainer}>
        {languageButtons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.languageButton, styles.enabledButton]}
            onPress={() => handleNavigation(button.route)}
          >
            <Text style={[styles.languageButtonText, { fontSize: windowWidth > 600 ? 28 : 18 }]}>{button.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageButtonsContainer: {
    marginTop: windowWidth > 600 ? 80 : 40, // Aumenta el margen superior para tablets
  },
  headerText: {
    fontSize: windowWidth > 600 ? 36 : 24, // Aumenta el tamaño de fuente para tablets
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: windowWidth > 600 ? 40 : 20, // Aumenta el margen inferior para tablets
    color: '#333',
  },
  languageButton: {
    backgroundColor: '#0070BA',
    borderRadius: windowWidth > 600 ? 50 : 25, // Aumenta el radio de borde para tablets
    paddingVertical: windowWidth > 600 ? 20 : 15, // Aumenta el espacio vertical para tablets
    paddingHorizontal: windowWidth > 600 ? 80 : 40, // Aumenta el espacio horizontal para tablets
    marginVertical: windowWidth > 600 ? 20 : 10, // Aumenta el espacio vertical entre botones para tablets
    elevation: 3,
  },
  enabledButton: {
    opacity: 1,
  },
  languageButtonText: {
    color: 'white',
    fontSize: windowWidth > 600 ? 28 : 18, // Aumenta el tamaño de fuente para tablets
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button2Screen;
