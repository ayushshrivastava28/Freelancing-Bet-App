import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Dialog from "react-native-dialog";
import Ionicons from 'react-native-vector-icons/Ionicons'

export default DetailScreen = (({ navigation }) => {
    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleDelete = () => {
        setVisible(false);
    };
    return (
        <View>
            <Ionicons name="md-arrow-back" size={24} onPress={() => navigation.goBack()} />
            <View style={{ flexDirection: 'column', justifyContent: 'center', backgroundColor: 'orange' }}>
                <View style={styles.BigRectCard} >
                    <View style={{ flexDirection: 'row' }}><View>
                        <Text style={{ fontSize: 12, marginVertical: '6%', color: 'orange' }}>Yesterday's earning</Text>
                    </View>
                        <Text style={{ fontSize: 18, marginVertical: '6%', color: 'orange' }}>0</Text>
                        <View>
                            <Text style={{ fontSize: 12, marginVertical: '6%', color: 'orange' }}>Comulative income</Text>
                        </View>
                        <Text style={{ fontSize: 18, marginVertical: '6%', color: 'orange' }}>0</Text>
                        <View>
                            <Text style={{ fontSize: 12, marginVertical: '6%', color: 'orange' }}>Today's earning</Text>

                        </View>
                        <Text style={{ fontSize: 18, marginVertical: '6%', color: 'orange' }}>0</Text>
                    </View>
                </View>
                <View style={styles.RectCard} >
                    <View style={{ flexDirection: 'row' }}><View>
                        <Text style={{ fontSize: 12, marginVertical: '6%', color: 'orange' }}>Yesterday's earning</Text>
                    </View>
                        <Text style={{ fontSize: 18, marginVertical: '6%', color: 'orange' }}>0</Text>
                        <View>
                            <Text style={{ fontSize: 12, marginVertical: '6%', color: 'orange' }}>Comulative income</Text>
                        </View>
                        <Text style={{ fontSize: 18, marginVertical: '6%', color: 'orange' }}>0</Text>
                        <View>
                            <Text style={{ fontSize: 12, marginVertical: '6%', color: 'orange' }}>Today's earning</Text>

                        </View>
                        <Text style={{ fontSize: 18, marginVertical: '6%', color: 'orange' }}>0</Text>
                    </View>
                </View>

            </View>
            <View style={{ flexDirection: 'row', marginTop: '1%', width: '100%' }}>
                <View style={styles.Box}>
                    <Text style={{ marginTop: '20%', marginVertical: "2%", fontSize: 25, textAlign: 'center', color: '#fff' }}>100R</Text>
                    <Text style={{ marginVertical: "2%", fontSize: 25, marginHorizontal: '5%', color: '#fff' }}>{"      "}LVI MEMBER</Text>
                    <Text style={{ marginVertical: "2%", fontSize: 25, textAlign: 'center', color: '#fff' }}>Wish</Text>
                </View>
                <View style={styles.Box2}>
                    <Text style={{ fontSize: 30, marginTop: '30%', textAlign: 'center', color: 'blue' }}>wish</Text>
                    <View style={{ flexDirection: 'column', marginTop: '5%', justifyContent: 'space-evenly' }}>
                        {/* <Text style={{ marginTop: '25%', backgroundColor: 'orange' }}>Recharge</Text>
                            <Text style={{ marginTop: '25%', backgroundColor: 'red' }}>Grabbing</Text> */}
                        <Button title="Recharge" color="orange" onPress={showDialog} />
                        <Button title="Grabbing" color="red" onPress={showDialog} />
                        <Dialog.Container visible={visible}>
                            <Dialog.Title>Order details</Dialog.Title>
                            <Dialog.Description>
                                Order Number
                            </Dialog.Description>
                            <Dialog.Description>
                                Capture time
                            </Dialog.Description>
                            <Dialog.Description>
                                Total order amount
                            </Dialog.Description>
                            <Dialog.Description>
                                Expected return
                            </Dialog.Description>
                            <Dialog.Button label="Cancel" onPress={handleCancel} />
                            <Dialog.Button label="Purchase" onPress={handleDelete} />
                        </Dialog.Container>

                    </View>
                </View>
            </View>
            <View style={styles.Cards}>
                <Text style={{ marginTop: '5%', marginRight: '50%', fontWeight: 'bold', marginHorizontal: '5%', fontSize: 18 }}>Instructions for use</Text>
                <Text style={{ marginRight: '20%', marginTop: '5%', fontSize: 15 }}>1. One account can grab 30 orders per day.</Text>
                <Text style={{ marginLeft: '1%', marginTop: '5%', fontSize: 15 }}>2. The system is based on LBS technology, through the cloud automatic driving system</Text>
            </View>
        </View>
    )
})
const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: '4%',
        backgroundColor: '#e3e4e6',
        borderRadius: 15,
        marginHorizontal: '10%',
        flex: 1,
        maxHeight: '20%',
        marginBottom: '3%'
    },
    contentBox: {
        marginStart: '10%',
        flexDirection: 'row',
        marginTop: '5%',
        marginEnd: '5%',
    },
    filler: {
        flex: 1,
        flexDirection: 'row'
    },
    Box: {
        flex: 1,
        width: '90%',
        marginVertical: '10%',
        flexDirection: 'column',
        marginHorizontal: '10%',
        justifyContent: 'flex-start',
        backgroundColor: 'orange',
        borderRadius: 20,
        height: "80%",
    },
    Box2: {
        flex: 1,
        width: '90%',
        marginVertical: '10%',
        flexDirection: 'column',
        marginHorizontal: '10%',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 20,
        height: "80%",
    },
    BigRectCard: {
        marginHorizontal: '4%',
        marginVertical: '5%',
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderBottomRightRadius: 1,
        borderBottomLeftRadius: 1,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        width: '90%',
        flexDirection: 'row'
    },
    Cards: {
        marginHorizontal: '4%',
        marginVertical: '5%',
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderBottomRightRadius: 1,
        borderBottomLeftRadius: 1,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        width: '90%',
        flexDirection: 'column'
    },
    RectCard: {
        marginTop: '-6%',
        marginHorizontal: '4%',
        height: 80,
        borderRadius: 20,
        borderBottomWidth: 10,
        borderColor: 'black',
        backgroundColor: '#fff',
        borderTopLeftRadius: 1,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        width: '90%'
    },
})
