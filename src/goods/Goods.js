import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width,scale} = Dimensions.get('window');
const s = width / 640;

const goods = [
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../../assets/1.gif'),
        key:1
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 39,
        img: require('../../assets/2.gif'),
        key:2
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../../assets/1.gif'),
        key:3
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 88,
        img: require('../../assets/2.gif'),
        key:4
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../../assets/1.gif'),
        key:5
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../../assets/2.gif'),
        key:6
    },
]

export default class Goods extends Component {
    constructor(){
        super();
        this.state = {
            tits: []
        }
    }
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput 
                            placeholderTextColor='#5e5e5e'
                            placeholder="请输入商品名称"
                            style={{
                                width: 500*s,height: 50*s,
                                backgroundColor:'#c9c9c9'
                            }}
                        />
                        <Icon color='#fff' name='search' size={20}/>
                    </View>
                </View>
                <View style={styles.nav}>
                    <TouchableOpacity>
                        <Text style={{color:'#ff0000'}}>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>销量</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>新品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>价格</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>信用</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    style={{backgroundColor: '#F4F4F4'}}
                    data={goods}
                    numColumns={2}
                    renderItem={({item})=>(
                        <View key={item.key} style={{
                            width: '45%',
                            height: 220,
                            margin:10,
                            backgroundColor: '#fff',
                            alignItems:'center'}}>
                                <Image style={{width:'50%',height:'50%',marginTop:20}} source={item.img}/>
                                <Text style={{fontSize:12,marginTop:15,color:'#c9c9c9',margin:2}}>{item.title}</Text>
                                <Text style={{fontSize:12,marginTop:15,color:'#ff0000',position:'absolute',left:2,bottom:20}}>{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height: 70*s,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1/3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search:{
        width: 544*s,
        height: 50*s,
        backgroundColor: '#c9c9c9',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nav:{
        height: 73*s,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
})
