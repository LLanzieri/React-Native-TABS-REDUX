/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AppNavigation from './src/StackNavigation/AppNavigation';
import { Provider } from 'react-redux';
import React from 'react';
import Store from './src/Redux/Store/Store';

const App = () => {

  // Es necesario encapsular toda la aplicación con el Provider -> "Proveedor de datos" y pasarle la store para que sepa de donde buscar la información

  return (
    <Provider store={Store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
