import { StyleSheet } from 'react-native'

const Colors = {
  maroon: '#800000',
  modalOverlay: '#C4C4C4AA'
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
  },
  createEventModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.modalOverlay,
    paddingHorizontal: 30
  },
  createEventModalContainer: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderRadius: 10,
    paddingVertical: 40
  },
  createEventModalHeader: {
    color: Colors.maroon,
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 20
  },
  createEventModalInputGroup: {
    marginBottom: 25
  },
  createEventModalInputLabel: {
    textAlign: 'left',
    color: Colors.maroon,
    fontSize: 12
  },
  createEventModalTextInput: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingBottom: 0
  },
  createEventModalSubmitGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15
  },
  createEventModalCancelButton: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginRight: 5
  },
  createEventModalCancelButtonText: {
    color: Colors.maroon,
    fontSize: 17
  },
  createEventModalSubmitButton: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginRight: 5,
    backgroundColor: Colors.maroon,
    borderRadius: 7,
  },
  createEventModalSubmitButtonText: {
    color: '#FFF',
    fontSize: 17
  }

})

export default Styles;