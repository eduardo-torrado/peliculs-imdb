import React from 'react';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Busqueda from './src/views/busqueda/Busqueda';
import Home from './src/views/Home';
import Nav from './src/components/nav';
import Peliculas from './src/views/VistaPeliculas/Vspeliculas';
import Lista from './src/views/ListaSeguimiento';
import Login from './src/views/Login';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen
          name="Buscar"
          component={Busqueda}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Peliculas"
          component={Peliculas}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
      <NavWrapper />
    </NavigationContainer>
  );
}

const NavWrapper: React.FC = () => {
  const state = useNavigationState(state => state);

  if (!state || !state.routes) {
    return null;
  }

  const currentRoute = state.routes[state.index].name;

  if (currentRoute === 'Login') {
    return null;
  }

  return <Nav />;
};

export default App;