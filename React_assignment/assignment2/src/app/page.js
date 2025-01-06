'use client';

import { useEffect, useState } from "react";
import Search from "../components/Search";
import Card from "../components/Card";

function App() {
  
  const [data, setData] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  const [searchValue, setSearchValue] = useState('');
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
      );
      const data = await response.json();

      setData(data.slice(1));
      setFilteredGames(data.slice(1));

    } catch (e) {
      console.error("Some error occured:", e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const platforms = [...new Set(data.map((game) => game.platform))].filter(
    (plat) => plat !== "" && !plat.includes(",")
  );
  const genres = [...new Set(data.map((game) => game.genre))].filter(
    (gen) => gen !== "" && !gen.includes(",")
  );

  const handleSuggestionClick = (suggestion) => {
      setSearchValue(suggestion);
      setSuggestions([]);
    };

  const removeHandler=(title,platform)=>{
    
    let updated_games=[];
    updated_games=filteredGames.filter((game)=>{
      return  (game.title !== title || game.platform !== platform);
    })
    setFilteredGames(updated_games);
    
  }

  useEffect(() => {
   
    const filtered = data.filter((game) => {
      const matchesTitle = game.title.toLowerCase().includes(searchValue.toLowerCase());
      const matchesPlatform = platform ? game.platform === platform : true;
      const matchesGenre = genre ? game.genre.includes(genre) : true;
      return matchesTitle && matchesPlatform && matchesGenre;
  });
      setFilteredGames(filtered);
      if (searchValue) {
        const searchSuggestions = data.filter((game) =>
            game.title.toLowerCase().includes(searchValue.toLowerCase())
        ).map((game) => game.title);
        setSuggestions(searchSuggestions);
      } 
    else {
        setSuggestions([]);
    }


  }, [searchValue,platform, genre,data]);
  
  return (
    <div className="p-6 bg-slate-200 min-h-screen">
          <div className="w-10/12 mx-auto" >
            <h1 className="text-xl font-semibold mb-6 text-center text-black">
                  Browse Games
            </h1>

            <Search
                  platforms={platforms}
                  genres={genres}
                  platform={platform}
                  genre={genre}
                  setGenre={setGenre}
                  setPlatform={setPlatform}
                  searchValue={searchValue} 
                  setSearchValue={setSearchValue}
                  suggestions = {suggestions} 
                  setSuggestions = {setSuggestions}
                  handleSuggestionClick={handleSuggestionClick}
                  
                  
            >
            </Search>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Editor Choice</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredGames.filter((game) => game.editors_choice === 'Y').length > 0 ? (
                        filteredGames.filter((game) => game.editors_choice === 'Y').map((game, index) => (
                            <Card
                                key={index}
                                title={game.title}
                                platform={game.platform}
                                genre={game.genre}
                                score={game.score}
                                editors_choice={game.editors_choice}
                                removeHandler={removeHandler}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500">No  Choice games found.</p>
                    )}
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Other Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredGames.filter((game) => game.editors_choice !== 'Y').length > 0 ? (
                        filteredGames.filter((game) => game.editors_choice !== 'Y').map((game, index) => (
                            <Card
                                key={index}
                                title={game.title}
                                platform={game.platform}
                                genre={game.genre}
                                score={game.score}
                                editors_choice={game.editors_choice}
                                removeHandler={removeHandler}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500">No other games found.</p>
                    )}
                </div>
            </div>
           </div>
    </div>
  );
}

export default App;
