import { registerRootComponent } from 'expo';

import App from './App';
import Counter from './Counter'
import Wintro from './Wintro';
// import { counterEvent } from 'react-native/Libraries/Performance/Systrace';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Wintro);
