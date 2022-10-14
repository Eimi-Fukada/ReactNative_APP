import {RootStackParamList, routeNames} from '../routes/const';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useMemo, useContext} from 'react';
import Home from '../pages/home';
import Mine from '../pages/mine';
import routes from '../routes';
import GlobalContext from '../contexts/global.context';
import images from '../assets/icon-image/images';
import TabBar from '../components/tabBar';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function TabScreen() {
  const context = useContext(GlobalContext);
  const data = [
    {
      key: 'tabHome',
      text: '首页',
      image: images.home,
      imageSelected: images.homeActive,
      url: routeNames.Home,
    },
    {
      key: 'tabUser',
      text: '我的',
      image: images.mine,
      imageSelected: images.mineActive,
      url: routeNames.Mine,
    },
  ];
  const tabsScreens = [
    {
      name: routeNames.Home,
      component: Home,
    },
    {
      name: routeNames.Mine,
      component: Mine,
    },
  ];

  return (
    <Tab.Navigator
      tabBar={({state, navigation}) => (
        <TabBar
          path={state.routeNames[state.index]}
          data={data}
          onChange={tab => {
            navigation.navigate(tab.url);
          }}
        />
      )}>
      {tabsScreens.map(value => (
        <Tab.Screen
          key={value.name}
          name={value.name}
          component={value.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default function StackLayout() {
  const context = useContext(GlobalContext);
  const {data: tabs} = context.tab;

  const [stackScreens] = useMemo(() => {
    const tabUrls = tabs.map(tab => tab.url);
    return [routes.filter(route => tabUrls.indexOf(route.name) === -1)];
  }, [tabs]);

  return (
    <Stack.Navigator
    // initialRouteName={routeNames.Mine as keyof RootStackParamList}
    >
      <Stack.Screen
        name="_tab"
        component={TabScreen}
        options={{
          headerShown: false,
        }}
      />
      {stackScreens.map(value => (
        <Stack.Screen
          key={value.name}
          name={value.name as keyof RootStackParamList}
          component={value.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}
