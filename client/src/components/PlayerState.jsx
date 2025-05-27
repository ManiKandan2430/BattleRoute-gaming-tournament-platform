import React from 'react'
import PlayerCard from './PlayerCard'

const PlayerState = () => {
  return (
    <div className="dashboard-page">
      <h1>Player statustics</h1>
      <section className="absolute flex flex-col justify-center p-4 md:p-8 left-5 md:left-[10%] w-[90%] md:w-[80%] top-[20%] md:top-16 ring ring-pink-100/30 rounded-lg shadow-2xl shadow-pink-600/20">
        <PlayerCard
          playerName="I AM ODIN"
          teamName="Team JOD • Entry Hellfire"
          matches="32"
          kills="500"
          kd="5.7"
          headShots="68.4%"
          longestShot="666m"
          Damage="4000"
          survival="23mins"
          Revives="42"
          Finishes="6x"
        />
      </section>
    </div>
  );
}

export default PlayerState