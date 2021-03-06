import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import PlayersContext, { addPlayer, nextPlayerIndex, removePlayer } from '../providers/PlayersContext';
import { playerEmpty, PlayerIcon } from './Player';
import { PlayerConfig } from './PlayerConfig';
import { VictoriesCounter } from './VictoriesCounter';


export const Players = ({onPlayersOkChange}) => {
  
  const [players, setPlayers] = useContext(PlayersContext);
  const [playersSlots, setPlayersSlots] = useState(()=>{
    let slots = [];
    for(var i = 1; i < 3 - players.length; i++ ){
      slots.push( {...playerEmpty(false), index: i} );
    }
    return slots;
  
  });

  useEffect(() => {
    onPlayersOkChange( playersSlots.length === 0);
  }, [playersSlots])

  const handleRemovePlayer = (player) => {
    Swal.fire({
      icon: 'info',
      html: `Are you sure to eliminate ${player.name}?`,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      showCancelButton: true,
      focusCancel: true,
      focusConfirm: false,
      timer: 4000,
      timerProgressBar: true,
    }).then((result) => {
      if(result.isConfirmed){
        removePlayer(setPlayers, player.index);
      }
    })
  }

   const handleRemovePlayerSlot = (slot) => {
    setPlayersSlots(playersSlots.filter(item => item !== slot));
  }

  const handleConfirmPlayer = (playerSlot, player) =>{
    handleRemovePlayerSlot(playerSlot);
    addPlayer(setPlayers, player);
  };

  const handleAddPlayerSlot = () => {
    setPlayersSlots(playersSlots => [...playersSlots, {...playerEmpty(false), index: nextPlayerIndex(players)}] );
  }

  return (
    <>

      <div className="row">
        <div className="col col-2 d-none d-sm-none d-md-block"> </div>
        <div className="col col-12 col-md-8 "> 
          <ul className="list-group">

            <li className="list-group-item align-items-center">
              Players
            </li>

            {players.map(player => 
              <li className="list-group-item d-flex justify-content-between align-items-center" key={`playerOk-${player.index}`}>
                <span>
                  <span className="m-1"><PlayerIcon type={player.type}/></span>
                  {player.name}
                </span>
                <span>
                  <VictoriesCounter victories={player.victories}/>
                  <button className="btn btn-outline-primary btn-sm ml-2" onClick={() => {handleRemovePlayer(player)}}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                  </button>
                </span>
              </li>
            )}

            {playersSlots.map((playerSlot, index)=> 
              <li className="list-group-item" key={playerSlot.index}>
                <PlayerConfig data={playerSlot} autoFocus={index===0} onConfirmPlayer={(player) => {handleConfirmPlayer(playerSlot, player)}} onCancelPlayer={() => handleRemovePlayerSlot(playerSlot)}/>
              </li>
            )}

            {playersSlots.length === 0 && 
              <li className="list-group-item">
                <button className="btn btn-primary" onClick={handleAddPlayerSlot}>Add Player</button>
              </li>
            }
          </ul>  
        </div>
        <div className="col col-2 d-none d-sm-none d-md-block"> </div>
      </div>
    </>
  )
}