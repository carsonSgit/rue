import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CARD_WIDTH = width * 0.85;
const CARD_HEIGHT = 180;
const VERTICAL_CARD_HEIGHT = 250;

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
  spotsListContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: height * 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  blurBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  spotsListContent: {
    padding: 16,
  },
  horizontalListContent: {
    paddingHorizontal: 16,
    gap: 16,
  },
  verticalListContent: {
    paddingHorizontal: 16,
    gap: 16,
    paddingBottom: 100,
  },
  horizontalCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  verticalCard: {
    width: '100%',
    height: VERTICAL_CARD_HEIGHT,
  },
  toggleButton: {
    position: 'absolute',
    right: 70,
    backgroundColor: '#000',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  filterButton: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#000',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
}); 