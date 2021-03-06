import React from 'react';
import Paper from '@material-ui/core/Paper';
import backImage from '../../assests/backgrounds/backgroundHome.jpg';

const style = {
    paperContainer: {
      backgroundImage: `url(${backImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: 700, 
    },
  
  }

const About = () => {

    return(
        <Paper style={style.paperContainer}>
        <div className="AboutPage" style={{padding: '40px', fontStyle:"normal"}}>
           
           <h1 style={{ fontFamily:"Calibri " , fontSize:50 , fontStyle:"Italic" , color:"purple"}}>Welcome to Renouick!</h1>
                <h2>What is Renouick?</h2>
                <div style={{fontSize:18}} >
        <p>Renouick is a way to connect customers and workers. </p>
        <p>We provide the services to customers who want to find workers and also to the workers who want to promote their services.</p>
        <p>In the current society people face problems in finding workers for their day to day problems.</p> 
        <p>Even if many workers are available, most of the cases, workers can't be founded for a particular work easily, when needed.</p> 
        </div>
        <p style={{ fontFamily:"Calibri " , fontSize:20 , fontStyle:"Italic" , color:"brown"}}>That is why we provided a solution by introducing Renouick.</p>
        <p style={{fontSize:18}}>In here we provide the facilities for customers 
            <ul>
                <li>to post jobs</li>
                <li>to bid</li>
                <li>to contact workers</li>
            </ul>
            and for workers
            <ul>
                <li>to contact customers</li>
                <li>to select jobs</li>
            </ul>
            </p>
                    
        </div>
        </Paper>
    );
};

export default About;

