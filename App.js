import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigator from './src/navigation/RootNavigator';
import store, {persistor} from './src/store';
import SplashScreen from 'react-native-splash-screen';
import LoadingScreen from './src/screens/LoadingScreen/LoadingScreen';

import {Provider as PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {StatusBar} from 'react-native';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <StatusBar style="light" backgroundColor="#ff3252" />
          <RootNavigator />
          <Toast />
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
};
export default App;
