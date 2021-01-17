import React from 'react';
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from '../Dal/DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body( { spotify }) {
    const [{ active_playlist, search }, dispatch] = useDataLayerValue();

    function filterTracksBySearch() {
        if(!search) {
            return active_playlist?.tracks.items;
        }
        return active_playlist?.tracks.items.filter(doesTrackContainSearch);
    }

    function doesTrackContainSearch(item) {
        let track = item.track;
        let doesSearchMatch = 
            track.name.toLowerCase().includes(search) 
            || track.album.name.toLowerCase().includes(search) 
            || track.artists.some((artist) => artist.name.toLowerCase().includes(search));

        //console.log(track.name, doesSearchMatch);
        return(doesSearchMatch);
    }

    return (
        <div className='body'>
            <Header spotify={spotify}/>

            <div className='body__info'>
                <img src={active_playlist?.images[0].url} alt='' />
                <div className='body__infoText'> 
                    <strong>PLAYLIST</strong>
                    <h2>{active_playlist?.name}</h2>
                    <p>{active_playlist?.description}</p>
                </div>
            </div>

            <div className='body__songs'>
                <div className='body__icons'>
                    <PlayCircleFilledIcon className='body__shuffle'/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon/>
                </div>
                {filterTracksBySearch()?.map((item) => (<SongRow track={item.track}/>))}
            </div>

        </div>
    )
}

export default Body
