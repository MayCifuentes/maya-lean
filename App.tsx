import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppScreen from './screens/AppScreen';
import Button1Screen from './screens/Button1Screen';
import Button2Screen from './screens/Button2Screen';
import vocales from './screens/vocales';
import AbecedarioScreen from './screens/AbecedarioScreen';
import numeros from './screens/numeros';
import qechi from './screens/lenguasMayas/qechi';
import testqechi from './screens/lenguasMayas/testquechi';
import kiche from './screens/lenguasMayas/kiche';
import testkiche from './screens/lenguasMayas/testkiche';
import mam from './screens/lenguasMayas/mam';
import testmam from './screens/lenguasMayas/testmam';
import poqomchi from './screens/lenguasMayas/poqomchi';
import testpoqomchi from './screens/lenguasMayas/testpoqomchi';
import kaqchiquel from './screens/lenguasMayas/kaqchiquel';
import testkaqchiquel from './screens/lenguasMayas/testkaqchiquel';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ResultadosScreen from './screens/Resultados';
const Stack = createStackNavigator();

export default function App() {
  return (
    // Contenedor de navegación principal
    <NavigationContainer>
      <Stack.Navigator>
        {/* Pantalla de inicio de la aplicación */}
        <Stack.Screen name="App" component={AppScreen} options={{ title: 'MayaLearn' }} />
        <Stack.Screen name="Inicio" component={WelcomeScreen} options={{ title: 'Inicio Usuario' }} />
        <Stack.Screen name="Resultados" component={ResultadosScreen} options={{ title: 'Resultados' }} />
        <Stack.Screen name="Registro" component={RegisterScreen} options={{ title: 'Registrate' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Inicia Sesión' }} />

        {/* Pantalla de botón 1 */}
        <Stack.Screen name="Button1Screen" component={Button1Screen} options={{ title: 'Aprende a leer' }} />
        {/* Pantalla de botón 2 */}
        <Stack.Screen name="Button2Screen" component={Button2Screen} options={{ title: 'Aprende lenguas Mayas' }} />
        {/* Pantalla del abecedario */}
        <Stack.Screen name="Abecedario" component={AbecedarioScreen} />
        {/* Pantalla de las vocales */}
        <Stack.Screen name="Vocales" component={vocales} />
        {/* Pantalla de números */}
        <Stack.Screen name="numeros" component={numeros} />

        {/* Pantalla para aprender Q'eqchi' */}
        <Stack.Screen name="qechi" component={qechi} options={{ title: "Aprende Q'eqchi'" }} />
        <Stack.Screen name="testqechi" component={testqechi} options={{ title: "Prueba Q'eqchi'" }} />
        {/* Pantalla para aprender k'iche' */}
        <Stack.Screen name="kiche" component={kiche} options={{ title: "Aprende k'iche'" }} />
        <Stack.Screen name="testkiche" component={testkiche} options={{ title: "Prueba k'iche'" }} />
        {/* Pantalla para aprender Mam */}
        <Stack.Screen name="mam" component={mam} options={{ title: 'Aprende Mam' }} />
        <Stack.Screen name="testmam" component={testmam} options={{ title: 'Prueba Mam' }} />
        {/* Pantalla para aprender Poqomchi' */}
        <Stack.Screen name="poqomchi" component={poqomchi} options={{ title: "Aprende Poqomchi'" }} />
        <Stack.Screen name="testpoqomchi" component={testpoqomchi} options={{ title: "Prueba Poqomchi'" }} />
        {/* Pantalla para aprender Kaqchiquel' */}
        <Stack.Screen name="kaqchiquel" component={kaqchiquel} options={{ title: "Aprende Kaqchiquel'" }} />
        <Stack.Screen name="testkaqchiquel" component={testkaqchiquel} options={{ title: "Prueba Kaqchiquel'" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
