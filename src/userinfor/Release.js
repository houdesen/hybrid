import React, { Component } from 'react';
import { Text, View,TouchableOpacity, FlatList, ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Button from 'react-native-button';

const answer = ['已回复','待回复'];

export default class Release extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            page:1,
            num:0,
            limit:10
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.data,
                    num:Math.ceil(res.data.length/this.state.limit)
                })
            });
    }

    upper = ()=>{
        console.log(this.state.page)
        if(this.state.page == 1){
            ToastAndroid.show('这是第一页',1000);
        }
        if(this.state.page != 1){
            let i = this.state.page - 1;
            this.setState({
                page : i
            })
        }
    }
    
    lower = ()=>{
        if(this.state.page == this.state.num){
            return;
        }
        if(this.state.page != this.state.num){
            let i = this.state.page + 1;
            this.setState({
                page : i
            })
        }
    }

    render() {
        var context = this.state.data;
        var con = [];
        for(var i = 0; i < context.length; i++){
            if(context[i].title.length > 15){
                context[i].title = context[i].title.substring(0,15)+'...';
            }
        }
        con = context.slice((this.state.page-1)*this.state.limit,this.state.page*this.state.limit)
        return (
            <View style={{width:'100%',height:'100%',backgroundColor:'#d4d4d4'}}>
                <View style={{
                    textAlign: 'center',
                    alignItems: 'center',
                    flexDirection:'row',
                    justifyContent: 'center',
                    textAlignVertical: 'center',
                    height: 60,
                    backgroundColor: 'red',
                }}>
                    <TouchableOpacity style={{position:'absolute',left:18}} onPress={()=>Actions.pop()}>
                        <Icon  color='#fff'  name='angle-left' size={45}/>
                    </TouchableOpacity>
                    <Text style={{
                        color:'#fff',
                        fontSize:22
                    }}>我的发布</Text>
                    <TouchableOpacity style={{position:'absolute',right:18}} onPress={()=>Actions.pop()}>
                        <Icon1  color='#fff'  name='more-horizontal' size={45}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        keyExtractor={(item, index) => index}
                        data={con}
                        numColumns={1}
                        style={{
                            width:'100%',
                            height:500,
                            marginTop:5,
                            backgroundColor:'#fff'
                        }}
                        ListFooterComponent={
                            <View style={{
                                width:'100%',
                                flexDirection:'row',
                            }}>
                                <Button onPress={()=>this.upper()}
                                    style={{
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        textAlignVertical: 'center',
                                        width:100,
                                        height:40,
                                        backgroundColor:'red',
                                        borderRadius:10,
                                        color:'#fff',
                                        marginTop:20,
                                        marginLeft:10
                                        
                                    }}
                                >上一页</Button>
                                <Text style={{
                                    position:'absolute',
                                    left:220,
                                    top:25,
                                    fontSize:16
                                }}>第{this.state.page}页</Text>
                                <Button onPress={()=>this.lower()}
                                    style={{
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        textAlignVertical: 'center',
                                        width:100,
                                        height:40,
                                        backgroundColor:'red',
                                        borderRadius:10,
                                        color:'#fff',
                                        marginTop:20,
                                        marginLeft:260
                                        
                                    }}
                                >下一页</Button>
                            </View>
                        }
                        renderItem={({ item }) => {
                            var random = Math.round(Math.random());
                            if(random == 0){
                                return (
                                    <View style={{
                                        height:40,
                                        width:'100%',
                                        borderBottomWidth:1,
                                        borderStyle:'dashed',
                                        borderBottomColor:'#c9c9c9',
                                        flexDirection:'row',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        textAlignVertical: 'center',
                                    }}>
                                        <Text style={{position:'absolute',left:10}}>{item.title}</Text>
                                        <Text style={{position:'absolute',right:70}}>{item.create_at.substring(0,10)}</Text>
                                        <Text style={{position:'absolute',right:10}}>{answer[random]}</Text>
                                    </View>
                                )
                            }
                            if(random == 1){
                                return (
                                    <View style={{
                                        height:40,
                                        width:'100%',
                                        borderBottomWidth:1,
                                        borderStyle:'dashed',
                                        borderBottomColor:'#c9c9c9',
                                        flexDirection:'row',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        textAlignVertical: 'center',
                                    }}>
                                        <Text style={{position:'absolute',left:10}}>{item.title}</Text>
                                        <Text style={{position:'absolute',right:70}}>{item.create_at.substring(0,10)}</Text>
                                        <Text style={{position:'absolute',right:10,color:'red'}}>{answer[random]}</Text>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>
            </View>
        )
    }
}
