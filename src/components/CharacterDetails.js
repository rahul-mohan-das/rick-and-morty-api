import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const CharacterDetails = () => {
  const initialCharacterDetails = {
    id: "",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    firstSeenIn: "",
    lastKnownLocation: "",
  };
  const [characterDetails, setCharacterDetails] = useState(
    initialCharacterDetails
  );
  const navigate = useNavigate();
  const onCharacterSave = () => {
    console.log(characterDetails);
    // navigate("/");
  };
  const onCancelClick = () => {
    navigate("/");
  };
  return (
    <div className="bg-gray-200 h-[100vh] w-full">
      <div className="text-3xl p-6">Character Details</div>
      <div className="flex flex-col pl-8 w-1/3">
        <label className="flex flex-row gap-2 justify-between">
          Id
          <input
            name="id"
            value={characterDetails.value}
            onChange={(e) => {
              setCharacterDetails({
                ...characterDetails,
                [e.target.name]: e.target.value,
              });
            }}
            className="shadow-xl rounded border-[1px]"
          />
        </label>
        <label className="flex flex-row gap-2 mt-2 justify-between">
          Name
          <input
            name="name"
            value={characterDetails.name}
            onChange={(e) => {
              setCharacterDetails({
                ...characterDetails,
                [e.target.name]: e.target.value,
              });
            }}
            className="shadow-xl rounded border-[1px]"
          />
        </label>
        <label className="flex flex-row gap-2 mt-2 justify-between">
          Status
          <input
            name="status"
            value={characterDetails.status}
            onChange={(e) => {
              setCharacterDetails({
                ...characterDetails,
                [e.target.name]: e.target.value,
              });
            }}
            className="shadow-xl rounded border-[1px]"
          />
        </label>
        <label className="flex flex-row gap-2 mt-2 justify-between">
          Species
          <input
            name="species"
            value={characterDetails.species}
            onChange={(e) => {
              setCharacterDetails({
                ...characterDetails,
                [e.target.name]: e.target.value,
              });
            }}
            className="shadow-xl rounded border-[1px]"
          />
        </label>
        <label className="flex flex-row gap-2 mt-2 justify-between">
          Type
          <input
            name="type"
            value={characterDetails.type}
            onChange={(e) => {
              setCharacterDetails({
                ...characterDetails,
                [e.target.name]: e.target.value,
              });
            }}
            className="shadow-xl rounded border-[1px]"
          />
        </label>
        <label className="flex flex-row gap-2 mt-2 justify-between">
          Gender
          <input
            name="gender"
            value={characterDetails.gender}
            onChange={(e) => {
              setCharacterDetails({
                ...characterDetails,
                [e.target.name]: e.target.value,
              });
            }}
            className="shadow-xl rounded border-[1px]"
          />
        </label>
        <label className="flex flex-row gap-2 mt-2 justify-between">
          First seen in
          <input
            name="firstSeenIn"
            value={characterDetails.firstSeenIn}
            onChange={(e) => {
              setCharacterDetails({
                ...characterDetails,
                [e.target.name]: e.target.value,
              });
            }}
            className="shadow-xl rounded border-[1px]"
          />
        </label>
        <label className="flex flex-row gap-2 mt-2 justify-between">
          Last known location
          <input
            name="lastKnownLocation"
            value={characterDetails.lastKnownLocation}
            onChange={(e) => {
              setCharacterDetails({
                ...characterDetails,
                [e.target.name]: e.target.value,
              });
            }}
            className="shadow-xl rounded border-[1px]"
          />
        </label>
        <div className="self-end">
          <button
            className="p-2 bg-white shadow-xl rounded mt-2 w-fit"
            onClick={onCancelClick}>
            Cancel
          </button>
          <button
            className="p-2 bg-gray-600 shadow-xl rounded mt-2 w-fit ml-2 text-white"
            onClick={onCharacterSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
