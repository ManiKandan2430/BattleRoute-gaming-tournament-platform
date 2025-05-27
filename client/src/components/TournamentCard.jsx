import { useState, useEffect } from "react";
import "../index.css";
import { useTimer } from "react-timer-hook";

const TournamentCard = ({ game, joined }) => {
  const [joinCount, setJoinCount] = useState(Math.floor(Math.random() * 100));
  const [hasJoined, setHasJoined] = useState(false);
  const playerLimit = 100;

  // Timer setup
  const getNewExpiry = () => {
    const time = new Date();
    time.setMinutes(time.getMinutes() + 30);
    return time;
  };

  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp: getNewExpiry(),
    onExpire: () => restart(getNewExpiry()),
  });

  // ✅ Reset join state on mount
  useEffect(() => {
    setHasJoined(false);
    setJoinCount(Math.floor(Math.random() * 100)); // Optional: Reset join count too
  }, [game]); // Triggers reset when a new game is passed

  const handleJoin = () => {
    if (!hasJoined && joinCount < playerLimit) {
      setJoinCount(joinCount + 1);
      setHasJoined(true);
      setTimeout(() => joined(false), 3000);
    }
  };

  const renderJoinButton = () => {
    if (joinCount >= playerLimit) {
      return (
        <button className="join-btn cursor-not-allowed bg-gray-400" disabled>
          Full
        </button>
      );
    }

    if (hasJoined) {
      return (
        <button className="join-btn bg-blue-600 cursor-default" disabled>
          Joined
        </button>
      );
    }

    return (
      <button onClick={handleJoin} className="join-btn">
        Join Now
        <p>
          <span className="text-slate-200/80">₹500</span>
          <span className="absolute w-[12%] h-0.5 bg-slate-50/90 right-27 md:right-30 bottom-13.5 md:bottom-11" />
        </p>
        ₹100
      </button>
    );
  };

  return (
    <div className="card">
      <img className="Banner" src={game.image} alt={`${game.title} Banner`} />
      <div className="card-content">
        <div className="space-y-5">
          <p>
            <strong>Mode:</strong> {game.mode}
          </p>
          <p>
            <strong>Prize Pool:</strong> {game.prize}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-green-500 bg-green-500/8 px-2 py-1 rounded-full">
            Joined: {joinCount}/{playerLimit}
          </p>
          <div className="flex gap-3">
            <strong>Start At:</strong>
            <span>
              {minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {renderJoinButton()}
    </div>
  );
};

export default TournamentCard;
