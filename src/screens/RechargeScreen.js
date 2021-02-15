import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default RechargeScreen = (({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <View>
                    <Ionicons style={{ marginStart: '2%' }} name="md-arrow-back" size={30} onPress={() => navigation.goBack()} />
                    <View style={{ height: 120, backgroundColor: '#FBFBFB', marginHorizontal: '5%', borderRadius: 10 }}>
                        <TouchableOpacity>
                            <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', marginLeft: '11%', marginTop: '4%' }}>My total assets</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'orange', borderRadius: 20, marginTop: '5%' }}>
                                <FontAwesome name='money' size={30} />
                                <Text style={{ fontSize: 25 }}>9.03R</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 70, backgroundColor: '#FBFBFB', marginHorizontal: '5%', marginVertical: '2%', borderRadius: 15 }}>
                    <Text style={{ fontSize: 25, marginHorizontal: '5%', marginVertical: '5%' }}>Pay way</Text>
                </View>
                <View style={{ height: 370, backgroundColor: '#FBFBFB', marginHorizontal: '5%', marginTop: '2%', borderRadius: 15 }}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginStart: '5%' }}>
                            Recharge Amount
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.box}>100R</Text>
                            <Text style={styles.box}>500R</Text>
                            <Text style={styles.box}>5000R</Text>
                            <Text style={styles.box}>20000R</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.box}>500R</Text>
                            <Text style={styles.box}>1000R</Text>
                            <Text style={styles.box}>10000R</Text>
                            <Text style={styles.box}>50000R</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ textAlign: 'center' }}>
                        In order to ensure the success rate of transaction, please ensure that the mobile phone number and email address are correct.
                    </Text>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.SubmitButtonStyle}>
                        <Text style={{ fontSize: 20, marginTop: 13, color: '#fff' }}>Recharge</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
})

const styles = StyleSheet.create({
    box: {
        margin: '12%',
        fontSize: 20,
        backgroundColor: 'orange',
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
    }

})