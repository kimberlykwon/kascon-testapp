// Import necessary items
import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry, {sliderWidth, itemWidth} from './SlideEntry';

// Define constants
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 0;

const HEADINGS = [
  'Opening Speaker',
  'Korean Americans in Journalism',
  'Korean Americans in Entrepreneurship',
  'Korean Americans in Fashion',
  'Korean Americans in Law',
  'Korean Americans in Academia',
  'Korean American Women',
  'Closing Speaker'
];

const colors = {
  black: '#1a1917',
  gray: '#888888'
};

const SPEAKERS = [
  // opening
  [
    {
      illustration: require('./images/Jin_Ha.jpg')
    }
  ],
  // journalism
  [
    {
      illustration: require('./images/Katie_Kim.jpg')
    },
    {
      illustration: require('./images/Nydia_Han.jpg')
    }
  ],
  // entrepreneurship
  [
    {
      illustration: require('./images/Mike_Kim_and_Theo_Lee.jpg')
    }
  ],
  // fashion
  [
    {
      illustration: require('./images/Dae_Lim.jpg')
    },
    {
      illustration: require('./images/Peter_Kim.jpg')
    },
    {
      illustration: require('./images/Lydia_Forstmann.jpg')
    }
  ],
  // law
  [
    {
      illustration: require('./images/Eunkyung_Kim_Shin.jpg')
    },
    {
      illustration: require('./images/Eunkyung_Kim_Shin.jpg')
    }
  ],
  // academia
  [
    {
      illustration: require('./images/Eunkyung_Kim_Shin.jpg')
    }
  ],
  // women
  [
    {
      illustration: require('./images/Susan_Jung_Townsend.jpg')
    },
    {
      illustration: require('./images/Crystal_Kim.jpg')
    }
  ],
  // closing
  [
    {
      illustration: require('./images/Jin_Ha.jpg')
    }
  ]
];


// Main app functionality
export default class example extends Component {
    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} />;
    }

    // View of each slide space for one speaker
    oneSpeaker (number, title) {
      const { slider1ActiveSlide } = this.state;

      return (
          <View style={styles.exampleContainer}>
              <Text style={styles.title}>{`${HEADINGS[number]}`}</Text>
              <Text style={styles.subtitle}>{title}</Text>
              <Carousel
                ref={c => this._slider1Ref = c}
                data={SPEAKERS[number]}
                renderItem = {this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                firstItem={SLIDER_1_FIRST_ITEM}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                containerCustomStyle={styles.slider}
                loop={false}
                autoplay={false}
                onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
              />
          </View>
      );
    }

    // View of each slide space for multiple speakers
    multSpeakers (number, title) {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>{`${HEADINGS[number]}`}</Text>
                <Text style={styles.subtitle}>{title}</Text>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={SPEAKERS[number]}
                  renderItem = {this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  containerCustomStyle={styles.slider}
                  loop={false}
                  autoplay={false}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={SPEAKERS[number].length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(101, 78, 163, 0.92)'} // pantone purple
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }

    // Construct all speakers and show on screen
    render () {
        const example0 = this.oneSpeaker(0, 'blah blah blah ');
        const example1 = this.multSpeakers(1, 'blah blah blah ');
        const example2 = this.multSpeakers(2, 'DefaultAutoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        const example3 = this.multSpeakers(3, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        const example4 = this.multSpeakers(4, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        const example5 = this.multSpeakers(5, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        const example6 = this.multSpeakers(6, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        const example7 = this.oneSpeaker(7, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}/>
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}>
                        { example0 }
                        { example1 }
                        { example2 }
                        { example3 }
                        { example4 }
                        { example5 }
                        { example6 }
                        { example7 }
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

// Stylesheet
const styles = StyleSheet.create({
  safeArea: {
      flex: 1,
  },
  container: {
      flex: 1,
      backgroundColor: '#FFFFFF'
  },
  scrollview: {
      flex: 1
  },
  exampleContainer: {
      paddingVertical: 30
  },
  title: {
      paddingHorizontal: 30,
      backgroundColor: 'transparent',
      //color: 'rgba(255, 255, 255, 0.9)',
      color: 'black',
      fontSize: 20,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      textAlign: 'center'
  },
  subtitle: {
      marginTop: 5,
      paddingHorizontal: 30,
      backgroundColor: 'transparent',
      color: colors.gray,
      fontSize: 13,
     // fontStyle: 'italic',
      textAlign: 'center'
  },
  slider: {
      marginTop: 15,
      overflow: 'visible' // for custom animations
  },
  paginationContainer: {
      paddingVertical: 8
  },
  paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 8
  }
});
