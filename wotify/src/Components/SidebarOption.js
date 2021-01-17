import React from 'react';
import './SidebarOption.css';
import { useDataLayerValue } from '../Dal/DataLayer';

function SidebarOption( {title, id, resetSearch, Icon}) {
    const [{ spotify }, dispatch] = useDataLayerValue();

    function updateActivePlaylist() {
        if(!id) {
            return;
        }
        
        spotify.getPlaylist(id)
            .then(response => 
                dispatch({
                    type: 'SET_ACTIVE_PLAYLIST',
                    active_playlist: response,
        }))
    }

    return (
        <div onClick={updateActivePlaylist} className='sidebarOption'>
            {Icon && <Icon className='sidebarOption__icon'/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
            
        </div>
    )
}

export default SidebarOption
