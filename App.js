import React, { Component, useState, useEffect } from 'react';
import { Router, Scene, Tabs, Overlay, Drawer, Lightbox, Modal, Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import {
	StyleSheet, View, Text, Image,
	BackHandler, ToastAndroid, AsyncStorage
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Userinfor from './src/userinfor/Userinfor';
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage'
import Register from './src/common/Register'
import Release from './src/userinfor/Release';
console.disableYellowBox = false;

const App = () => {
	let [isLogin, setLogin] = useState(false);
	let [isInstall, setInstall] = useState(true);
	let now = 0;
	let init = () => {
		AsyncStorage.getItem('isInstall')
			.then(res => {
				if (res) {
					setInstall(false);
				}
			})
		AsyncStorage.getItem('user')
			.then(res => {
				let user = JSON.parse(res)
				if (!user) {
					SplashScreen.hide();
				}
				if (user && user.token) {
					setLogin(true);
					SplashScreen.hide();
				}
			})
	}
	useEffect(() => {
		init();
	}, [])
	let afterInstall = () => {
		setInstall(false)
	}
	if (isInstall) {
		return <View style={{ flex: 1 }}>
			<SwiperPage afterInstall={afterInstall} />
		</View>
	}

	return (
		<Router backAndroidHandler={() => {
			if (Actions.currentScene == "login") {
				if (new Date().getTime() - now < 2000) {
					BackHandler.exitApp();
				} else {
					ToastAndroid.show('确定要退出吗', 100);
					now = new Date().getTime();
					return true;
				}
				return true;
			} else if (Actions.currentScene == "home") {
				ToastAndroid.show('这是首页,请退出登录', 100);
				Actions.homePage();
				return true;
			} else {
				
			}
		}}>
			<Scene key='root'>
				<Tabs key='tabBar' hideNavBar
					activeTintColor='red'
					inactiveTintColor='blue'
					tabBarStyle={{ backgroundColor: '#d4d4d4' }}
				>
					{/**首页 */}
					<Scene key='homePage' hideNavBar title='首页' icon={({ focused }) => <Icon color={focused ? 'red' : 'blue'} name='home' size='md' />}>
						<Scene key='home' component={Home} />
					</Scene>
					{/* 消息栏 */}
					<Scene key='shopPage' hideNavBar title='商品' icon={({ focused }) => <Icon color={focused ? 'red' : 'blue'} name='shop' size='md' />}>
						<Scene key='shop' component={Goods} />
					</Scene>
					{/**存储 */}
					<Scene key='myPage' hideNavBar title='我的' icon={({ focused }) => <Icon color={focused ? 'red' : 'blue'} name='user' size='md' />}>
						<Scene hideDrawerButton key='my' component={Userinfor} />
					</Scene>
				</Tabs>
				<Scene initial={true} hideNavBar key='login' component={Login} />
				<Scene key='register' hideNavBar component={Register} />
				<Scene key='release' hideNavBar component={Release} />
			</Scene>
		</Router>
	);


};

const styles = StyleSheet.create({

});

export default App;
