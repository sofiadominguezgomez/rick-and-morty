const baseUrl = "https://rickandmortyapi.com/api/"

export const getCharacters = async (page=null) => {
    try {
      let url =`${baseUrl}character/${page ? `?page=${page}` : ''}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {console.log(err)}
};

 export const searchCharacter = async (term) => {
     try {
        let url = `https://rickandmortyapi.com/api/character/?name=${term}`
       const response = await fetch(url);
       const data = await response.json();
       return data;
     } catch (err) {console.log(err)}
};

export const getCharacterById = async(id)  => {
  let url = `${baseUrl}character/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;

}