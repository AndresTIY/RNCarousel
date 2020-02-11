import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  slide: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  slideText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
  },
  stat: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flexBasis: '33%',
    flex: 1,
    maxWidth: '33%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  statHold: {
    width: '100%',
    marginBottom: 8,
  },
  statLabel: {
    width: '100%',
    textAlign: 'left',
    fontSize: 11,
    fontWeight: '600',
    paddingTop: 5,
  },
  carouselContainer: {
    width: '100%',
    backgroundColor: '#fbfbfb',
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#fcfcfc',
    shadowOpacity: 1,
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',,
  },
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  bullets: {
      position: 'absolute',
      top: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingTop: 5,
  },
  bullet: {
      paddingHorizontal: 5,
      fontSize: 20
  }
});

export default styles;
