export const getCharacters = async (page) => {
    try {
      let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {console.log(err)}
  };