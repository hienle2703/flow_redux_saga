import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {getDataAction} from '../src/redux/actions';
import {connect} from 'react-redux';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.onGetData();
  }
  render() {
    console.log(this.props.music);
    
    return this.props.music.data===null?(<Text>Loading</Text>):(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.body}>
          <Text>Body</Text>
          <View style={styles.imageContainer}>
            <View style={styles.leftBox}></View>
            <Image
              style={styles.image}
              source={{
                uri:
                 this.props.music.cover
              }}
            />

            <View style={styles.rightBox}></View>
          </View>
          <View style={styles.titleContainer}>
            <Text>TD121: How to Find a Great Truck Driving Job</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.1,
    backgroundColor: '#A17125',
  },
  body: {
    flex: 0.9,
    backgroundColor: 'yellow',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70,
  },
  leftBox: {
    height: 180,
    width: 15,
    backgroundColor: '#D4D4D4',
    marginTop: 20,
  },
  rightBox: {
    height: 180,
    width: 15,
    backgroundColor: '#D4D4D4',
    marginTop: 20,
  },
  image: {
    height: 250,
    width: 250,
  },
  titleContainer: {
    alignSelf: 'center',
    marginTop: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    music: state.musicReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetData: () => {
      dispatch(getDataAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Test);
