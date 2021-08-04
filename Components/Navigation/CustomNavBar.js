import React, { useState } from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute, useNavigationState } from '@react-navigation/native';

function CustomNavBar({ navigation, previous }) {
  const [visible, setVisible] = useState<boolean>(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const navState = useNavigationState(state => state);

  return (
    <>
      <Appbar.Header style={styles.appBar}>
        {previous ? <Appbar.BackAction onPress={ navigation.goBack }/> : null}
        <Appbar.Content title={useRoute().name.replace(/([A-Z])/g, ' $1').trim()} />
        {(
          <Menu
            visible={ visible }
            onDismiss={ closeMenu }
            anchor={
              <Appbar.Action icon="menu" color="white" onPress={ openMenu } />
            }>
            <Menu.Item onPress={() => navigation.navigate('SignIn')} title="SignIn" />
            <Menu.Item onPress={() => navigation.navigate('Home')} title="Home" />
          </Menu>
        )} 
      </Appbar.Header>
    </>
  );
}

export default CustomNavBar;