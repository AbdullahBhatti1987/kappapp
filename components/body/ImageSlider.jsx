// // // import { slides } from '@/content/data';
// // // import basicColors from '@/content/globalcss';
// // // import React, { useEffect, useRef, useState } from 'react';
// // // import {
// // //   Dimensions,
// // //   Image,
// // //   ScrollView,
// // //   StyleSheet,
// // //   Text,
// // //   TouchableOpacity,
// // //   View,
// // // } from 'react-native';

// // // const { width: SCREEN_WIDTH } = Dimensions.get('window');

// // // const SLIDER_HEIGHT = 120;

// // // const ImageSlider = () => {
// // //   const [activeSlide, setActiveSlide] = useState(0);
// // //   const scrollViewRef = useRef(null);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       const nextSlide = (activeSlide + 1) % slides.length;
// // //       setActiveSlide(nextSlide);
// // //       scrollViewRef.current?.scrollTo({
// // //         x: nextSlide * SCREEN_WIDTH,
// // //         animated: true,
// // //       });
// // //     }, 5000);
// // //     return () => clearInterval(interval);
// // //   }, [activeSlide]);

// // //   const handleSlideChange = (event) => {
// // //     const slide = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
// // //     if (slide !== activeSlide) {
// // //       setActiveSlide(slide);
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.sliderWrapper}>
// // //       <ScrollView
// // //         ref={scrollViewRef}
// // //         horizontal
// // //         pagingEnabled
// // //         showsHorizontalScrollIndicator={false}
// // //         onMomentumScrollEnd={handleSlideChange}
// // //         style={styles.scrollView}
// // //       >
// // //         {slides?.map((slide) => (
// // //           <View key={slide.id} style={styles.slide}>
// // //             <View style={styles.textContainer}>
// // //               <Text style={styles.title}>{slide.title}</Text>
// // //               <Text style={styles.description}>{slide.description}</Text>
// // //             </View>
// // //             <Image source={slide.image} style={styles.image} />
// // //           </View>
// // //         ))}
// // //       </ScrollView>

// // //       <View style={styles.pagination}>
// // //         {slides.map((_, index) => (
// // //           <TouchableOpacity
// // //             key={index}
// // //             style={[
// // //               styles.paginationDot,
// // //               {
// // //                 backgroundColor: index === activeSlide ? '#fff' : 'rgba(255,255,255,0.4)',
// // //                 transform: [{ scale: index === activeSlide ? 1.3 : 1 }],
// // //               },
// // //             ]}
// // //             onPress={() => {
// // //               setActiveSlide(index);
// // //               scrollViewRef.current?.scrollTo({
// // //                 x: index * SCREEN_WIDTH,
// // //                 animated: true,
// // //               });
// // //             }}
// // //           />
// // //         ))}
// // //       </View>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   sliderWrapper: {
// // //     height: SLIDER_HEIGHT,
// // //     borderRadius: 16,
// // //     overflow: 'hidden',
// // //     backgroundColor: basicColors.black50,
// // //     marginVertical: 5,
// // //     elevation: 1,
// // //     shadowColor: '#000',
// // //     shadowOpacity: 0.15,
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowRadius: 6,
// // //   },
// // //   scrollView: {
// // //     flexGrow: 0,
// // //   },
// // //   slide: {
// // //     width: SCREEN_WIDTH,
// // //     height: SLIDER_HEIGHT,
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     paddingHorizontal: 12,
// // //   },
// // //   textContainer: {
// // //     width: '50%',
// // //     justifyContent: 'center',
// // //     paddingRight: 10,
// // //   },
// // //   title: {
// // //     fontSize: 16,
// // //     fontWeight: '600',
// // //     // color: '#fff',
// // //     color: basicColors.black,
// // //     marginBottom: 4,
// // //   },
// // //   description: {
// // //     fontSize: 13,
// // //       color: basicColors.black,
// // //     // color: '#ccc',
// // //   },
// // //   image: {
// // //     width: '50%',
// // //     height: '85%',
// // //     resizeMode: 'contain',
// // //     borderRadius: 12,
// // //   },
// // //   pagination: {
// // //     position: 'absolute',
// // //     bottom: 10,
// // //     left: 0,
// // //     right: 0,
// // //     flexDirection: 'row',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   paginationDot: {
// // //     width: 8,
// // //     height: 8,
// // //     borderRadius: 4,
// // //     marginHorizontal: 4,
// // //     backgroundColor: 'rgba(255,255,255,0.4)',
// // //   },
// // // });

// // // export default ImageSlider;



// // import React from "react";
// // import { View, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
// // import { slides } from '@/content/data';


// // const { width } = Dimensions.get("window");

