/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';

import AppEpicGame from './EpicGame/AppEpicGame';
import AppStroeEpic from './StroeGames/AppLayout/AppStroeEpic';
import AppStroeMove from './AppStroeMovie/AppStroeMove';
import MyLanuchGames from './MyLaunchGames/MyLanuchGames';
//import App from './swiper/Appswiper';
import Component from './swiper/Appswiper_1';
import App_props from './swiper/App_props';
import AppProfile from './ProfileStu/AppProfile';

AppRegistry.registerComponent(appName, () => AppProfile);
