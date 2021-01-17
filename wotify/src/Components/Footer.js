import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img className='footer__albumLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flume_2014_%2814864514016%29_%28cropped%29.jpg/220px-Flume_2014_%2814864514016%29_%28cropped%29.jpg' alt=''/>
                <div className='footer__songInfo'>
                    <h4>On Top</h4>
                    <p>Flume</p>
                </div>
            </div>

            <div className='footer__center'>
                <ShuffleIcon className='footer__green'/>
                <SkipPreviousIcon className='footer__icon'/>
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon'/>
                <SkipNextIcon className='footer__icon'/>
                <RepeatIcon className='footer__green' />
            </div>

            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                      <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                      <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                      <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
