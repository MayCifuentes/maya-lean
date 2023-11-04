import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const ResultadosScreen = ({ route }) => {
  const { id } = route.params;
  const idUsuario = id;
  const [resultados, setResultados] = useState([]);
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    // Realiza una solicitud GET al endpoint del servidor para obtener los resultados
    fetch(`http://190.151.128.78:3000/api/resultados/${idUsuario}`)
      .then((response) => response.json())
      .then((data) => {
        setResultados(data);
      })
      .catch((error) => {
        console.error('Error al obtener los resultados:', error);
      });
  }, [idUsuario]);

  // Agrupa los resultados por idioma y calcula el promedio de puntuación para cada idioma
  const calcularPromedioPorIdioma = () => {
    const promedios = {};
    resultados.forEach((resultado) => {
      const idioma = resultado.nombre_idioma;
      const puntuacion = resultado.puntuacion;
      if (!promedios[idioma]) {
        promedios[idioma] = { total: 0, count: 0 };
      }
      promedios[idioma].total += puntuacion;
      promedios[idioma].count++;
    });

    const promediosArray = [];
    for (const idioma in promedios) {
      const promedio = promedios[idioma].total / promedios[idioma].count;
      promediosArray.push({ idioma, promedio });
    }

    return promediosArray;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resultados de tus pruebas</Text>

      {/* Gráfico de barras con promedio por idioma */}
      <View style={styles.graficoContainer}>
        {calcularPromedioPorIdioma().map((item) => (
          <View key={item.idioma} style={styles.barraContainer}>
            <Text style={styles.barraLabel}>{item.idioma}</Text>
            <View style={[styles.barra, { width: (item.promedio / 10) * 200 }]} />
            <Text style={styles.barraValor}>{item.promedio.toFixed(2)}</Text>
          </View>
        ))}
      </View>

      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultadoItem}>
            <Text style={styles.idioma}>{item.nombre_idioma}</Text>
            <Text style={styles.puntuacion}>Puntuación: {item.puntuacion}</Text>
            <Text style={styles.fecha}>Fecha: {item.fecha}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultadoItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  idioma: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  puntuacion: {
    fontSize: 16,
  },
  fecha: {
    fontSize: 14,
    color: '#888',
  },
  graficoContainer: {
    marginBottom: 20,
  },
  barraContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  barraLabel: {
    width: 100,
  },
  barra: {
    height: 10,
    backgroundColor: 'blue',
  },
  barraValor: {
    marginLeft: 10,
  },
});

export default ResultadosScreen;
