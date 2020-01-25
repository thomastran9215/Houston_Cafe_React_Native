import React, { Component } from 'react';
import { Icon, Card, Text, PricingCard, SocialIcon } from 'react-native-elements';
import { StyleSheet, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import Modal from "react-native-modal";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class LogoTitle extends React.Component {
	render() {
	  return (
		<View>
			<Icon
				name='rocket'
				color="#123752"
				type='font-awesome'
			/>
			<Text>{this.title}</Text>
		</View>
	  );
	}
  }

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Home',
		headerTitle: () => <LogoTitle />,
		headerStyle: {
			backgroundColor: '#AA5839',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	};
  
	render() {
	  return (
		<ScrollView>  
			<View style={styles.myView}>
				<Text 
					h1 
					style={styles.title}>Houston Café
				</Text>
          		<Text h4 style={styles.title2}> "Your local coffee shop" </Text>
		  	</View>
			<View style={styles.container2}>
				<Button
					title=" Order"
					color='white'
					backgroundColor='red'
					//style={styles.button2}
					onPress={() => {
					this.props.navigation.navigate('Order');
					}}
				/>
				<Button
					title="About Us"
					color='white'
					//style={styles.button2}
					onPress={() => {this.props.navigation.navigate('AboutUs');}}
				/>
			</View>
			{ZapApp()}
		</ScrollView>
	  );
	}
  }

  class AboutUsScreen extends React.Component {
	static navigationOptions = {
	  title: 'AboutUs',
	  headerTitle: () => <LogoTitle />,
		headerStyle: {
			backgroundColor: '#AA5839',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	};
  
	render() {
	  const { navigation } = this.props;
  
	  return (
		  <ScrollView>
			<View style={styles.container}>
				<View style={styles.myView}
				>
					<Text h4 style={styles.title2}>      About Us      </Text>
				</View>
				<View 
					style={styles.container2}
				>
					<Button
						title="Home"
						color='white'
						style={styles.button2}
						onPress={() => this.props.navigation.navigate('Home')}
					/>
					<Button
						title="Order"
						color='white'
						style={styles.button2}
						onPress={() => this.props.navigation.navigate('Order')}
					/>
					<Button
						title="Go back"
						color='white'
						style={styles.button2}
						onPress={() => this.props.navigation.goBack()}
					/>
				</View>
					<Card 
						title="Our Mission"
						backgroundColor ="#FFDAAA"
						image={{uri: 'https://images.unsplash.com/photo-1482059470115-0aadd6bf6834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}}
					>
						<Text 
							style={{margin: 10}}>Houston Cafe's mission is to bring you coffee that is out of this world! Formed in 2019 by Daniel Garcia and Thomas Tran, our brand is committed to provide its customers with the freshest products and best customer service possible. We select only the best coffee from around the world, imported from the most prestigest coffee producing regions around the world. Our coffee baristas are trained extensively to eat, sleep, breath, and produce the finest coffee drinks.
						</Text>
					</Card>
					<Card 
						title="Reaching the Community"
						backgroundColor ="#FFDAAA"
						image={{uri: 'https://images.unsplash.com/photo-1461709444300-a6217cec3dff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80'}}
					>
						<Text 
							style={{margin: 10}}>Houston Cafe believes that community suport is a fundamental way to make a difference in our local community. We support local schools in the area by being involved with various organizations that reach our schools. Education is vital to success for the next generation. We want to let you know that we care about our community and want people in our community to stay.
						</Text>
					</Card>
					<Icon 
						size ={20}
						name='rocket'
						color="#FFDAAA"
						type='font-awesome'
						style={{margin: 10}}
					/>
					<View style={styles.container3}>
						<SocialIcon
							type='twitter'
						/>
						<SocialIcon
							type='facebook'
						/>
						<SocialIcon
							type='youtube'
						/>
						<SocialIcon
							type='steam'
						/>
					</View>
				</View>
		</ScrollView>
	  );
	}
  }

  class OrderScreen extends React.Component {
	static navigationOptions = {
	  title: 'Order',
	  headerTitle: () => <LogoTitle />,
		headerStyle: {
			backgroundColor: '#AA5839',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	};
  
	render() {
  
	  return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.myView}
				>
					<Text h4 style={styles.title2}>      Order Now      </Text>
				</View>
				<View 
					style={styles.container2}
				>
					<Button
						title="Home"
						color='white'
						style={styles.button2}
						onPress={() => this.props.navigation.navigate('Home')}
					/>
					<Button
						title="About Us"
						color='white'
						style={styles.button2}
						onPress={() => this.props.navigation.navigate('AboutUs')}
					/>
					<Button
						title="Go back"
						color='white'
						style={styles.button2}
						onPress={() => this.props.navigation.goBack()}
					/>
				</View>
				<View //style={styles.container2}
					backgroundColor='#FFDAAA'
				>
					<Card 
						//title="You can order anothing from our menu"
					>
						<Text 
							style={{margin: 10}}>You can order anything from our menu
						</Text>
					</Card>
					<PricingCard
						color='green'
						title='Uber Eats'
						price='$'
						info={['Fast Delivery']}
						button={{ title: ' GET STARTED', icon: 'directions-car' }}
					/>
					<PricingCard
						color='red'
						title='DoorDash'
						price='$$'
						info={['Best Price']}
						button={{ title: 'GET STARTED', icon: 'directions-run' }}
					/>
					<PricingCard
						color='blue'
						title='Telephone'
						price='$$$'
						info={['5-star Service']}
						button={{ title: ' GIVE US A CALL!', icon: 'phone' }}
					/>
				</View>
				<Icon 
					size ={20}
					name='rocket'
					color="#FFDAAA"
					type='font-awesome'
					style={{margin: 10}}
				/>
				<View style={styles.container3}>
					<SocialIcon
						type='twitter'
					/>
					<SocialIcon
						type='facebook'
					/>
					<SocialIcon
						type='youtube'
					/>
					<SocialIcon
						type='github'
					/>
				</View>
			</View>
		</ScrollView>
	  );
	}
  }
  
  const RootStack = createStackNavigator(
	{
	  Home: HomeScreen,
	  Order: OrderScreen,
	  AboutUs: AboutUsScreen,
	},
	{
	  initialRouteName: 'Home',
	}
  );
  
  const AppContainer = createAppContainer(RootStack);

  export default class App extends React.Component {
	render() {
	  return <AppContainer />;
	}
  }

function ZapApp() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card 
			title="Join Houston Coffee® Rewards"
			backgroundColor ="#FFDAAA"
			image={{uri: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=762&q=80'}}
        >
            <Text style={{margin: 10}}>Get points towards free coffee. Each purchase qualifies for at least 100 points. Don't miss out on this great opportunity. Our top customers are already earning. What are you waiting for?</Text>
            <Button 
				raised 
				title='JOIN NOW!'
				backgroundColor='#AA5839' 
				color='#AA5839'
				//onPress={() => MyComponent.openModal()}
				//onPress={toggleModal()}
			/>
        </Card>
        <Card 
          title="You are what you eat"
          backgroundColor ="#FFDAAA"
          image={{uri: 'https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=819&q=80'}}
        >
            <Text style={{margin: 10}}>In Houston Café we care about your well-being. This is why we recommend daily exercise and a balanced nutrition. </Text>
            <Button title='Nutritional Information' color='#AA5839' />
        </Card>

        <Card
        title="Contact Information"
        backgroundColor ="#FFDAAA"
        >
          <Text> 1234 Westheimer Road </Text>
          <Text> Houston, TX 77032 </Text>
          <Text> U.S.A. </Text>
          <Text> Phone: 1-206-555-1234 </Text>
          <Text> Email: houston@cafe.com </Text>
        </Card> 
        <Icon 
          size ={20}
          name='rocket'
          color="#FFDAAA"
          type='font-awesome'
          style={{margin: 10}}/>
		<View style={styles.container3}>
			<SocialIcon
				type='twitter'
			/>
			<SocialIcon
				type='facebook'
			/>
			<SocialIcon
				type='youtube'
			/>
			<SocialIcon
				type='instagram'
			/>
		</View>
      </ View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDAAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myView: {
    backgroundColor: '#AA5839',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  title: {
    backgroundColor: '#AA5839',
    color: 'white',
    fontFamily: 'Trebuchet MS'
  },
  title2: {
    backgroundColor: '#AA5839',
    color: 'white',
    fontFamily: 'Trebuchet MS',
    
  },
  Card: {
    color: '#FFDAAA',
  },
  container2: {
    flex: 0,
    flexDirection: 'row',
	justifyContent: 'space-around',
	margin: 1,
	padding: 5,
	backgroundColor: '#AA7939'
  },
  container3: {
    flex: 0,
    flexDirection: 'row',
	justifyContent: 'space-around',
	margin: 1,
	padding: 5,
	backgroundColor: '#FFDAAA'
  },
  button2: {
    width: '40%',
	height: 40,
	color: 'white'
  }
});
