// Imports All required files for this page
import React from 'react';
import Home from './Home';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import MyMusic from './MyMusic';

class Screen extends React.Component{
//    Render and display all heading like Home Music Games Settings MyMusic with their child call
    render(){
        return(
            <div style={styles.screen} id='screen-container'>
                {this.props.activePage==='Home'?<Home activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Music'?<Music style={styles.backgroung} activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Games'?<Games /> : null}
                {this.props.activePage==='Settings'?<Settings /> : null}
                {this.props.activePage==='MyMusic'?<MyMusic audio={this.props.audio} /> : null}
                {/* {this.props.activePage==='Artists'?<Artists /> : null} */}
                
            </div>
        );
    }
    
}
// Styles for screen components
const styles = {
    screen : {
        height : '50%',
        width : '95%',
        borderRadius : '12px',
        backgroundColor : 'blue',
        border : '2px solid black',
        marginTop : '1rem'
    },
    backgroung:{
    backgroundColor:"yellow"
    }
}

export default Screen;