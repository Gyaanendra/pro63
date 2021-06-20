import  React from 'react';
import {Text,View, StyleSheet,TextInput,TouchableOpacity,Image,} from 'react-native';

export default class Dis extends React.Component {

constructor(){
    super()
    this.state = {
       isSerachPressed: false,
       word:'',
       lexicalCategory:'',
       examples:"",
       defination:'',

    }
}

getWord = (word)=>{
    var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
    return fetch(url)
    .then((data) =>{
        return data.json();
    })
    .then((response)=>{
        console.log(response);

        var word = response[0].word;
        var definition = response[0].meanings[0].definitions[0].definition;
        var lexicalCategory = response[0].meanings[0].partOfSpeech;
        var example = response[0].meanings[0].definitions[0].example;

        this.setState({
          word: word.trim(),
          definition: definition.trim(),
          lexicalCategory:lexicalCategory,
          examples:example,
        })
    }) 
}

    render(){
        return(
           <View>
               <TextInput
               style={css.input}
               placeholder=""
               onChangeText={(text) => {
                 this.setState({
                   text: text
                 });
               }}
               />
                 
         <TouchableOpacity
          style={css.button}
          onPress={() => {
            this.setState({ isSearchedPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text style={css.t1}> Search </Text>{' '}
        </TouchableOpacity>
               
        <Text style={css.t2}>Word :{this.state.word}</Text>
        <Text style={css.t2}>Definition :{this.state.definition}</Text>
         <Text style={css.t2}>Type :{this.state.lexicalCategory}</Text>
         <Text style={css.t2}>Example :{this.state.examples}</Text>


           </View>
        )
    }
}


const css = StyleSheet.create({
      input:{
          color:'#FFF5FD',
          fontSize:25,
        marginTop: 50,
        width: '25%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        borderColor: '#F54748',
        outline: 'none',
      },

      t1:{
          color:'white',
          textAlign:'center',
          fontSize:20,
          fontWeight:'bold',
      },
      
      button:{
        width: '10%',
        height: 50,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 4,
        borderRadius: 20,
        borderColor: '#DA0037',
      },


      t2:{
          color:'#FB9300',
          marginTop:100,
          marginLeft:45,
          fontSize:20,
          fontWeight:'bold',
      },

})