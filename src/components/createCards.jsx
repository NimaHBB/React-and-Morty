const CreatCards = ({ item, doVisible }) => {
  //console.log(item)
  return (
    <article className="cards">
      <img alt="character image" src={item.image} onClick={doVisible} />
      <p>{item.name}</p>
      <p>{item.status}</p>
      
    </article>
  );
};
export default CreatCards;
