import AliveStatusStyleDiv from "./aliveStatusStyle";

const CreatCards = ({ item, doVisible,Toggle }) => {
localStorage.getItem(item.id)===null?(
  localStorage.setItem(item.id,'false')  
  ):'';

  return (
    <article className="cards">
      <div><img className="CharacterImage" alt="character image" src={item.image} onClick={doVisible} /></div>
      <div className="cardText">
      <p>{item.name}</p>
      </div>
      {item.status === "Alive" && <AliveStatusStyleDiv></AliveStatusStyleDiv>}
      <div><img className="favStar" alt="Favourite Icon" src={localStorage.getItem(item.id)==='false'
        ? require("../../src/starempty.png") : require("../../src/star.png")} onClick={Toggle} /></div>
    </article>
  );
};
export default CreatCards;
