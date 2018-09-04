/* eslint-disable */
import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  // SwitchButton,
  ScrollView,
  FlatList,
  // Switch,
  // Alert,
  TextInput
  // Picker
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import axios from "axios";
import { colors } from "../../lib/styleUtils";

class NetworkScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleMember: {},
      members: [],
      setMembers: {
        name: "",
        gender: "1",
        team: ""
      }
    };
  }

  componentDidMount() {
    this.onPressBtnList();
  }

  onPressBtnObject = async () => {
    try {
      // fetch => promise 반환
      const url = "http://noldam.co.kr:4004/api/auth/test/0";
      const result = await axios.get(url);

      this.setState({
        singleMember: result.data
      });
    } catch (e) {
      console.log(e);
    }
  };

  onPressBtnList = async () => {
    try {
      const url = "http://noldam.co.kr:4004/api/auth/test";
      const result = await axios.get(url);

      this.setState({
        members: result.data
      });
    } catch (e) {
      console.log(e);
    }
  };

  onChangeText = type => value => {
    const { setMembers } = this.state;

    this.setState({
      setMembers: {
        ...setMembers,
        [type]: value
      }
    });
  };

  _onPress = item => {
    this.props.navigation.navigate("NetworkDetail", { item });
  };

  _onPressSwitch = type => value => {
    const { setMembers } = this.state;

    this.setState({
      setMembers: {
        ...setMembers,
        [type]: value
      }
    });
  };

  onPressSetProfile = () => {
    const data = this.state.setMembers;
    const url = "http://noldam.co.kr:4004/api/auth/test";

    return axios.post(url, data);
  };

  render() {
    const {
      onPressBtnObject,
      onPressBtnList,
      onPressSetProfile,
      _onPressItemDetail,
      _onPress,
      _onPressSwitch,
      onChangeText
    } = this;
    const {
      singleMember: { gender, name, team },
      members,
      activeSwitch
    } = this.state;

    const options = [{ label: "여", value: 1 }, { label: "남", value: 0 }];

    const listComponents = members.map(item => {
      const { name, gender, team } = item;
      return (
        <View>
          <Text>
            이름 : {name}
            성별 : {gender === 0 ? "남자" : "여자"}
            소속 : {team}
          </Text>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.parentView}>
          <View>
            <Text>이름</Text>
            <TextInput
              style={styles.textInput}
              placeholder="이름을 입력해주세요"
              /* value={}  */
              onChangeText={onChangeText("name")}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              clearButtonMode="while-editing"
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text>성별</Text>
            <View style={{ width: 100, height: 50, paddingVertical: 10 }}>
              <SwitchSelector
                options={options}
                initial={0}
                onPress={_onPressSwitch("gender")}
                fontSize={13}
                selectedColor="white"
                buttonColor="#FF6E40"
              />
            </View>
          </View>
          <View>
            <Text>소속</Text>
            <TextInput
              style={styles.textInput}
              placeholder="소속을 입력해주세요"
              /* value={} */
              onChangeText={onChangeText("team")}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              clearButtonMode="while-editing"
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.submitButton}
              activeOpacity={0.8}
              onPress={() => onPressSetProfile()}
            >
              <Text>추가</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            <FlatList
              data={members}
              keyExtractor={(item, index) => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this._onPress(item)}>
                  <View style={styles.parentItemView}>
                    <View style={styles.itemView}>
                      <Text> 이름 : {item.name} </Text>
                      <Text> 성별 : {item.gender === 0 ? "남자" : "여자"}</Text>
                      <Text> 소속 : {item.team}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
    // backgroundColor: 'orange'
  },
  parentView: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
    // flexDirection: 'column',
    // justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    width: 150,
    paddingHorizontal: 10,
    marginTop: 10
  },
  submitButton: {
    width: 100,
    height: 45,
    backgroundColor: "#FF6E40",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  parentItemView: {
    // backgroundColor:'orange',
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  itemView: {
    // backgroundColor: 'yellow',
    paddingVertical: 5,
    paddingVertical: 5,
    borderWidth: 1
    // flexDirection: '',
    // justifyContent: 'flex-start',
  },
  btnPressList: {
    borderWidth: 1,
    width: 50,
    // alignItems:'center',
    margin: 40,
    backgroundColor: "green"
  },
  btnObject: {
    width: 100,
    height: 45,
    backgroundColor: colors.main
    // backgroundColor:'yellow'
  }
});

export default NetworkScreen;
