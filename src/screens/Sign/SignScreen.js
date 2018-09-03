import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { colors } from '../../lib/styleUtils'
import { Icon } from 'react-native-elements';
import { List, Map } from 'immutable';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as signActions from "../../redux/modules/sign";
import { createStackNavigator, StackNavigator } from "react-navigation";

class SignScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: {
                value: '',
                isValid: null
            },
            phone: {
                value: '',
                isValid: null
            },
            pwd: {
                value: '',
                isValid: null
            },
            pwdConfirm: {
                value: '',
                isValid: null
            },
            verifyNum: {
                value: '',
                isValid: null
            },
            isNullSecret: false,
            verifiedHPNum_1: false, 
            verifiedHpNum_2: false,
            verifiedPwd: null,
            //비밀번호 일치 여부 체크
            compareSecretNum: false,
            //인증번호 길이 체크
            checkVerifyNum: false,
            //다음 버튼 최종 활성화 조건
            verifiedDone: false,
        }
    }

    _onChangeText = type => value => {
        const isValid = this.checkValidation(type, value);
        const { signActions } = this.props;

        signActions.setSign({type, value, isValid});

        this.setState({
            // [type]: {value, isValid: null},
            [type]: {value, isValid},
        });
        //Layout 컨트롤
        this._handleLayout(type, value);
    }

    _handleLayout = (type, value) => {
        const { name } = this.state;

        //이름 입력, 휴대폰번호 11자리 입력 완료되면 인증 Box 노출
        if( name !== "" && type === "phone" && value.length === 11 ){
            this.setState({ verifiedHPNum_2: true });
        }
    }
    // 인증 버튼 클릭시
    _onPress = () => {
        
        const { verifyNum } = this.state;
        if( verifyNum.value.length === 6 ){
            this.setState({
                verifiedPwd: true,
                verifiedHPNum_2: false
            });
        }else{
            Alert.alert("인증번호 6자리를 입력해주세요.");
        }
    }
    
    checkValidation = (type, value) => {
       
        let isValid = null
        switch (type) {
            case 'name':
                isValid = value.length >= 2 && value.length <= 6
                break;
            case 'phone':
                isValid = value.length === 11
                break;
            case 'pwd':
                isValid = value.length >= 8 && value.length <= 20
                break;
            case 'pwdConfirm':
                isValid = this.state.pwd.value === value
                break;
            case 'verifyNum':
                isValid = value.length === 6
                break;
            default:
                break;
            }
        return isValid;
    }

    //다음 버튼 클릭시 > 로그인 화면으로 이동
    handleGoNextscreen = () => {
            // this.props.navigation.navigate('Login');
            this.props.navigation.navigate('Main');
    }
    
    render() {
        const { isValid, value, name, phone, pwd, pwdConfirm, verifyNum, verifiedHPNum_1, verifiedHPNum_2, verifiedPwd, 
            phoneNumLength, checkVerifyNum, txtSecretNumNotice, compareSecretNum, isNullSecret } = this.state;
        const { _onChangeText, handleAlert, onEndEditing, onMoveScreen, _onPress, handleGoNextscreen } = this;
        const remote = 'http://img.kormedi.com/news/article/__icsFiles/afieldfile/2012/05/29/0529childer_c.jpg';
        
        const verifiedDone = name.isValid && phone.isValid && pwd.isValid && pwdConfirm.isValid
        const buttonStyle = {
            backgroundColor: verifiedDone ? "#FF6E40" : '#999'
        }
        const borderOptionStyle = (isValid) => ({
            borderColor: isValid || isValid === null ? "black" : "red"
        })
        const verifyButtonStyle = (isValid) => ({
            color: verifyNum.isValid ? "red" : "#999"
        })

        const strPwdConfirmValid = pwdConfirm.isValid
        ? "비밀번호가 일치합니다"
        : "비밀번호가 일치하지 않습니다"
        
        return (
            <View style={styles.container}>
                <View style={styles.parentView}>
                        <View>
                            <Text>이름</Text>
                                <View style={[styles.textInputView, borderOptionStyle(name.isValid)]}>
                                    <TextInput
                                        style={[styles.textInputStyle]}
                                        maxLength={6}
                                        placeholder="이름을 입력해주세요"
                                        onChangeText={_onChangeText("name")}
                                        autoCorrect={false}
                                        returnKeyType="done"
                                        clearButtonMode="while-editing"
                                        value={name.value}
                                    />
                                    {name.isValid === null ? null : (
                                        <Icon
                                        name={name.isValid ? "check" : "rainbow"}
                                        type="entypo"
                                        size={20}
                                        color={colors.main}
                                        />
                                    )}
                                </View>
                    </View> 
                    <View>
                        <Text style={styles.marginTop_1}>휴대폰 번호 </Text>
                        {/* / 글자수({this.state.phoneNumLength}) */}
                        <View style={[styles.textInputView, borderOptionStyle(phone.isValid)]}>    
                            <TextInput 
                                style={[styles.textInputStyle]}
                                maxLength={11}
                                placeholder='휴대폰 번호를 입력해주세요'
                                keyboardType='number-pad'
                                value={phone.value}
                                onChangeText={_onChangeText('phone')}
                                clearButtonMode="while-editing"
                                onEndEditing={onEndEditing}
                            />
                            {phone.isValid === null ? null : (
                                <Icon
                                name={phone.isValid ? "check" : "rainbow"}
                                type="entypo"
                                size={20}
                                color={colors.main}
                                />
                            )}
                        </View>
                        {/* 인증번호 중복 */}
                        { !verifiedHPNum_1 ? ( 
                                        null  
                                        ) : (
                                        <Text style={styles.txtNoticeNum}>
                                        중복된 번호입니다. 다시 한번 확인해보세요.
                                        </Text> 
                                        )}
                        {/* 인증번호 입력 */}
                        { !verifiedHPNum_2 ? ( 
                                        null  
                                        ) : (
                                            <View style={styles.wholeBox}>
                                                <View style={styles.txtVerifiedTop}>
                                                    <Text style={{color: 'white'}}>
                                                        인증번호 입력
                                                    </Text>
                                                </View>
                                                <View style={styles.containerVeri}>
                                                    <View style={styles.txtNoticeVerfi}>
                                                        <Text style={{color: "#FF6E40"}}>
                                                            * 5~10초만 기다려주세요.
                                                        </Text>
                                                        <Text style={{ textDecorationLine: 'underline', color: 'gray',}}>
                                                            재발송
                                                        </Text>
                                                    </View> 
                                                    <View style={styles.inputVeriNum}>
                                                        <TextInput
                                                        style={styles.textInputVeri}
                                                        maxLength={6}
                                                        placeholder='인증번호 6자리 입력'
                                                        keyboardType='number-pad'
                                                        autoCapitalize='none'
                                                        autoCorrect={false}
                                                        onChangeText={ _onChangeText('verifyNum')}
                                                        returnKeyType='done'
                                                        clearButtonMode="while-editing"
                                                        >
                                                        </TextInput>
                                                        {/* touchable 안에 text 구현하기 disabled이 안먹히기 때문임. */}
                                                        <TouchableOpacity
                                                        disabled={!verifyNum.isValid}>
                                                            <Text 
                                                            style={[styles.textInput, verifyButtonStyle(verifyNum.isValid)]}
                                                            onPress={_onPress}
                                                            >
                                                            인증
                                                            </Text>   
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        )}
                        {/* 비밀번호 */}
                        { !verifiedPwd ? ( null  ) : (
                                            <View>
                                            <View>
                                                <Text style={styles.marginTop_1}>비밀번호 설정</Text>
                                                    <View style={[styles.textInputView, borderOptionStyle(pwd.isValid)]}>    
                                                        <TextInput 
                                                            style={[styles.textInputStyle]}
                                                            maxLength={20}
                                                            value={pwd.value}
                                                            placeholder='비밀번호를 입력해주세요'
                                                            keyboardType='number-pad'
                                                            onChangeText={ _onChangeText('pwd')}
                                                            autoCapitalize='none'
                                                            autoCorrect={false}
                                                            returnKeyType='done'
                                                            clearButtonMode="while-editing"
                                                            secureTextEntry={true}
                                                            onEndEditing={onEndEditing}
                                                        />
                                                        {pwd.isValid === null ? null : (
                                                            <Icon
                                                            name={pwd.isValid ? "check" : "rainbow"}
                                                            type="entypo"
                                                            size={20}
                                                            color={colors.main}
                                                            />
                                                        )}
                                                    </View>        
                                            </View>   
                                            <View>
                                                <Text style={styles.marginTop_1}>비밀번호 재확인</Text>
                                                    <View style={[styles.textInputView, borderOptionStyle(pwdConfirm.isValid)]}>    
                                                        <TextInput 
                                                            style={[styles.textInputStyle]}
                                                            maxLength={20}
                                                            value={pwdConfirm.value}
                                                            placeholder='비밀번호를 입력해주세요'
                                                            keyboardType='number-pad'
                                                            onChangeText={ _onChangeText('pwdConfirm')}
                                                            autoCapitalize='none'
                                                            autoCorrect={false}
                                                            returnKeyType='done'
                                                            clearButtonMode="while-editing"
                                                            secureTextEntry={true}
                                                            onEndEditing={onEndEditing}
                                                        />
                                                        {pwdConfirm.isValid === null ? null : (
                                                            <Icon
                                                            name={pwdConfirm.isValid ? "check" : "rainbow"}
                                                            type="entypo"
                                                            size={20}
                                                            color={colors.main}
                                                            />
                                                        )}
                                                    </View>    
                                            </View>
                                                <View style={{marginTop: 10}}>
                                                        <Text style={{ color: "#FF6E40" }}>{strPwdConfirmValid}</Text>
                                                </View>
                                        </View>
                                        )}  
                    </View>    
                </View>
                
                {/* Footer / '다음' button */}
                <View >
                    <TouchableOpacity 
                    style={[styles.btnVeriNext, buttonStyle]} 
                    onPress={handleGoNextscreen}
                    disabled={!verifiedDone}>
                        <Text style={styles.footerTxt}>
                        다음
                        </Text>
                    </TouchableOpacity>
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    parentView: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    textInputStyle: {
        flex:1,
    },
    textInputView: {
        flexDirection: 'row',
        height: 45,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    textInputVeri: {
        height: 40,
        width: 150,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    txtFindPwd: {
        
    },
    txtTitle: {

    },
    txtDesc: {
        
    },
    wholeBox: {
        marginTop: 10,
        borderColor: "#FF6E40",
        borderWidth: 1,
    },
    txtVerifiedTop: {
        backgroundColor:'#FF6E40',
        height: 30,
        justifyContent:'center',
        alignItems : 'center',
        borderColor: "#FF6E40"
    },
    txtNoticeVerfi: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    inputVeriNum: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    containerVeri: {
        backgroundColor:'white',
        height: 100,
    },
    imgBackground:{
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        backgroundColor: 'yellow'
    },
    btnLogin:{

    },
    marginTop_1: {
        marginTop: 20, 
        textAlign: 'left'
    },
    txtNoticeNum: {
        marginTop: 20, 
        color: '#FF6E40',
        fontWeight: 'bold'
    },
    btnVeriNext: {
        height: 70,
        backgroundColor: '#FF6E40',
        alignItems : 'center',
        justifyContent : 'center'
    },
    btnNotVeriNext: {
        height: 70,
        backgroundColor: 'gray',
        alignItems : 'center',
        justifyContent : 'center'
    },
    footerTxt: {
        fontSize: 20,
        color: 'white',
    },
    backgroundImage: {
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
    }
})

export default connect(
    null,
    dispatch  => ({
        signActions: bindActionCreators(signActions, dispatch)
    })
)(SignScreen);

// export default SignScreen