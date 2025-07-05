import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: width,
    height: height * 0.65, // Map takes up 65% of screen height
  },
  callout: {
    width: 200,
    padding: 10,
  },
  spotsList: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    maxHeight: height * 0.3, // List takes up 30% of screen height
  },
  spotsListContent: {
    paddingHorizontal: 10,
    gap: 10,
  },
}); 