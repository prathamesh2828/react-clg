import React, { useState } from "react";

const LudoBoard = () => {
  let [isLiked, setIsLiked] = useState(false);
  let [moves,setMoves] = useState({red:0, green: 0, yellow:0, blue:0})
  const HandleIsLiked = () => {
    setIsLiked(!isLiked);
  };

  const handleBlueClick =() => {
    const uo = moves.blue+=1
    if (moves.blue === 10) alert("You are done with your moves");
    else{
    setMoves({...moves,uo});
    }
  }

  const handleYellowClick =() => {
    const uo = moves.yellow+=1
    if (moves.yellow === 10) alert("You are done with your moves");
    else{
    setMoves({...moves,uo});
    }
  }

  const handleRedClick =() => {
    const uo = moves.red+=1
    if (moves.red === 10) alert("You are done with your moves");
    else{
    setMoves({...moves,uo});
    }
  }

  const handleGreenClick =() => {
    const uo = moves.green+=1
    if (moves.green === 10) alert("You are done with your moves");
    else{
    setMoves({...moves,uo});
    }
  }

  return (
    <div className="container text-center">
      <h2>
        Welcome to LudoBoard{" "}
        <span onClick={HandleIsLiked} className="mx-3" style={{ color: "red" }}>
          {isLiked ? (
            <i class="fa-solid fa-heart"></i>
          ) : (
            <i class="fa-regular fa-heart"></i>
          )}
        </span>
      </h2>

  <div class="container overflow-hidden text-center">
  <div class="row gy-5">
    <div class="col-6">
      <div class="p-3"><h6>Blue: {moves.blue}</h6>
      <button onClick={handleBlueClick} className="btn btn-primary w-25 p-3">+1</button></div>
    </div>

    <div class="col-6">
      <div class="p-3"><h6>Red: {moves.red}</h6>
      <button onClick={handleRedClick} className="btn btn-danger w-25 p-3 ">+1</button>
      </div>
    </div>

    <div class="col-6">
      <div class="p-3"> <h6>Yellow: {moves.yellow}</h6>
      <button onClick={handleYellowClick} className="btn btn-warning w-25 p-3">+1</button></div>
    </div>

    <div class="col-6">
      <div class="p-3"><h6>Green: {moves.green}</h6>
      <button onClick={handleGreenClick} className="btn btn-success w-25 p-3">+1</button></div>
    </div>


  </div>
</div>

    </div>
  );
};

export default LudoBoard;
