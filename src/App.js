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
  const [selectedChar,setSelectedChar]=useState({});

  const FetchAPI = () => {
    const fetchCharacters = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setCharactersArray(data.results));
    };
    const baseUrl = "https://rickandmortyapi.com/api/character?page=";
    const numPages = 5;
    for (var i = 1; i <= numPages; i++) {
      fetchCharacters(baseUrl + i);
    }
    return charactersArray;
  };

  let [detailVisible, setDetailVisible] = useState("none");
 
  const SetDetialVisible = (item) => {
    const dt = detailVisible === "none" ? "flex" : "none";
    setDetailVisible(dt);
    
    if(dt==="flex") {
      setSelectedChar(item);
    }
  };
  const setDetailHidden=()=>{
    setDetailVisible('none')
  }
  

  return (
    <div className="App">
      <HeaderDiv className="header" clickFunc={FetchAPI}></HeaderDiv>

      <main>
        <section className="cards-container">
          {charactersArray.map((item, index) => (
            <CreatCards
              key={index}
              item={item}
              doVisible={()=>{SetDetialVisible(item)}}
            ></CreatCards>
          ))}
          <CoverScreen 
          onClick={setDetailHidden}
          style={
            detailVisible === "none"
              ? { display: "none" }
              : { display: "flex" }}
          />
          <DetailsStyle
            onClick={setDetailHidden}
            style={
              detailVisible === "none"
                ? { display: "none" }
                : { display: "flex" }}
          >
            <CreateDetailsPage
            key={selectedChar.id}
            item={selectedChar}
            />

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
