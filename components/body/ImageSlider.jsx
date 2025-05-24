import { slides } from '@/content/data';
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

const { SCREEN_WIDTH, SCREEN_HEIGHT } = Dimensions.get('window');


const ImageSlider = () => {
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
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const handleSlideChange = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    if (slide !== activeSlide) {
      setActiveSlide(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleSlideChange}
        style={styles.scrollView}
      >
        {slides?.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.description}</Text>
            </View>
            <Image source={slide.image} style={styles.image} resizeMode="contain" />
          </View>
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationDot,
              {
                backgroundColor: index === activeSlide ? '#fff' : 'rgba(255,255,255,0.2)',
                transform: [{ scale: index === activeSlide ? 1.2 : 1 }],
              },
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
  container: {
    height: SCREEN_HEIGHT / 4,
    // height: 160, // Fixed height
    borderRadius: 15,
    backgroundColor: '#1E1E1E',
  },
  scrollView: {
    flexGrow: 0, // Prevent stretching
  },
  slide: {
    width: SCREEN_WIDTH, 
    height: SCREEN_HEIGHT / 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    overflow: 'hidden'
  },
  textContainer: {
    width: '50%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#ccc',
  },
  image: {
    width: '50%',
    height: '80%', 
    resizeMode: 'contain',
    borderRadius: 10,
    alignSelf: 'center',
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
});


export default ImageSlider;
