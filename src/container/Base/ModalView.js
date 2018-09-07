import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../lib/styleUtils'

class ModalView extends React.Component {
  constructor (props) {
    super(props)
    this.state = { modalVisible: false }
  }

  setModalVisible (visible) {
    this.setState({ modalVisible: visible })
  }

  render () {
    return (
      <View style={{ marginTop: 22 }}>
        <View style={styles.container}>
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.')
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                {/* <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight> */}
              </View>
            </View>
          </Modal>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})

export default ModalView
