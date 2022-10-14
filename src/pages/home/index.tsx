import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {FC, memo} from 'react';
import {ViewModal} from './viewModel';
import * as ss from './styles';
import {toast} from '../../utils/toast';
import {useNavigation} from '@react-navigation/core';
import {routeNames} from '../../routes/const';
import {HomeProps} from './const';
import Navigation from '~/components/navigation';
import {BlurView} from '@react-native-community/blur';
import images from '../../assets/icon-image/images';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create(ss);

const Component: FC<HomeProps> = () => {
  const {} = ViewModal();
  const navigation = useNavigation() as any;

  return (
    <>
      <Navigation title="首页" />
      <View style={styles.page}>
        <TouchableOpacity
          onPress={() => toast.showToast('success')}
          style={styles.toast}>
          <Text style={{color: '#fff'}}>Press here to show toast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routeNames.Template)}
          style={styles.toast}>
          <Text style={{color: '#fff'}}>
            Press here to navigate to other page
          </Text>
        </TouchableOpacity>
        <View style={{marginTop: 20}}>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={350} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Swiper
            style={{flexDirection: 'row'}}
            showsButtons={true}
            autoplay
            dotColor="rgba(0,0,0,0)"
            activeDotColor="rgba(0,0,0,0)">
            <Image
              source={images.newgift}
              style={{
                height: 220,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <Image
              source={images.newgift}
              style={{
                height: 220,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </Swiper>
        </View>
      </View>
    </>
  );
};

const Home = memo(Component);
export default Home;
