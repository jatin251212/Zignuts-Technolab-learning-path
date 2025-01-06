import React from 'react'


export default function Search(props) {
    
    let genres=props.genres;
    let platforms=props.platforms;

    const platform=props.platform;
    const setPlatform=props.setPlatform;

    const genre=props.genre;
    const setGenre=props.setGenre;

    const searchValue=props.searchValue;
    const setSearchValue=props.setSearchValue;
   
    const suggestions = props.suggestions;
    const setSuggestions = props.setSuggestions;
    
    const handleSuggestionClick= props.handleSuggestionClick;

  return (
    
    <div className="bg-white p-4 shadow-md rounded-lg flex flex-wrap gap-4 items-center justify-center ">
                <div className="relative w-full max-w-sm">
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        placeholder="Search for a Game"
                        className="w-full border rounded-lg  py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {suggestions.length > 0 && (
                        <div className="absolute top-full left-0 w-full bg-white border mt-1 max-h-60 overflow-y-auto shadow-lg">
                            {suggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className="p-2 cursor-pointer hover:bg-gray-200"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <select
                    value={platform}
                    onChange={(event) => {
                        setPlatform(event.target.value)
                    }}
                    className="border rounded-lg py-2  px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Platforms</option>
                    {platforms.map((plat, index) => (
                        <option key={index} value={plat}>{plat} </option>
                    ))}
                </select>

                <select
                    value={genre}
                    onChange={(event) => {
                        setGenre(event.target.value)
                        }}
                    className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Genres</option>
                    {genres.map((gen, index) => (
                        <option key={index} value={gen} >{gen}</option>
                    ))}
                </select>
              
            </div>

  )
}
