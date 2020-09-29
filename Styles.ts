import { StyleSheet } from 'react-native'

const Colors = {
  maroon: '#800000'
}

const Styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  homePageContainerView: {
    flexGrow: 1,
    paddingBottom: 40,
    marginBottom: 60
  },
  homePageEventsView: {
    flex: 1
  },
  homePageScrollView: {
    paddingHorizontal: 50
  },
  homePage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  homePageHeader: {
    color: Colors.maroon,
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
  },
  homePageCreateButton: {
    borderColor: Colors.maroon,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 7,
    marginTop: 40
  },
  homePageCreateButtonText: {
    color: Colors.maroon,
    textAlign: 'center',
    fontSize: 17
  },
  homePageEventButton: {
    borderRadius: 8,
    backgroundColor: Colors.maroon,
    width: '100%',
    paddingVertical: 7,
    marginBottom: 25
  },
  homePageEventButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 17
  }
})

export default Styles;