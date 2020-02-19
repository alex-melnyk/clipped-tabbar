import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { TabBarAdvancedButton } from '../components';
import { EmptyScreen } from '../screens';
import { IS_IPHONE_X } from '../utils';

type Props = {
  barColor: string;
};

export const TabBar: React.FC<Props> = ({ barColor }) => {
  const BottomBar = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomBar.Navigator
        tabBarOptions={{
          showIcon: true,
          style: styles.navigator,
          tabStyle: [styles.navigatorTab, {
            backgroundColor: barColor
          }]
        }}
        tabBar={(props) => (
          <View style={styles.navigatorContainer}>
            {IS_IPHONE_X && (
              <View style={[styles.xFillLine, {
                backgroundColor: barColor
              }]}/>
            )}
            <BottomTabBar
              {...props}
            />
          </View>
        )}
      >
        <BottomBar.Screen
          name="Home"
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name="home"
                size={24}
                color={color}
              />
            )
          }}
        />
        <BottomBar.Screen
          name="Profile"
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name="user"
                size={24}
                color={color}
              />
            )
          }}
        />
        <BottomBar.Screen
          name="Rocket"
          component={EmptyScreen}
          options={{
            tabBarButton: (props) => (
              <TabBarAdvancedButton
                bgColor={barColor}
                {...props}
              />
            )
          }}
        />
        <BottomBar.Screen
          name="Messages"
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name="wechat"
                size={24}
                color={color}
              />
            )
          }}
        />
        <BottomBar.Screen
          name="Settings"
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name="gear"
                size={24}
                color={color}
              />
            )
          }}
        />
      </BottomBar.Navigator>
    </NavigationContainer>
  );
};

const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    ...shadowStyle,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30
  },
  navigatorTab: {}
});
