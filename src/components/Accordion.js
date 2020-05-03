import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'#441380'} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={{}}>
                    <FlatList
                        data={this.state.data}
                        numColumns={1}
                        scrollEnabled={true}
                        renderItem={({item, index}) => 
                            <View>
                                <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnInActive : styles.btnActive]} onPress={()=>this.onClick(index)}>
                                    <Text style={[styles.font, styles.itemInActive]} >{item.key}</Text>
                                    { this.renderIconAdd(item) }
                                </TouchableOpacity>
                            </View>
                        }/>
                </View>
            }
            
       </View>
    )
  }

  renderIconAdd=(item)=> {
    if(item.add)
        return <Icon name={'add'} size={24} color={ item.value ? '#fff' : '#fff'} />;
  }

  onClick=(index)=>{
    const temp = this.state.data.slice()
    temp[index].value = !temp[index].value
    this.setState({data: temp})
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'center',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
    },
    title:{
        fontSize: 14,
        color: '#5F1AB3',
    },
    itemActive:{
        fontSize: 12,
        color: '#fff',
    },
    itemInActive:{
        fontSize: 12,
        color: '#fff',
    },
    btnActive:{
        borderColor: '#fff',
    },
    btnInActive:{
        borderColor: '#fff',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        borderColor:'#441380',
        borderWidth: 1,
        borderRadius: 10,
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#441380',
    },
    parentHr:{
        height:1,
        color: '#fff',
        width:'100%'
    },
    colorActive:{
        borderColor:'#5F1AB3',
    },
    colorInActive:{
        borderColor: '#5F1AB3',
    }
    
});