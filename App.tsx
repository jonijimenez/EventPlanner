import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import Styles from './Styles'

const App = () => {
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
      </SafeAreaView>
    </>
  );
}

export default App;