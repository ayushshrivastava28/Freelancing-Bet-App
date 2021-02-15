import React, { useEffect, useState, useRef } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet, View, Text, TextInput, SafeAreaView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default WithDrawScreen = (({ navigation }) => {
    const [text, setText] = useState('');
    const [data, setData] = useState({ AccountNumber: "", IFSC: "", AccountHolderName: "", PAN: "", AADHAR: "", GSTIN: "" })

    var refTextInput1 = useRef(null)
    var refTextInput2 = useRef(null)
    var refTextInput3 = useRef(null)
    var refTextInput4 = useRef(null)
    var refTextInput5 = useRef(null)
    var refTextInput6 = useRef(null)

    return (
        <ScrollView>
            <View>
                <View>
                    <Ionicons style={{ marginStart: '2%' }} name="md-arrow-back" size={30} onPress={() => navigation.goBack()} />
                    <View style={{ height: 120, backgroundColor: '#FBFBFB', marginHorizontal: '5%', borderRadius: 10 }}>
                        <TouchableOpacity>
                            <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', marginLeft: '11%', marginTop: '4%' }}>Remaining available assets</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'orange', borderRadius: 20, marginTop: '5%', width: 300, marginHorizontal: '8%' }}>
                                <Text style={{ fontSize: 25, textAlign: 'center' }}>9.03R</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 80, backgroundColor: '#FBFBFB', marginHorizontal: '5%', marginVertical: '2%', borderRadius: 15 }}>
                    <Text style={{ fontSize: 25, marginHorizontal: '5%', marginVertical: '7%' }}>Withdrawal record</Text>
                    <AntDesign style={{ marginLeft: '92%', marginTop: '-15%' }} name="right" size={22} onPress={() => navigation.goBack()} />
                </View>
                <View style={{ height: 170, backgroundColor: '#FBFBFB', marginHorizontal: '5%', marginTop: '2%', borderRadius: 15 }}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginStart: '5%' }}>
                            Withdrawal amount
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', padding: 25 }}>
                            <TextInput style={styles.box}
                                placeholder="Enter the withdrawal amount"
                                keyboardType="numeric"
                                onChangeText={text => setText(text)}
                            />
                            <TextInput style={styles.box}
                                placeholder="Enter the fund password"
                                keyboardType="numeric"
                            // onChangeText={(e)=>e.target.Value}
                            />
                            <View style={{ alignItems: 'flex-end', marginTop: '1%' }}>
                                <TouchableOpacity >
                                    <Text style={{ color: 'orange', fontSize: 20 }}>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: '5%' }}>
                    <Text style={{ textAlign: 'center' }}>
                        Please check the payment information carefully.
                    </Text>
                </View>
                <View style={styles.mainContainer} >
                    <View style={styles.containerRectangleName}>
                        <View style={styles.rect}>
                            <TextInput
                                style={styles.textInputPhone}
                                ref={(_ref) => refTextInput1 = _ref}
                                value={data.AccountNumber.toString()}
                                onChangeText={(accoutnNo) => { setData({ ...data, AccountNumber: accoutnNo }) }}
                            />
                            <TouchableOpacity onPress={() => { refTextInput1.focus() }} style={{ marginVertical: '7%' }}>
                                <MaterialIcons name='edit' size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Name</Text>

                    <View style={styles.containerRectangleName}>
                        <View style={styles.rect}>
                            <TextInput
                                style={styles.textInputPhone}
                                ref={(_ref) => refTextInput2 = _ref}
                                value={data.IFSC.toString()}
                                onChangeText={(ifscCode) => { setData({ ...data, IFSC: ifscCode }) }}
                            />
                            <TouchableOpacity onPress={() => { refTextInput2.focus() }} style={{ marginVertical: '7%' }}>
                                <MaterialIcons name='edit' size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Mobile</Text>

                    <View style={styles.containerRectangleName}>
                        <View style={styles.rect}>
                            <TextInput
                                style={styles.textInputPhone}
                                ref={(_ref) => refTextInput3 = _ref}
                                value={data.AccountHolderName.toString()}
                                onChangeText={(name) => { setData({ ...data, AccountHolderName: name }) }}
                            />
                            <TouchableOpacity onPress={() => { refTextInput3.focus() }} style={{ marginVertical: '7%' }}>
                                <MaterialIcons name='edit' size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Bank Account</Text>

                    <View style={styles.containerRectangleName}>
                        <View style={styles.rect}>
                            <TextInput
                                style={styles.textInputPhone}
                                ref={(_ref) => refTextInput4 = _ref}
                                value={data.PAN.toString()}
                                onChangeText={(pan) => { setData({ ...data, PAN: pan }) }}
                            />
                            <TouchableOpacity onPress={() => { refTextInput4.focus() }} style={{ marginVertical: '7%' }}>
                                <MaterialIcons name='edit' size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >IFSC</Text>

                    <View style={styles.containerRectangleName}>
                        <View style={styles.rect}>
                            <TextInput
                                style={styles.textInputPhone}
                                ref={(_ref) => refTextInput5 = _ref}
                                value={data.AADHAR.toString()}
                                onChangeText={(aadhar) => { setData({ ...data, AADHAR: aadhar }) }}
                            />
                            <TouchableOpacity onPress={() => { refTextInput5.focus() }} style={{ marginVertical: '7%' }}>
                                <MaterialIcons name='edit' size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >UPI Number</Text>
                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={{ fontSize: 20, top: 13, color: '#fff' }} >Modify</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </ScrollView>
    )
})

const styles = StyleSheet.create({
    box: {
        margin: '1%',
        marginHorizontal: '8%',
        fontSize: 20,
        backgroundColor: '#ebe6e6',
        height: 40,
        textAlign: 'center',
        borderRadius: 10
    },
    bottomContainer: {
        alignItems: 'center',
    },
    SubmitButtonStyle: {
        marginVertical: '5%',
        marginHorizontal: '10%',
        height: 60,
        backgroundColor: 'grey',
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        marginBottom: '20%',
        width: 250
    },
    mainContainer: {
        flex: 4
    },
    containerRectangleName: {
        marginTop: 40,
        alignItems: 'center'
    },
    containerRectangle: {
        marginTop: 15,
        alignItems: 'center'
    },
    rect: {
        width: "75%",
        height: 60,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "rgba(112,112,112,1)",
        borderStyle: "solid",
        borderRadius: 100,
        flexDirection: "row",
        paddingStart: 20
    },
    textInputPhone: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        flexDirection: 'row',
        maxWidth: '80%'
    },
    submitButton: {
        marginTop: '15%',
        marginLeft: '10%',
        height: 60,
        marginRight: '10%',
        backgroundColor: '#99DD70',
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        marginBottom: '10%'
    }

})