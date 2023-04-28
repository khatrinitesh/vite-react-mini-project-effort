import React from 'react';
import Autocomplete from './autocomplete';

export default function AutocompleteExample() {
  return (
    <>
      <Example/>
    </>
  )
}

 function Example(){
    blognone => {
        fetch(
          "https://jobs-api.blognone.com/search?q=Digital+Marketing&page=1&type=FULL_TIME,INTERNSHIP&func=DEVELOPER"
        ).then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        });
      };
    return(
        <>
        <Autocomplete
            options={[
            "Papaya",
            "Persimmon",
            "Paw Paw",
            "Prickly Pear",
            "Peach",
            "Pomegranate",
            "Pineapple"
            ]}
        />
        </>
    )
 }