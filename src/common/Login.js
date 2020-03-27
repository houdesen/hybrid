import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils';

console.disableYellowBox = false;
console.debug = false;

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			pwd: '',
			isLoading: false
		}
	}
	componentDidMount(){
		this.setState({
			isLoading: false
		})
	}

	userHandle = (text) => {
		this.setState({
			username: text
		})
	}
	pwdHandle = (text) => {
		this.setState({
			pwd: text
		})
	}

	login = () => {
		this.setState({
			isLoading: true
		})
		myFetch.post('/login',
			{
				username: this.state.username,
				pwd: this.state.pwd
			}).then(res => {
				AsyncStorage.setItem('user', JSON.stringify(res.data))
					.then(() => {
						Actions.homePage();
					})
			})
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<View
					style={{ alignItems: 'center' }}>
					<View
						style={{
							width: '80%',
							marginRight: 10,
							borderBottomColor: '#ccc',
							borderBottomWidth: 1,
							flexDirection: 'row',
							alignItems: 'center',
							paddingLeft: 20,
						}}>
						<Icon name="user" color="red" />
						<TextInput placeholder="用户名"
							onChangeText={this.userHandle}
						/>
					</View>
					<View
						style={{
							width: '80%',
							marginRight: 10,
							borderBottomColor: '#ccc',
							borderBottomWidth: 1,
							flexDirection: 'row',
							alignItems: 'center',
							paddingLeft: 20,
						}}>
						<Icon name="user" color="red" />
						<TextInput placeholder="密码" secureTextEntry={true}
							onChangeText={this.pwdHandle}
						/>
					</View>
					<TouchableOpacity
						style={{
							width: '80%',
							height: 40,
							backgroundColor: '#ccc',
							marginTop: 30,
							alignItems: 'center',
							justifyContent: 'center'
						}}
						onPress={() => this.login()}>
						<Text>登录</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => Actions.register()} style={{ left: '38%', top: '2%' }} ><Text style={{ fontSize: 16, color: "#2d65f9" }}>没有账号?注册</Text></TouchableOpacity>
				{
					this.state.isLoading
						? <View style={{ position: 'absolute', bottom: 130, left: 220 }}><Text>正在登录······</Text></View>
						: null
				}
			</View>
		);
	}
}