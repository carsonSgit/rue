import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CARD_WIDTH = width * 0.5;
const CARD_HEIGHT = 200;
const VERTICAL_CARD_HEIGHT = 280;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 0.3,
    borderColor: '#e0e0e0',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 16,
  },
  horizontalContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  verticalContainer: {
    width: '90%',
    height: VERTICAL_CARD_HEIGHT,
    marginBottom: 16,
    alignSelf: 'center',
  },
  touchable: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
  },
  horizontalImage: {
    width: '100%',
    height: CARD_HEIGHT * 0.65,
  },
  verticalImage: {
    width: '100%',
    height: VERTICAL_CARD_HEIGHT * 0.6,
  },
  content: {
    flex: 1,
    padding: 12,
  },
  horizontalContent: {
    height: CARD_HEIGHT * 0.35,
  },
  verticalContent: {
    height: VERTICAL_CARD_HEIGHT * 0.4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  titleContainer: {
    flex: 1,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  category: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.04)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    color: 'rgba(94, 94, 94, 0.83)',
    fontWeight: '500',
  },
}); 