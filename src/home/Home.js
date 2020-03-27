import React, { Component, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TextInput,
	Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';


const { width } = Dimensions.get('window');

export default class Home extends Component {
	render() {
		return (
			<View>
				<View
					style={{
						alignItems: 'center',
						height: '8%',
						backgroundColor: 'red',
					}}>
					<Icon color='#fff' name='search1' size={12} style={{
						position: 'absolute', top: 24, left: 33, zIndex: 5, fontSize: 30
					}} />
					<TextInput
						placeholderTextColor='#fff'
						placeholder='请输入商品名称'
						style={{
							borderColor: '#ccc',
							backgroundColor: '#fbb8b8',
							marginTop: 20,
							marginLeft: -40,
							paddingLeft: 50,
							width: width*0.8,
							height: 40,
							borderRadius: 20,
						}}
					/>
					<Icon color='#fff' name='shoppingcart' size={12} style={{
						position: 'absolute', top: 18, right: 15, fontSize: 40
					}} />
				</View>
				<View style={styles.slide}>
					<Swiper
						loop={true}
						autoplay={true}
						autoplayTimeout={4}
						showsButtons={false}
						showPagination={true}
						paginationStyle={{bottom: 10}}
						dot={<View style={{width: 10,
							height: 10,
							borderRadius: 5,
							backgroundColor: '#fff',
							marginLeft:13
						}}></View>}
						activeDot={<View style={{width: 10,
							height: 10,
							borderRadius: 5,
							backgroundColor: '#ff0000',
							marginLeft:13
						}}></View>}
					>
						<View style={styles.slide}>
							<Image style={{ width: width, height: 200 }} source={require('../../assets/1.00.gif')} />
						</View>
						<View style={styles.slide}>
							<Image style={{ width: width, height: 200 }} source={require('../../assets/2.1.gif')} />
						</View>
						<View style={styles.slide}>
							<Image style={{ width: width, height: 200 }} source={require('../../assets/1.00.gif')} />
						</View>
					</Swiper>
				</View>
				<View style={{ width: '100%', height: '100%', backgroundColor: '#f5f5f5' }}>
					<View style={styles.box}>
						<View style={[styles.img, { backgroundColor: '#ffcccc' }]}>
							<Image style={{ marginTop: 10 }} source={require('../../assets/2.2.png')} />
						</View>
						<Text style={{ fontSize: 22, marginLeft: 30, marginTop: 26, color: '#5a5a5a' }}>居家维修保养</Text>
						<Icon name='right' size={18} style={{ color: '#5a5a5a', position: 'absolute', right: 10, top: 30 }} />
					</View>
					<View style={styles.box}>
						<View style={[styles.img, { backgroundColor: '#ffe1b1' }]}>
							<Image style={{ marginTop: 10 }} source={require('../../assets/2.4.png')} />
						</View>
						<Text style={{ fontSize: 22, marginLeft: 30, marginTop: 26, color: '#5a5a5a' }}>住宿优惠</Text>
						<Icon name='right' size={18} style={{ color: '#5a5a5a', position: 'absolute', right: 10, top: 30 }} />
					</View>
					<View style={styles.box}>
						<View style={[styles.img, { backgroundColor: '#bfe6a8', }]}>
							<Image style={{ marginTop: 12 }} source={require('../../assets/2.3.png')} />
						</View>
						<Text style={{ fontSize: 22, marginLeft: 30, marginTop: 26, color: '#5a5a5a' }}>出行接送</Text>
						<Icon name='right' size={18} style={{ color: '#5a5a5a', position: 'absolute', right: 10, top: 30 }} />
					</View>
					<View style={styles.box}>
						<View style={[styles.img, { backgroundColor: '#c3ddf2' }]}>
							<Image style={{ marginTop: 10 }} source={require('../../assets/2.5.png')} />
						</View>
						<Text style={{ fontSize: 22, marginLeft: 30, marginTop: 26, color: '#5a5a5a' }}>E族活动</Text>
						<Icon name='right' size={18} style={{ color: '#5a5a5a', position: 'absolute', right: 10, top: 30 }} />
					</View>
				</View>
				<View style={{ width: width, alignItems: 'center', position: 'absolute', top: 670, }}>
					<Button style={styles.btn}>发布需求</Button>
					<Text style={{ marginTop: 25, color: '#c9c9c9' }}>©E族之家 版权所有</Text>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	slide: {
		width: width,
		height: 200,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
	box: {
		width: width,
		height: 80,
		marginTop: 10,
		backgroundColor: '#fff',
		flexDirection: 'row',
	},
	img: {
		width: 60,
		height: 60,
		borderRadius: 40,
		marginTop: 10,
		marginLeft: 10,
		alignItems: 'center',

	},
	btn: {
		width: width * 0.7,
		height: 45,
		backgroundColor: '#ff0000',
		color: '#fff',
		borderRadius: 10,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		textAlignVertical: 'center',
	}
});