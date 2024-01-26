import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Video, ResizeMode } from 'expo-av';


const { height } = Dimensions.get("window");

export function SplashScreen() {
  const navigation = useNavigation();
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldNavigate(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldNavigate) {
      navigation.navigate("Home");
    }
  }, [shouldNavigate, navigation]);

  return (
      <Video
        source={require("../../../assets/Alo.mp4")}
        muted={true}
        repeat={true}
        shouldPlay={true}
        resizeMode={"cover"}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
        style={styles.backgroundVideo}
      />
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
  height: height,
  position: "absolute",
  top: 0,
  left: 0,
  alignItems: "stretch",
  bottom: 0,
  right: 0
  }
  })
