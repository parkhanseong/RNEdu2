import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, FlatList } from 'react-native'
import { colors,  } from '../../lib/styleUtils'
import axios from "axios"
class NetworkScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            singleMember: {},
            members: []
        }
    }

    componentDidMount() {
        this.onPressBtnList();
    }

    onPressBtnObject = async () => {
        try {
            //fetch => promise 반환
            const url = "http://noldam.co.kr:4004/api/auth/test/0";
            const result = await axios.get(url);

            this.setState({
                singleMember: result.data
            })
        }catch(e){
            console.log(e)
        }
    }
    onPressBtnList = async () => {
        try {
            const url = "http://noldam.co.kr:4004/api/auth/test";
            const result = await axios.get(url);
            // this.setState({
            //     singleMember: result.data
            // })
            this.setState({
                members: result.data
            })  
        } catch (error) {
            console.log(e)
        }
    }

    render() {
        const { onPressBtnObject, onPressBtnList } = this;
        const { singleMember : {gender, name, team}, members } = this.state;

        const listComponents = members.map(item => {
            const { name, gender, team } = item
            return (
                <View >
                    <Text>
                        이름 : {name}
                        성별 : {gender === 0 ? "남자" : "여자"}
                        소속 : {team}
                    </Text>
                </View>
            )
            // console.log(item)
        })

        return (
            <View style={styles.container}>
                {/* <TouchableOpacity style={{borderWidth: 1, width: 50, alignItems:'center'}} 
                                  onPress={onPressBtnObject}>
                        <Text>
                        단일객체
                        </Text>
                    </TouchableOpacity>
                    <View >
                        <Text>
                            이름 : {name}
                            성별 : {gender === 0 ? "남자" : "여자"}
                            소속 : {team}
                        </Text>
                    </View> */}
                    <View style={styles.parentView}>
                        {/* <TouchableOpacity style={styles.btnPressList} 
                                        onPress={onPressBtnList}>
                            <Text>
                                리스트
                            </Text>
                        </TouchableOpacity> */}
                            {/* <FlatList
                                style={}
                                data={members}
                                keyExtractor={ (item, index) => item.name }
                                renderItem={({ item }) => (
                                    <View>
                                        <Text>
                                            이름 : {item.name}
                                            성별 : {item.gender === 0 ? "남자" : "여자"}
                                            소속 : {item.team}
                                        </Text>
                                    </View> 
                                )
                                }
                            /> */}
                    </View>
                {/* <View>
                </View> */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        // backgroundColor: 'orange'
    },
    parentView: {
        // flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    },
    flatList:{
        borderWidth:10
    },
    btnPressList : {
        borderWidth: 1, 
        width: 50, 
        //alignItems:'center', 
        margin: 40,
        backgroundColor:"green"
    },
    // btnObject: {
    //     width: 100,
    //     height: 45,
    //     backgroundColor: colors.main,
    //     backgroundColor:'yellow'
    // },
})

export default NetworkScreen