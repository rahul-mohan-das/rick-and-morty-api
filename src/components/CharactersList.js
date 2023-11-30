import React, {useEffect, useState} from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const url = "https://rickandmortyapi.com/api/character";

const CharactersList = () => {
  const navigate = useNavigate();
  const addCharacterButtonClick = () => {
    navigate("/characterdetails");
  };
  const [characters, setCharacters] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data.results;
      setCharacters(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => fetchData, []);
  return (
    <>
      <div className="w-full text-7xl h-[15vh] text-center font-bold">
        The Rick and Morty API
      </div>
      <div className="flex flex-row justify-end p-6">
        <button
          onClick={addCharacterButtonClick}
          className="bg-gray-600 text-white p-2 rounded shadow-xl shadow-gray-600">
          Add Character
        </button>
      </div>
      <div className="flex flex-row flex-wrap gap-5 justify-center py-10 bg-[#272b33] ">
        {characters.map((character) => {
          return <CharacterCard character={character} />;
        })}
      </div>
    </>
  );
};

export default CharactersList;
