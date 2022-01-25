import React from 'react';

class Settings extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >
            {/* Display Setting page with title ipod Setting and one Setting image */}
                <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod Setting</p>
                       
                </div>
                <div style={{width : '100%' , height : '90%',display:'flex' , flexDirection : 'row' , justifyContent: 'center'}}>
                    <img style={styles.image} src="data:image/png;base64,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" />
                </div>
            </div>
        );
    }
    
}
// Styles for Setting Items
const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'65%',
        height:'65%',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
  
}
// Export Setting as default
export default Settings;