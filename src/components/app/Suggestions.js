import React, { useEffect, useState } from 'react'

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    getSuggestions()
  }, [])

  const getSuggestions = async () => {
    const suggestionsCol = collection(db, "suggestions");
    const suggestionSnapshot = await getDocs(suggestionsCol);
    const suggestionList = suggestionSnapshot.docs.map((doc) => doc.data());
    setSuggestions(suggestionList);
  };

  return (
    <div className='suggestionBx'>
      <header>
        <p>Senin İçin Önerilenler</p>
        <p><b>Tümünü Gör</b></p>
      </header>

      <div className='suggestion'>
       <ul>
         {suggestions.map(item => (
           <li key={item.id} className="suggestion-item">
             <div className='suggestion-image'>
               <img src={item.image} alt={item.image} />
             </div>
             <div>
               <b>{item.name}</b>
               <p>İnstagram tavsiye ediyor</p>
             </div>
             <div>
               <p className='link'>Takip Et</p>
             </div>
           </li>
         ))}
       </ul>
      </div>
    </div>
  )
}