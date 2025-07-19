import "./MainPage.css";
import { useEffect, useMemo, useState } from "react";
import Confetti from "react-confetti";

function MainPage() {
  const gameIcon = ["🥸", "🤠", "🤡", "💀", "🦁", "🐲", "🐎", "🦋", "🤖"];
  const startgame = () => {
    const dublicategameIcon = [...gameIcon, ...gameIcon];
    console.log(dublicategameIcon.length);
    const shuffleditems = [];
    while (shuffleditems.length < gameIcon.length * 2) {
      const shuffle = Math.floor(Math.random() * dublicategameIcon.length);

      shuffleditems.push({
        emoji: dublicategameIcon[shuffle],
        flipped: false,
        solved: false,
        position: shuffleditems.length,
      });
      dublicategameIcon.splice(shuffle, 1);
    }
    setpiece(shuffleditems);
  };
  const [piece, setpiece] = useState([]);

  

  useEffect(() => {
    startgame();
    
  }, []);
  const handleactive = (data) => {
    setcountandname({count:countandname.count+1,name:countandname.name})
    const newpieces = piece.map((piece) => {
      if (data.position === piece.position) {
        piece.flipped = !piece.flipped;
      }
      return piece;
    });
    setpiece(newpieces);
  };
  const gamesolved = () => {
    const solved = piece.filter((data) => data.flipped && !data.solved);
    if (solved.length === 2) {
      setTimeout(() => {
        if (solved[0].emoji === solved[1].emoji) {
          setpiece(
            piece.map((data) => {
              if (
                data.position === solved[0].position ||
                data.position === solved[1].position
              ) {
                data.solved = true;
              }
              return data;
            })
          );
        } else {
          setpiece(
            piece.map((data) => {
              if (
                data.position === solved[0].position ||
                data.position === solved[1].position
              ) {
                data.flipped = false;
              }
              return data;
            })
          );
        }
      }, 800);
    }
  };
  useEffect(() => {
    gamesolved();
  }, [piece]);
  const celebrate = useMemo(() => {
    if (piece.every((piece) => piece.solved)) {
      return true;
    }
  }, [piece]);
  const [letsgo, setletsgo] = useState(true)
  const [countandname, setcountandname] = useState({count:0,name:''})
  
  console.log(countandname);
  

  return (
    <div className="main1">
      
      <div className="Headings">
      <h1>Memory Game </h1>
      <h2>Clicks : {countandname.count} </h2>
      
      </div>
     
      
    
      <div className="container">
        {piece.map((data, index) => (
          <div
            key={index}
            className={`${data.flipped ? "flip-cardActive" : ""}`}
            onClick={() =>{
              if(!data.flipped){


                handleactive(data)
              }
            } }
          >
            <div className="flip-card-inner">
              {/* {`${data.solved ? 'flip-card-frontActive' : 'flip-card-front'}`} */}
              <div className="flip-card-front"></div>
              <div className="flip-card-back">{data.emoji}</div>
            </div>
          </div>
        ))}
      </div>
      {celebrate && (
        <div className="celebrate">
          <h1>YOU WIN!!!👏</h1>
          <Confetti width={1500} height={window.innerHeight} />
        
        </div>
      )}
       { letsgo ?
      <div className="letsgo">
        <div className="start">

  
        <h2>Game Instruction </h2>
        <ul>
          <li>The player turns over 2 cards</li>
          <li> If the pictures match, the player keeps the cards and tries again for another match</li>
          <li> If they do not match the cards are turned over again and the player need to takes another turn</li>
          <li>When all of the cards have been matched, players count their clicks</li>
          <li>The one with the most less clicks who record as a current winner</li>
        </ul>
        <input className="inputbox" type="text" value={countandname.name} onChange={(e)=>{
          setcountandname({name:e.target.value,count:countandname.count})
          
        

        }} placeholder="Enter Your Name"/>
        <button onClick={()=>{
          if(countandname.name.length>1){
            setletsgo(false)

            }else{
              alert('Please Enter Your Name')
            }
          }}>Start</button>
          
        </div>
      </div> : ''
}
    </div>
  );
}

export default MainPage;
