import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, AsyncStorage,ToastAndroid } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils';
import { MessageBarManager } from 'react-native-message-bar';
import Button from 'react-native-button';

export default class Register extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			pwd: ''
		}
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

	register = () => {
		this.setState({
			isLoading: true
		})
		myFetch.post('/register',
			{
				username: this.state.username,
				pwd: this.state.pwd
			}).then(res => {
				AsyncStorage.setItem('user', JSON.stringify(res.data))
					.then(() => {
						console.log(res.data);
						ToastAndroid.show('注册成功', 10);
						setTimeout(()=>Actions.login(),2000)

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
						onPress={() => this.register()}>
						<Text>注册</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}