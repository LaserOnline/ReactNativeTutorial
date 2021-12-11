/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import AppEpicGame from './EpicGame/AppEpicGame';
import AppStroeEpic from './StroeGames/AppLayout/AppStroeEpic';
import AppStroeMove from './AppStroeMovie/AppStroeMove';

AppRegistry.registerComponent(appName, () => AppStroeMove);
