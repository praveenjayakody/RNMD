import React from 'react';
import { Text, View, Alert } from 'react-native';
import { Button, Appbar } from 'react-native-paper';

export default class MainSceen extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            userInfo:{},
            isLoading: false
        }
    }
	
	render () {
		return ([
		  (
			<Appbar.Header key="1">
			  <Appbar.Content
				title={<Text>Hello</Text>}
				subtitle={<Text>Subtitle</Text>}
			  />
			  <Appbar.Action icon="filter" onPress={() => {
				Alert.alert("Alert", "You pressed on the filter button!");
			  }}/>
			</Appbar.Header>
		  ),
		  (
			<View key="2" style={{margin: 10}}>
				<Button icon="camera" mode="contained" onPress={() => Alert.alert("Alert", "You pressed on the contained button!")}>
					Press me
				</Button>
				<Button icon="camera" mode="outlined" onPress={() => Alert.alert("Alert", "You pressed on the outlined button!")} style={{marginTop: 10}}>
					Press me
				</Button>
			</View>
		  )
		]);

	}
}