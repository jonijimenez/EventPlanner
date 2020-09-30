import React from 'react'
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import Styles from './Styles'

const App = () => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={Styles.safeAreaView}>
        <View style={Styles.homePageContainerView}>
          <View style={Styles.homePage}>
            <Text style={Styles.homePageHeader}>EVENT PLANNER</Text>
            <Text>Memories you'll look forward to</Text>
            <TouchableOpacity
              style={Styles.homePageCreateButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={Styles.homePageCreateButtonText}>
                CREATE EVENT
              </Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.homePageEventsView}>
            <ScrollView
              contentContainerStyle={Styles.homePageScrollView}
            >
              <TouchableOpacity
                style={Styles.homePageEventButton}
              >
                <Text style={Styles.homePageEventButtonText}>
                  Ross and Rachel Wedding
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.homePageEventButton}
              >
                <Text style={Styles.homePageEventButtonText}>
                  Ross and Emily Wedding
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.homePageEventButton}
              >
                <Text style={Styles.homePageEventButtonText}>
                  Chandler and Monica Wedding
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.homePageEventButton}
              >
                <Text style={Styles.homePageEventButtonText}>
                  Annie's Halloween Party
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.homePageEventButton}
              >
                <Text style={Styles.homePageEventButtonText}>
                  Troy and Abed's Blanket Fort
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.homePageEventButton}
              >
                <Text style={Styles.homePageEventButtonText}>
                  Grreendale Annual PaintBall War
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.homePageEventButton}
              >
                <Text style={Styles.homePageEventButtonText}>
                  UP Fair 2020 Kalye Tunes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.homePageEventButton}
              >
                <Text style={Styles.homePageEventButtonText}>
                  Christmas Cantata
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={Styles.createEventModal}>
            <View style={Styles.createEventModalContainer}>
              <Text style={Styles.createEventModalHeader}>
                Create Event
              </Text>
              <View style={Styles.createEventModalInputGroup}>
                <Text style={Styles.createEventModalInputLabel}>Name</Text>
                <TextInput
                  style={Styles.createEventModalTextInput}
                  placeholder="Name"
                />
              </View>
              <View style={Styles.createEventModalInputGroup}>
                <Text style={Styles.createEventModalInputLabel}>Objective</Text>
                <TextInput
                  style={Styles.createEventModalTextInput}
                  placeholder="Objective"
                />
              </View>
              <View style={Styles.createEventModalInputGroup}>
                <Text style={Styles.createEventModalInputLabel}>Start Date</Text>
                <TextInput
                  style={Styles.createEventModalTextInput}
                  placeholder="Start Date"
                />
              </View>
              <View style={Styles.createEventModalInputGroup}>
                <Text style={Styles.createEventModalInputLabel}>End Date</Text>
                <TextInput
                  style={Styles.createEventModalTextInput}
                  placeholder="End Date"
                />
              </View>
              <View style={Styles.createEventModalSubmitGroup}>
                <TouchableOpacity
                  style={Styles.createEventModalCancelButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={Styles.createEventModalCancelButtonText}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.createEventModalSubmitButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={Styles.createEventModalSubmitButtonText}>CREATE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
}

export default App;