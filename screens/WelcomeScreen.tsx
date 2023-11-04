import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const WelcomeScreen = ({ route, navigation }) => {
  const { name, profileImage, id } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          title="Cerrar sesión"
          onPress={() => {
            navigation.navigate('Login')
          }}
          color="#FF5733" // Cambia el color del botón
        />
      </View>
      <Image source={{ uri: 'https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg' }} style={styles.profileImage} />
      <Text style={styles.title}>¡Bienvenido, {name}!</Text>
      <Text style={styles.subtitle}>Has iniciado sesión exitosamente.</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ver mis notas"
          onPress={() => {
            // Agrega la lógica para redirigir a la pantalla de avances
            navigation.navigate('Resultados', { id: id })
          }}
          color="#3498DB" // Cambia el color del botón
        />
        <Button
          title="Seguir aprendiendo idiomas"
          onPress={() => {
            // Agrega la lógica para redirigir a la pantalla de aprendizaje de idiomas
            navigation.navigate('Button2Screen', { id: id })
          }}
          color="#27AE60" // Cambia el color del botón
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4', // Cambia el color de fondo
  },
  header: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#3498DB', // Cambia el color del borde de la imagen
  },
  title: {
    fontSize: 36, // Aumenta el tamaño del título
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'column', // Alinea los botones en una columna
    justifyContent: 'space-between', // Espacio uniforme entre los botones
    width: '80%',
    marginVertical: 20,
  },
});

export default WelcomeScreen;
