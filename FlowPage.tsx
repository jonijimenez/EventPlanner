import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native'

import Styles from './Styles'

const FlowPage = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={Styles.safeAreaView}>

      </SafeAreaView>
    </>
  )
}

export default FlowPage;