import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Home.css';

class Home extends React.Component{
    
    // Render and Display Home display of ipod using listgroup
    render(){
        return(
            <div style={styles.homeScreen} id='home-screen'>
                <div style={styles.menuList} id='menu-list'>
                    <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                       
                    </div>
                    <ListGroup style={{borderRadius:'0',display:"overflow"}}>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='NowPlaying'?'active':''}>
                          
                            Now Playing {this.props.activeItem==='NowPlaying'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Music'?'active':''}>
                            Music {this.props.activeItem==='Music'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Games'?'active':''}>
                            Games {this.props.activeItem==='Games'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Settings'?'active':''}>
                            Settings {this.props.activeItem==='Settings'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={styles.imageContainer} id='image-container'>
                </div>
            </div>
        );
    }
    
}
// CSS Styles for this page
const styles = {
    homeScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row'
    },
    menuList : {
        //border:'1px solid black',
        height : '100%',
        width : '50%',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex : '1'
    },
    imageContainer : {
        //border:'1px solid black',
        height : '100%',
        width : '50%',
        backgroundImage : 'url("https://lh3.googleusercontent.com/swlfr7pE5dbdrw1SlsdQD3V-IckOoUDAbjnNyeMt_rF2k0BzWMGPEdNGFeH3pY68PHImrDzBK5_8SgZ8xWIy_GdBxtoIhXb6oFCgW2bzpzuWrdEYyCdmetQtr7eE0XLV8DFPY02uVh7QTK4C4TWi5izsliTnopy1VD56usyg7qScjlH45o9pOxYMawotFZSPjvSvwfg5QZNLm0kHrMliqAsYBUC-CklKxUvFm4W4fy-RJd6yw9cQ_0GWTijES9-9vv5NlPa4ufmMLSs0aaPqLqznZPPY2Dw1ku0Zdn-fa_EUXJDEhsv3OHqIGl0bTEm_o4AwfOcGFU9zDnpzR40qXRDj_ekNc3o8chvGtGGklLJ05oJXHO0H7YPBccIee54Bxg7fvsN8QxLdWNr_Z16_mIOcSIrR3cvAZsfsRsM9hHF3ogIsnZAEW_OFESCxQjMebqaagGXHyBtfz_qsJ3g8N8K_Ves4oAYUjQLPYk3qkoy0P6k1cJptWiHXkEsu3YeGi_j7996h-JKivYs_iayEe_718FVP8jGM3bVXMOan9-PK2mpYDVKRV0oP6cxKmZFDmkxqLzZCtkeXXgheXr8MH-5ccL9fRae0f_YLCxP8WF7Dsno6TDHTD5SfqHLdku_-mB1Nh4g_bGx8c4TutQXqGHnFIq4fRrklIppy1WUezaBm1KkNbohOvZroRRMineI0tJeMICW20Zzc1WHOhVk1YPg7=w1097-h820-no?authuser=0")',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        borderRadius : '0 12px 12px 0'
    },
    titleBar : {
        height:'10%',
        width:'91%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
   
}

export default Home;