// // export default function ImageSlider() {
// //   return (
// //     <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
// //       {slides.map((img, idx) => (
// //         <Image key={idx} source={img.image} style={styles.image} />
// //       ))}
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   image: {
// //     width,
// //     height: 100,
// //     resizeMode: "contain",
// //   },
// // });


// import React, { useEffect, useRef, useState } from 'react';
// import {
//   Dimensions,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { slides } from '@/content/data';

// const { width: SCREEN_WIDTH } = Dimensions.get('window');
// const SLIDER_HEIGHT = 150; // Increased height for better visibility

// const ImageSlider = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const scrollViewRef = useRef(null);

//   // Auto-scroll functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextSlide = (activeSlide + 1) % slides.length;
//       setActiveSlide(nextSlide);
//       scrollViewRef.current?.scrollTo({
//         x: nextSlide * SCREEN_WIDTH,
//         animated: true,
//       });
//     }, 3000); // Changed to 3 seconds for better UX
//     return () => clearInterval(interval);
//   }, [activeSlide]);

//   const handleSlideChange = (event) => {
//     const slide = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
//     if (slide !== activeSlide) {
//       setActiveSlide(slide);
//     }
//   };

//   return (
//     <View style={styles.sliderWrapper}>
//       <ScrollView
//         ref={scrollViewRef}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onMomentumScrollEnd={handleSlideChange}
//       >
//         {slides.map((slide) => (
//           <View key={slide.id} style={styles.slide}>
//             <Image 
//               source={typeof slide.image === 'string' ? { uri: slide.image } : slide.image}
//               style={styles.image}
//             />
//             <View style={styles.overlay}>
//               <View style={styles.textContainer}>
//                 {slide.title && (
//                   <Text style={styles.title} numberOfLines={2}>
//                     {slide.title}
//                   </Text>
//                 )}
//                 {slide.description && (
//                   <Text style={styles.description} numberOfLines={3}>
//                     {slide.description}
//                   </Text>
//                 )}
//               </View>
//             </View>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Pagination Dots */}
//       <View style={styles.pagination}>
//         {slides.map((_, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.paginationDot,
//               {
//                 backgroundColor: index === activeSlide ? '#fff' : 'rgba(255,255,255,0.4)',
//               },
//             ]}
//             onPress={() => {
//               setActiveSlide(index);
//               scrollViewRef.current?.scrollTo({
//                 x: index * SCREEN_WIDTH,
//                 animated: true,
//               });
//             }}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   sliderWrapper: {
//     height: SLIDER_HEIGHT,
//     borderRadius: 12,
//     overflow: 'hidden',
//     marginVertical: 10,
//     position: 'relative',
//   },
//   slide: {
//     width: SCREEN_WIDTH,
//     height: SLIDER_HEIGHT,
//     position: 'relative',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: "contain",
//     justifyContent: 'flex-end'
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0,0,0,0.3)',
//     padding: 20,
//     justifyContent: 'flex-end',
//   },
//   textContainer: {
//     maxWidth: '80%',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 8,
//     textShadowColor: 'rgba(0,0,0,0.5)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   description: {
//     fontSize: 14,
//     color: '#fff',
//     textShadowColor: 'rgba(0,0,0,0.5)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   pagination: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   paginationDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 4,
//   },
// });

// export default ImageSlider;


import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SLIDER_HEIGHT = 120;

const ImageSlider = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (activeSlide + 1) % slides.length;
      setActiveSlide(nextSlide);
      scrollViewRef.current?.scrollTo({
        x: nextSlide * SCREEN_WIDTH,
        animated: true,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const handleSlideChange = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    setActiveSlide(slide);
  };

  return (
    <View style={styles.sliderWrapper}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleSlideChange}
      >
        {slides.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <View style={styles.contentContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={2}>{slide.title}</Text>
                <Text style={styles.description} numberOfLines={3}>{slide.description}</Text>
              </View>
              <Image 
                source={typeof slide.image === 'string' ? { uri: slide.image } : slide.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationDot,
              { backgroundColor: index === activeSlide ? '#fff' : 'rgba(255,255,255,0.4)' }
            ]}
            onPress={() => {
              setActiveSlide(index);
              scrollViewRef.current?.scrollTo({
                x: index * SCREEN_WIDTH,
                animated: true,
              });
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderWrapper: {
    height: SLIDER_HEIGHT,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5', // Optional background
  },
  slide: {
    width: SCREEN_WIDTH,
    height: SLIDER_HEIGHT,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 20,
  },
  image: {
    width: SCREEN_WIDTH * 0.5, // Takes 50% of screen width
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'flex-end', // Aligns image to right
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  pagination: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default ImageSlider;