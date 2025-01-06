import React from 'react'
import { FaStar,  FaThumbsUp } from 'react-icons/fa';

export default function Card(props) {
  const title=props.title;
  const platform=props.platform;
  const genre=props.genre;
  const score=props.score;
  const editors_choice=props.editors_choice;
  const removeHandler=props.removeHandler;

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="font-bold text-xl text-gray-800 mb-2 truncate">{title}</h3>

    <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-500">{platform}</p>
        <div>
            {
                genre.includes(',') ? genre.split(',').map((g, index) => (
                    <span key={index} className="text-xs text-gray-500 mx-2 px-3 py-1 bg-gray-200 rounded-full">{g}</span>
                )) : <span className="text-xs text-gray-500 px-3 py-1 bg-gray-200 rounded-full">{genre}</span>
            }
        </div>
    </div>

    <div className="flex items-center mb-3">
        <FaStar className="text-yellow-500 mr-1" />
        <span className="font-semibold text-gray-800">{score}/10</span>
    </div>

    {editors_choice === 'Y' && (
        <div className="flex items-center mb-4">
            <FaThumbsUp className="text-blue-400 mr-2" />
            <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-full text-xs font-bold">
                 Choice
            </span>
        </div>
    )}

    <div className="flex justify-between items-center">
        <button className="mx-auto px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-300" 
                           onClick={()=>{removeHandler(title,platform)}}       >
           Remove Game
        </button>
    </div>
</div>
  )
}
