import * as React from 'react';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Routes from './src/navigation/Routes';
import useLinking from './src/navigation/useLinking';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
          'ubuntu-medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
          'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
          'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
          'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
          'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'open-sans-semibold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
          'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
          'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
          'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
          'icons-tab': require('./assets/fonts/icomoon.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Routes containerRef={containerRef} initialNavigationState={initialNavigationState}/>
    );
  }
}
