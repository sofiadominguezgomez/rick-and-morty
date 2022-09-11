const baseUrl = "https://rickandmortyapi.com/api/";

export const getCharacters = async (page=null) => {
    try {
      let url =`${baseUrl}character/${page ? `?page=${page}` : ''}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("Resource could not be located")
       }
      const data = await response.json();
      return data;
    } catch (err) {console.log(err)}
};

 export const searchCharacter = async (query) => {
     try {
        let url = `https://rickandmortyapi.com/api/character/?name=${query}`
       const response = await fetch(url);
       if (!response.ok) {
        throw Error("Resource could not be located")
       } else {
        const data = await response.json();
        return data;
       }
       
     } catch (err) {console.log(err)}
};

export const getCharacterById = async(id)  => {
  try {
    let url = `${baseUrl}character/${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error("Resource could not be located")
   }
  const data = await response.json();
  return data;
} catch(err) {console.log(err)}
}

export const getLocations = async (page=null) => {
  try {
    let url =`${baseUrl}location/${page ? `?page=${page}` : ''}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw Error("Resource could not be located")
     }
    const data = await response.json();
    return data;
  } catch (err) {console.log(err)}
};

export const getLocationById = async(id)  => {
  try{
    let url = `${baseUrl}location/${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error("Resource could not be located")
   }
  const data = await response.json();
  return data;
  } catch(err) {console.log(err)} 
}