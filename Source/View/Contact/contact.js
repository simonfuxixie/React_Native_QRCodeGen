/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Linking,ScrollView, Text,Image, View,Dimensions,TouchableOpacity} from 'react-native';
import GlobalInclude from "../../Global/GlobalInclude/globalinclude.js";
import {Toast,Form} from 'native-base'
import { TextField } from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

let deviceW = Dimensions.get('window').width;

  export default class App extends Component<Props> {

      constructor(props) {
          super(props);
          this.state = {
                        success: 1,
                        firstname: '',
                        lastname: '',
                        email: ''
                      };
          this.onSubmit = this.onSubmit.bind(this);
          this.onChangeText = this.onChangeText.bind(this);
          this.onSubmitFirstName = this.onSubmitFirstName.bind(this);
          this.onSubmitLastName = this.onSubmitLastName.bind(this);
          this.onSubmitEmail = this.onSubmitEmail.bind(this);
          this.firstnameRef = this.updateRef.bind(this, 'firstname');
          this.lastnameRef = this.updateRef.bind(this, 'lastname');
          this.emailRef = this.updateRef.bind(this, 'email');
    }

    componentWillMount(){

        this.setState({
                      success:1
                      })
    }

    // BEGIN ONCHANGE ALL TEXTFIELD
    onChangeText(text) {
      ['firstname', 'lastname', 'email']
        .map((name) => ({ name, ref: this[name] }))
        .forEach(({ name, ref }) => {
          if (ref.isFocused()) {
            this.setState({ [name]: text });
          }
        });
    }
    // END ONCHANGE ALL TEXTFIELD


    // BEGIN FIRSTNAME METHOD
    onSubmitFirstName() {

    }
    // END FIRSTNAME METHOD

    // BEGIN LASTNAME METHOD
    onSubmitLastName() {

    }
    // END LASTNAME METHOD


    // BEGIN EMAIL METHOD
    onSubmitEmail() {

    }
    // END EMAIL METHOD


    // BEGIN SUBMIT METHOD
    onSubmit() {
        let errors = {};
        let is_submit = 0;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        ['firstname', 'lastname', 'email']
          .forEach((name) => {
            let value = this[name].value();

            if (!value) {
              errors[name] = ' ';
              is_submit = 0;
            }
            else if ('email' === name && reg.test(value) === false) {
              errors[name] = 'Incorrect email'
              is_submit = 0;
            }
            else {
              is_submit = 1;

            }
          });

          this.setState({ errors });

          if(is_submit == 1){
            this.setState({
              firstname: '',
              lastname: '',
              email:'',
              success:0
            })
            this.setState({
              firstname: '',
              lastname: '',
              email:'',
              success:1
            })
            Toast.show({
                text: 'Submit Successfully',
                textStyle:{textAlign:"center",
                color:'#ffffff',
                fontSize: 15},
                style:{backgroundColor: "#99e892",yOffset: 40,alignSelf:"center",alignItems:"center"},
            })
          }
    }
    // END SUBMIT METHOD

    // BEGIN UPDATE TEXTFIELD
    updateRef(name, ref) {
      this[name] = ref;
    }
    // END UPDATE TEXTFIELD



    render() {
          let { errors = {}, ...data } = this.state;
          let { firstname = '', lastname = '', email = '' } = data;

          if (this.state.success == 1) {

          return (
              <View style = {{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#D3D3D3'}}>

                <View style={{backgroundColor:'#D3D3D3',width:deviceW-40,maxHeight: Dimensions.get('window').height-150}}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{backgroundColor:'white'}}>
                      <Form>
                          {/* BEGIN FIRSTNAME TEXTFIELD */}
                          <TextField
                            ref={this.firstnameRef}
                            defaultValue=''
                            value={this.state.firstname}
                            autoCorrect={false}
                            onChangeText={this.onChangeText}
                            onSubmitEditing={this.onSubmitFirstName}
                            returnKeyType='default'
                            label='First Name'
                            containerStyle={{width:'85%',alignSelf:"center"}}
                            labelTextStyle={{color:"black"}}
                            baseColor={"black"}
                            tintColor={"black"}
                            errorColor={"red"}
                            error={errors.firstname}
                          />
                          {/* END FIRSTNAME TEXTFIELD */}

                          {/* BEGIN LASTNAME TEXTFIELD */}
                          <TextField
                            ref={this.lastnameRef}
                            defaultValue=''
                            value={this.state.lastname}
                            autoCorrect={false}
                            onChangeText={this.onChangeText}
                            onSubmitEditing={this.onSubmitLastName}
                            returnKeyType='default'
                            label='Message'
                            containerStyle={{width:'85%',alignSelf:"center"}}
                            labelTextStyle={{color:"black"}}
                            baseColor={"black"}
                            tintColor={"black"}
                            errorColor={"red"}
                            multiline={true}
                            error={errors.lastname}
                          />
                          {/* END LASTNAME TEXTFIELD */}

                          {/* BEGIN EMAIL TEXTFIELD */}
                          <TextField
                            ref={this.emailRef}
                            defaultValue=''
                            value={this.state.email}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={this.onChangeText}
                            onSubmitEditing={this.onSubmitEmail}
                            returnKeyType='default'
                            label='Email Address'
                            containerStyle={{width:'85%',alignSelf:"center"}}
                            labelTextStyle={{color:"black"}}
                            baseColor={"black"}
                            tintColor={"black"}
                            errorColor={"red"}
                            error={errors.email}
                          />
                          {/* END EMAIL TEXTFIELD */}

                    </Form>

                          {/* BEGIN SUBMIT VIEW */}
                          <TouchableOpacity style={{ backgroundColor: '#FF5000' ,width:'85%',fontSize:15,height:40,textAlign:'center',color:'white',fontWeight:"bold",padding: 10,marginTop:10,alignSelf:"center",alignItems:"center",marginBottom:10, borderRadius:10}} activeOpacity = { 1 } onPress={this.onSubmit}>
                              <Text style={{color:"white",textAlign:'center'}}>Submit</Text>
                          </TouchableOpacity>
                          {/* END SUBMIT VIEW */}
                    </View>
              </ScrollView>

              </View>


            </View>
        );

    }else {
            return (
              <View>
              {/* EMPTY VIEW */}
              </View>
            );
          }

   }

 }
