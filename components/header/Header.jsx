// // import { useDrawer } from "@/context/DrawerContext";


// import { useDrawer } from "@/context/DrawerContext";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { useRouter } from "expo-router";
// import React from "react";
// import {
//   Dimensions,
//   Platform,
//   Pressable,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   View
// } from "react-native";
// import Heading from "../body/Heading";
// import AvatarWithMenu from "./AvatarWithMenu";

// const SCREEN_WIDTH = Dimensions.get("window").width;
// StatusBar.setHidden(true, "none");

// function Header() {
//   const { openDrawer } = useDrawer();
//   const router = useRouter();

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.headerWrapper}>
//         <View style={styles.header}>
//           <Pressable onPress={openDrawer}>
//             <MaterialIcons name="menu" size={24} color="#333" />
//           </Pressable>

//           <Heading route={router.name} />

//           <AvatarWithMenu />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     backgroundColor: "#c4def6",
//   },
//   headerWrapper: {
//     // paddingHorizontal: 10,
//     // marginVertical: 10,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     borderRadius: 10,
//     paddingHorizontal: 16,
//     // height: 45,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#1a1a1a",
//   },
// });

// export default Header;


import { useDrawer } from "@/context/DrawerContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    Platform,
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View
} from "react-native";
import Heading from "../body/Heading";
import AvatarWithMenu from "./AvatarWithMenu";

const SCREEN_WIDTH = Dimensions.get("window").width;
StatusBar.setHidden(true, "none");

function Header() {
  const { openDrawer } = useDrawer();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <Pressable onPress={openDrawer}>
            <MaterialIcons name="menu" size={24} color="#333" />
          </Pressable>

          <Heading route={router.name} />

          <AvatarWithMenu />
        </View>
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#c4def6",
  },
  headerWrapper: {
    // paddingHorizontal: 10,
    // marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingHorizontal: 16,
    // height: 45,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
});

export default Header;
