import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Animated,
} from "react-native";
import { MaterialCommunityIcons, Entypo, SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';

export default function FabButton() {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [open, setOpen] = useState(1);
  const navigation = useNavigation()

  
  function toggleMenu() {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue: toValue,
      friction: 3,
      useNativeDriver: false,
    }).start();
    setOpen(!open);

    navigation.openDrawer()
    
  }
    

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "180deg"],
        }),
      },
    ],
  };

  // const cameraStyle = {
  //   transform: [
  //     { scale: animation },
  //     {
  //       translateY: animation.interpolate({
  //         inputRange: [0, 1],
  //         outputRange: [0, -60],
  //       }),
  //     },
  //   ],
  // };

  // const likeStyle = {
  //   transform: [
  //     { scale: animation },
  //     {
  //       translateY: animation.interpolate({
  //         inputRange: [0, 1],
  //         outputRange: [0, -120],
  //       }),
  //     },
  //   ],
  // };

  // const menuBookStyle = {
  //   transform: [
  //     { scale: animation },
  //     {
  //       translateY: animation.interpolate({
  //         inputRange: [0, 1],
  //         outputRange: [0, -180],
  //       }),
  //     },
  //   ],
  // };


  // const sportStyle = {
  //   transform: [
  //     { scale: animation },
  //     {
  //       translateY: animation.interpolate({
  //         inputRange: [0, 1],
  //         outputRange: [0, -240],
  //       }),
  //     },
  //   ],
  // };

  // const homeStyle = {
  //   transform: [
  //     { scale: animation },
  //     {
  //       translateY: animation.interpolate({
  //         inputRange: [0, 1],
  //         outputRange: [0, -300],
  //       }),
  //     },
  //   ],
  // };

  return (
    <View style={[styles.container, { bottom: 80, right: 60 }]}>
      {/* <TouchableWithoutFeedback onPress={() => alert('HOME')} >
        <Animated.View style={[styles.button, styles.submenu, homeStyle]}>
          <Ionicons name="home" size={20} color="#fff" />
        </Animated.View>
      </TouchableWithoutFeedback> */}
      {/* 
      <TouchableWithoutFeedback onPress={() => alert('SPORT')} >
        <Animated.View style={[styles.button, styles.submenu, sportStyle]}>
          <MaterialIcons name="sports-martial-arts" size={20} color="#fff" />
        </Animated.View>
      </TouchableWithoutFeedback> */}

      {/* <TouchableWithoutFeedback onPress={() => navigation.jumpTo('Histórico')} >
        <Animated.View style={[styles.button, styles.submenuIcon, menuBookStyle]}>
          <MaterialCommunityIcons name="file-document" size={24} color="#fff" />
          <Text style={styles.textIcon}>Hist.</Text>

        </Animated.View>
      </TouchableWithoutFeedback> */}

      {/* <TouchableWithoutFeedback onPress={() => navigation.jumpTo('Disciplinas do semestre')} >
        <Animated.View style={[styles.button, styles.submenuIcon, likeStyle]}>
          <MaterialCommunityIcons name="notebook" size={20} color="#fff" />
          <Text style={styles.textIcon}>Disc.</Text>

        </Animated.View>
      </TouchableWithoutFeedback> */}

      {/* <TouchableWithoutFeedback onPress={() => navigation.jumpTo('Início')} >
        <Animated.View style={[styles.button, styles.submenuIcon, cameraStyle]}>
          <Entypo name="home" size={20} color="#fff" />
          <Text style={styles.textIcon}>Início</Text>
        </Animated.View>
      </TouchableWithoutFeedback> */}

      {/* --------------------------------------------------------- */}
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <MaterialIcons name="menu" size={24} color="#fff" />
          {/* <Text style={{ color: "#fff" }}>Menu</Text> */}
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgb(178,0,0)",
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
  },
  menu: {
    backgroundColor: "rgb(178,0,0)",
  },
  submenu: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "rgb(178,0,0)",
  },
  submenuIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "rgb(178,0,0)",
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIcon: {
    color: "#fff",
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingBottom: 5
  }
});