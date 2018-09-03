import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Alert, TextInput } from 'react-native'
import { colors, customStyle } from '../../lib/styleUtils'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as buttonActions from "../../redux/modules/button";
import { ButtonNextScreen } from "./ButtonNextScreen";
import { List, Map } from 'immutable';

class ButtonScreen extends React.Component {
    
    //onChangeText = ( ) => {
    // onChangeText = (e) => {
    onChangeText = type => value  => {
        const { buttonActions } = this.props;
        buttonActions.setProfile({ type, value });
        //Imutable 활용
        //buttonActions.setProfile({ type, value });
    };

    onPress = () => {
        const { buttonActions } = this.props;
        this.props.navigation.navigate('ButtonNext');
    }

    render() {
    const { onPress, onChangeText } = this;
    //const { name, age, address, habit } = this.state;

        return (
            <View style={styles.container}>
                    <View style={styles.childrenView}>
                        <View>
                            <Text style={styles._inputBox}>이름</Text>
                                <TextInput
                                style={styles.textInput}
                                placeholder="이름을 입력하세요"
                                onChangeText={onChangeText("name")}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="done"
                                clearButtonMode="while-editing"
                                //onEndEditing={onEndEditing}
                                />
                            <Text style={styles._inputBox}>나이</Text>
                                <TextInput
                                style={styles.textInput}
                                placeholder="나이를 입력하세요"
                                onChangeText={onChangeText("age")}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="done"
                                clearButtonMode="while-editing"
                                //onEndEditing={onEndEditing}
                                />
                            {/* <Text style={styles._inputBox}>사는곳</Text>
                                <TextInput
                                style={styles.textInput}
                                placeholder="사는 곳을 입력하세요"
                                name={age}
                                onChangeText={onChangeText("address")}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="done"
                                clearButtonMode="while-editing"
                                //onEndEditing={onEndEditing}
                                />
                            <Text style={styles._inputBox}>취미</Text>
                                <TextInput
                                style={styles.textInput}
                                placeholder="취미를 입력하세요"
                                onChangeText={onChangeText("habit")}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="done"
                                clearButtonMode="while-editing"
                                //onEndEditing={onEndEditing}
                                /> */}
                        </View>
                    </View>
                            <View style={{alignItems: "center"}}>
                                <TouchableOpacity
                                    style={styles.submitButton}
                                    activeOpacity={0.8}
                                    onPress={onPress}
                                >
                                    <Text>완료</Text>
                                </TouchableOpacity>
                            </View>       
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        //...customStyle.center
    },
    childrenView: {
        ...customStyle.center
    },
    submitButton: {
        width: 100,
        height : 45,
        backgroundColor: '#bbb',
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    textInput: {
        width: 200,
        height: 45,
        borderColor: colors.border,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 5
    },
    _inputBox: {
        marginTop: 20
    }
})

//export default connect(mapStateToProps, mapDispatchToProps)(ButtonScreen);

export default connect(
    null,
//     state => (
//     {
//         name: { key : "name", value : "" },
//         age: { key : "age", value: "" },
//         // passName : state.button.name,
//         // passAge : state.button.age,
//         // passAdress : state.button.address,
//         // passHabit : state.button.habit
//     }
// ),
    dispatch  => ({
        buttonActions: bindActionCreators(buttonActions, dispatch)
    })
)(ButtonScreen);

  