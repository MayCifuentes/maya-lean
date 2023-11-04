import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import styles_component from './component_style';

const styles = styles_component;

const LenguaComponent = ({ data, category, idUser, lengua, lengua_id}) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('frutasVerduras');
  const navigate = useNavigation();
  const [sound, setSound] = useState();
  const [screenOrientation, setScreenOrientation] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height ? 'landscape' : 'portrait'
  );

  const categorias = category;
  const contenidoCategoria = data;

  const handleRedirPress = () => {
    navigate.navigate(lengua, { id_user: idUser, lengua_id: lengua_id });
  };
  

  const playAudio = async (audio: any) => {
    const { sound } = await Audio.Sound.createAsync(audio);
    setSound(sound);
    await sound.playAsync();
  };

  const handleOrientationChange = () => {
    const { width, height } = Dimensions.get('window');
    if (width > height) {
      setScreenOrientation('landscape');
    } else {
      setScreenOrientation('portrait');
    }
  };

  useEffect(() => {
    // Agregar el oyente para el cambio de orientación
    Dimensions.addEventListener('change', handleOrientationChange);
    // Limpia el oyente al desmontar el componente
    return () => {
      Dimensions.addEventListener('change', handleOrientationChange);
    };
  }, []);

  return (
    <View style={screenOrientation === 'portrait' ? styles.container : styles.landscapeContainer}>
      <Text style={styles.header}>Aprende en Diferentes Categorías</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriasContainer}>
          {categorias.map((categoria: any) => (
            <TouchableOpacity
              key={categoria.id}
              style={[
                styles.categoriaButton,
                categoria.id === categoriaSeleccionada && styles.categoriaSeleccionada,
              ]}
              onPress={() => setCategoriaSeleccionada(categoria.id)}
            >
              <Text style={styles.categoriaButtonText}>{categoria.nombre}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <ScrollView style={styles.contenidoContainer}>
        {contenidoCategoria[categoriaSeleccionada].map((item: any, index: any) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.itemInfo}>
              <View style={styles.textContainer}>
                <Text style={styles.itemNombre}>{item.nombre}</Text>
                <Text style={styles.itemTipo}>{item.tipo}</Text>
                <Text style={styles.itemTraduccion}>Traducción: {item.traduccion}</Text>
              </View>
              <TouchableOpacity
                style={styles.audioButton}
                onPress={() => playAudio(item.audio)}
              >
                <FontAwesome name="volume-up" size={32} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.paypalButton}
        onPress={handleRedirPress}
      >
        <Text style={styles.buttonText}>Realizar mi prueba!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LenguaComponent;
