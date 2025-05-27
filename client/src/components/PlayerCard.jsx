import React from 'react'

const PlayerCard = ({playerName,teamName,matches,kills,kd,headShots,longestShot,Damage,survival,Revives,Finishes}) => {
  return (
    <>
      {/* Player Name & Role */}
      <div className="">
        <h2 className="md:text-3xl text-xl font-bold text-yellow-400">{playerName}</h2>
        <p className="text-sm text-gray-400">
          {teamName}
        </p>
      </div>

      {/* Player Stats */}
      <div className="grid grid-cols-2 gap-4 mt-2 md:mt-0 text-sm">
        <div>
          <p className="text-gray-400">Matches</p>
          <p className="text-lg font-semibold">{matches}</p>
        </div>
        <div>
          <p className="text-gray-400">Kills</p>
          <p className="text-lg font-semibold">{kills}</p>
        </div>
        <div>
          <p className="text-gray-400">K/D Ratio</p>
          <p className="text-lg font-semibold">{kd}</p>
        </div>
        <div>
          <p className="text-gray-400">Headshot %</p>
          <p className="text-lg font-semibold">{headShots}</p>
        </div>
        <div>
          <p className="text-gray-400">Longest Kill</p>
          <p className="text-lg font-semibold">{longestShot}</p>
        </div>
        <div>
          <p className="text-gray-400">Total Damage</p>
          <p className="text-lg font-semibold">{Damage}</p>
        </div>
        <div>
          <p className="text-gray-400">Avg. Survival</p>
          <p className="text-lg font-semibold">{survival}</p>
        </div>
        <div>
          <p className="text-gray-400">Revives</p>
          <p className="text-lg font-semibold">{Revives}</p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-400">Top 5 Finishes</p>
          <p className="text-lg font-semibold">{Finishes}</p>
        </div>
      </div>
    </>
  );
}

export default PlayerCard