import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';


const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#DAEEFC', white: '#1692FC'};

const slides = [
  {
    id: '1',
    image: require('../assets/image/cml01.png'),
    title: 'Welcome to Our',
    subtitle: 'Revolutionary Mobile Car washe Service',
  },
  {
    id: '2',
    image: require('../assets/image/cml02.png'),
    title: 'Discover the Convience',
    subtitle: 'of On-Demand Carwash at your Doorstep',
  },
  {
    id: '3',
    image: require('../assets/image/cml03.png'),
    title: 'Increase Your Value',
    subtitle: 'Our Eco-Friendly Mobile App!',
  }, 
  
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'left'}}>
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
      <Image
        source={item?.image}
        style={{height: '90%', width, resizeMode: 'contain'}} //Image style of the all Screen {height width resizeMode.....}
      />
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
    
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 30, // buttons 
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 50,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                  height:5,   
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('SignupForm')}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color:'white'}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                    
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                   
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color:'#FDFEFF',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: { // title style in the top of ths screen 
    color: '#1692FC',
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
    maxWidth: '70%',
    lineHeight: 30,
    marginLeft:17,
    
  },
  title: {
    color: COLORS.white,
    fontSize: 30,
    marginTop: 27,
    marginBottom: 20,
    marginLeft:17,
    
  },
  image: {
    height: '50',
    width: '50',
    resizeMode: 'contain',
  },
  indicator: {// slide 
    height: 4,
    width: 6,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 4,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 17,
    backgroundColor: '#1691fc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;