import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const CharacterDetails = () => {
  const initialCharacterDetails = {
    id: "",
    name: "",
    email: "",
    password: "",
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

  const onCancelClick = () => {
    navigate("/");
  };

  //form validation

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validateValues = (inputValues) => {
    let errors = {};
    if (!characterDetails.email) {
      errors.email = "Email required";
    } else if (!regex.test(characterDetails.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!characterDetails.password) {
      errors.password = "Password is required";
    } else if (inputValues.password.length < 5) {
      errors.password = "Password is too short";
    }

    return errors;
  };
  const onCharacterSave = (event) => {
    event.preventDefault();
    setErrors(validateValues(characterDetails));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(characterDetails);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <div className="bg-gray-200 min-h-[100vh] h-fit pb-10 w-full flex flex-col items-center pt-[3vh]">
      <div className="text-3xl p-6">Character Details</div>
      <div className="flex flex-col pl-8">
        <label className="flex sm:flex-row flex-col gap-2 justify-between text-xl">
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
            className="shadow-xl rounded border-2 border-gray-300 p-1 pl-4"
          />
        </label>
        <label className="flex sm:flex-row flex-col gap-2 mt-2 justify-between text-xl">
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
            className="shadow-xl rounded p-1  pl-4 border-2 border-gray-300"
          />
        </label>

        <label className="flex sm:flex-row flex-col gap-2 mt-2 justify-between text-xl">
          Email
          <input
            name="email"
            type="email"
            value={characterDetails.email}
            onChange={(e) => {
              setCharacterDetails({
                ...characterDetails,
                [e.target.name]: e.target.value,
              });
            }}
            className="shadow-xl rounded p-1 pl-4 border-2 border-gray-300"
          />
        </label>
        {errors.email ? <p className="text-red-600">{errors.email}</p> : null}
        <label className="flex sm:flex-row flex-col gap-2 mt-2 justify-between text-xl">
          Password
          <input
            name="password"
            type="password"
            value={characterDetails.password}
            onChange={(e) => {
              setCharacterDetails({
                ...characterDetails,
                [e.target.name]: e.target.value,
              });
            }}
            className="shadow-xl rounded p-1 pl-4 border-2 border-gray-300"
          />
        </label>
        {errors.password ? (
          <p className="text-red-600">{errors.password}</p>
        ) : null}

        <label className="flex sm:flex-row flex-col gap-2 mt-2 justify-between text-xl">
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
            className="shadow-xl rounded p-1 pl-4 border-2 border-gray-300"
          />
        </label>
        <label className="flex sm:flex-row flex-col gap-2 mt-2 justify-between text-xl">
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
            className="shadow-xl rounded p-1 pl-4 border-2 border-gray-300"
          />
        </label>
        <label className="flex sm:flex-row flex-col gap-2 mt-2 justify-between text-xl">
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
            className="shadow-xl rounded p-1 pl-4 border-2 border-gray-300"
          />
        </label>
        <label className="flex sm:flex-row flex-col gap-2 mt-2 justify-between text-xl">
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
            className="shadow-xl rounded p-1 pl-4 border-2 border-gray-300"
          />
        </label>
        <label className="flex sm:flex-row flex-col gap-2 mt-2 justify-between text-xl">
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
            className="shadow-xl rounded p-1 pl-4 border-2 border-gray-300"
          />
        </label>
        <label className="flex sm:flex-row flex-col gap-2 mt-2 justify-between text-xl">
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
            className="shadow-xl rounded p-1 pl-4 border-2 border-gray-300"
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
