import "./App.css";
import React, { useState } from "react";
import HeaderDiv from "./components/headerDiv";
import DetailsStyle from "./components/detailsStyle";
import CreatCards from "./components/createCards";
import CreateDetailsPage from "./components/createDetailsPage";
import CoverScreen from "./components/coverScreen";



function App() {
  
  console.clear();
  const [charactersArray, setCharactersArray] = useState([]);
  const [selectedChar, setSelectedChar] = useState({});
  const [isFavourite,setIsFavourite]=useState('false');
  const [favorites,setFavorites]=useState([{}]);

  const FetchAPI = () => {
    const baseUrl = "https://rickandmortyapi.com/api/character?page=";
    const numPages = 5;
    const urls = Array(numPages)
      .fill() // [undefined, undefined, ...]
      .map((_, index) => baseUrl + (index + 1));
    const promises = urls.map((url) => fetch(url).then((res) => res.json()));
    Promise.all(promises).then((pages) => {
      const result = pages.map((page) => page.results);
      const flatresult = result.flat();
      //console.log(flatresult)
      setCharactersArray(flatresult);
    });
  };
  const GetAndSetFavorites=(itemID)=>{
    localStorage.getItem(itemID)!==false ? setFavorites(...favorites,{id:itemID,isFav:false}):setFavorites(...favorites,{id:itemID,isFav:true})
  }

  function favouriteToggle(id){
    const getValue=JSON.parse(localStorage.getItem(id))
 
    localStorage.getItem(id)==='false'?localStorage.setItem(id,'true'):localStorage.setItem(id,'false ')
  }  

  let [detailVisible, setDetailVisible] = useState("none");

  const SetDetialVisible = (item) => {
    const dt = detailVisible === "none" ? "flex" : "none";
    setDetailVisible(dt);

    if (dt === "flex") {
      setSelectedChar(item);
    }
  };
  const setDetailHidden = () => {
    setDetailVisible("none");
  };

  return (
    <div className="App">
      <HeaderDiv className="header" clickFunc={FetchAPI}></HeaderDiv>

      <main>
        <section className="cards-container">
          
          {charactersArray.map((item, index) => (
            <CreatCards
              readFavs={()=>GetAndSetFavorites(item.id)}
              key={index}
              item={item}
              doVisible={() => {
                SetDetialVisible(item);
              }}
              Toggle={()=>favouriteToggle(item.id)}
              id={item.id}
            ></CreatCards>
          ))}
          <CoverScreen
            onClick={setDetailHidden}
            style={
              detailVisible === "none"
                ? { display: "none" }
                : { display: "flex" }
            }
          />
          <DetailsStyle
            onClick={setDetailHidden}
            style={
              detailVisible === "none"
                ? { display: "none" }
                : { display: "flex" }
            }
          >
            <CreateDetailsPage key={selectedChar.id} item={selectedChar} />
          </DetailsStyle>
        </section>
      </main>
      <footer>
        <p>Made by Nima GmbH</p>
      </footer>
    </div>
  );
}

export default App;
