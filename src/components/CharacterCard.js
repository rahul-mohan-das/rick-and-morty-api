import React, {useEffect, useState} from "react";
import axios from "axios";

const CharacterCard = (props) => {
  const url = props.character.episode[props.character.episode.length - 1];
  const [lastSeenIn, setLastSeenIn] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data.name;
      // console.log(data);
      setLastSeenIn(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => fetchData, []);
  return (
    <div className="bg-[#3C3E44] flex flex-row basis-2/5 rounded-2xl ">
      <div className="w-1/8">
        <img className="rounded-l-2xl" src={props.character.image} />
      </div>
      <div className="w-4/5 text-white p-2">
        <div className="font-bold text-2xl">{props.character.name}</div>
        <div className="mt-2">
          {props.character.status}
          {" - "}
          {props.character.species}
        </div>
        <div className="text-[#9e9e9e]">Last known location:</div>
        <div className="text-xl">{lastSeenIn}</div>
        <div className="text-[#9e9e9e]">Firt seen in:</div>
        <div className="text-xl">{props.character.location.name}</div>
      </div>
    </div>
  );
};

export default CharacterCard;
