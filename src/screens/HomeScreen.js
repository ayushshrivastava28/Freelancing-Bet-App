import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { FlatListSlider } from 'react-native-flatlist-slider'
export default HomeScreen = (({ navigation }) => {
    const images = [
        {
            image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            desc: 'Himalaya',
        },
        {
            image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
            desc:
                'Red Fort',
        },
    ]
    const Imagebakground = { uri: "https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg" }
    var deviceWidth = Dimensions.get('window').width;
    // let data = ['one', 'two', 'three', 'four'];
    // let cards = data.map((d, i) => {
    //     return (
    //         <View key={i} style={[{ width: deviceWidth / 2, height: 100 }]}>
    //             <View style={[{ flex: 1, marginLeft: 10, marginRight: 10, marginTop: 10 }, (i % 2) && { marginLeft: 0 }]}>
    //                 <View style={[{ backgroundColor: 'white', flex: 1, borderRadius: 3, padding: 10 }, styles.shadow]}>
    //                     <Text>{d}</Text>
    //                 </View>
    //             </View>
    //         </View>
    //     )
    // })
    const CardSection = (props) => {
        return (
            <View style={styles.containerStyle}>
                {props.children}
            </View>
        );

    };

    return (
        <ScrollView>
            <View style={{ flex: 1, height: "100%" }}>
                {/* <View style={styles.coverBack}> */}
                <ImageBackground source={Imagebakground} style={styles.imagebgrnd}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <Text style={{ fontSize: 18, marginVertical: '6%', color: 'orange' }}>0.00 {" "}Rs</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, marginVertical: '6%', color: 'orange' }}>100.00 {" "}Rs</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={styles.RectCard} >
                            <Text style={{ fontSize: 17, marginVertical: '6%', color: 'orange' }}>Your Total Assets</Text>
                        </View>
                        <View style={styles.RectCard} >
                            <Text style={{ fontSize: 17, marginVertical: '6%', color: 'orange' }}>Virtual Currency</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={styles.BigRectCard} >
                        <View style={{ flexDirection: 'row' }}><View>
                            <Text style={{ fontSize: 18, marginVertical: '6%', color: 'orange' }}>0</Text>
                        </View>
                            <Text style={{ fontSize: 12, marginVertical: '6%', color: 'orange' }}>Yesterday's earning</Text>
                            <View>
                                <Text style={{ fontSize: 18, marginVertical: '6%', color: 'orange' }}>0</Text>
                            </View>
                            <Text style={{ fontSize: 12, marginVertical: '6%', color: 'orange' }}>Comulative income</Text>
                            <View>
                                <Text style={{ fontSize: 18, marginVertical: '6%', color: 'orange' }}>0</Text>
                            </View>
                            <Text style={{ fontSize: 12, marginVertical: '6%', color: 'orange' }}>Today's earning</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={styles.MediumRectCard} >
                        <TouchableOpacity onPress={() => navigation.navigate('RechargeScreen')}>
                            <Text style={{ fontSize: 22, marginVertical: '6%', color: 'orange' }}>Recharge</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.MediumRectCard} >
                        <TouchableOpacity onPress={() => navigation.navigate('WithDrawScreen')}>
                            <Text style={{ fontSize: 22, marginVertical: '6%', color: 'orange' }}>Withdraw</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </View> */}
                <View style={{ flexDirection: 'row', marginVertical: '5%', marginLeft: '2%' }}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity>
                            <Image style={styles.selectedimage} />
                        </TouchableOpacity>
                        <Text style={{ marginVertical: '5%', marginLeft: '20%', fontSize: 12, fontWeight: 'bold' }}>Order Finance</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity >
                            <Image style={styles.selectedimage} />
                        </TouchableOpacity>
                        <Text style={{ marginVertical: '5%', marginLeft: '15%', fontSize: 12, fontWeight: 'bold' }}>Finance Product</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity>
                            <Image style={styles.selectedimage} />
                        </TouchableOpacity>
                        <Text style={{ marginVertical: '5%', marginLeft: '15%', fontSize: 12, fontWeight: 'bold' }}>Invite Friends</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity >
                            <Image style={styles.selectedimage} />
                        </TouchableOpacity>
                        <Text style={{ marginVertical: '5%', marginLeft: '5%', fontSize: 12, fontWeight: 'bold' }}>Mission</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity >
                            <Image style={styles.selectedimage} />
                        </TouchableOpacity>
                        <Text style={{ marginVertical: '5%', marginLeft: '-2%', fontSize: 12, fontWeight: 'bold' }}>Introduction</Text>
                    </View>
                </View>

                <View style={styles.ImageCard}>
                    <View style={{ flexDirection: 'row' }}>
                        <FlatListSlider
                            data={images}
                            width={400}
                            height={280}
                            timer={5000}
                            indicatorContainerStyle={{ position: 'absolute', bottom: 5 }}
                            indicatorActiveColor={'#8e44ad'}
                            indicatorInActiveColor={'#ffffff'}
                            indicatorActiveWidth={25}
                            animation
                        />
                    </View>
                </View>
                {/* <View style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap', backgroundColor: 'transparent' }}>
                    <TouchableOpacity onPress={navigation.navigate('DetailsScreen')}>{cards}</TouchableOpacity>

                </View> */}
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <CardSection>
                            <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
                                <Text>New Work</Text>
                            </TouchableOpacity>
                        </CardSection>
                        <CardSection>
                            <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
                                <Text>New Work</Text>
                            </TouchableOpacity>
                        </CardSection>
                        <CardSection>
                            <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
                                <Text> New Work</Text>
                            </TouchableOpacity>
                        </CardSection>
                        <CardSection>
                            <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
                                <Text> New Work</Text>
                            </TouchableOpacity>
                        </CardSection>
                    </View>
                </ScrollView>

            </View>
        </ScrollView>
    )
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
        // alignContent: 'stretch',

    },
    mainContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    containerStyle: {
        padding: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        marginLeft: 1,
        marginRight: 1,
        borderColor: '#808080',
        marginTop: 5,
        elevation: 20
    },
    item: {

        width: '90%',
        alignItems: 'center'
    },
    RectCard: {
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        width: '40%',
        marginHorizontal: '4%'
    },
    imageContainer: {
        flexDirection: 'column',
        marginHorizontal: '0.5%',
        width: '18%',
        alignItems: 'center'
    },
    selectedimage: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#38ACEC',
        height: 50,
        width: 55
    },
    BigRectCard: {
        marginVertical: '5%',
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        width: '90%'
    },
    MediumRectCard: {
        marginVertical: '5%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        width: '45%',
        marginHorizontal: '2%',
        opacity: 0.9,
    },
    Card: {
        height: 70,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        width: '100%',
        marginHorizontal: '2%'
    },
    ImageCard: {
        height: 300,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        width: '100%',
        marginHorizontal: '2%'
    },
    parent: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    child: {
        width: '48%',
        margin: '1%',
        aspectRatio: 1,
    },
    coverBack: {
        backgroundColor: '#ee5522',
    },
    imagebgrnd: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})
