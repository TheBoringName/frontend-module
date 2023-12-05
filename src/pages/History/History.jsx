import SingleEntry from "../../components/history/SingleEntry";
import { useState, useEffect } from 'react';
import axios from 'axios';
const History = () =>{
  
  const config = {
    url: import.meta.env.VITE_BASE_URL,
    analize: import.meta.env.VITE_ANALIZE,
  };
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }}
    

  useEffect(() => {
    // Funkcja do pobrania przedmiotów dla danej strony
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${config.url}/history?page=${currentPage}`);
        console.log(response.data)
        setItems(response.data);
      } catch (error) {
        console.error('Błąd podczas pobierania przedmiotów:', error);
      }
    };

    // Wywołaj funkcję przy załadowaniu komponentu i przy zmianie currentPage
    fetchItems();
  }, [currentPage]);

  
  return <section className="fix-height padding-sides">
    <h1>History</h1>
    {items.map((object, index)=>(
      <SingleEntry object={object} key={index}/>
    )) }
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
  </section>
}

export default History;