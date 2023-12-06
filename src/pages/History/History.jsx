import SingleEntry from "../../components/history/SingleEntry";
import { useState, useEffect } from 'react';
import axios from 'axios';
const History = () =>{
  const config = {
    url: import.meta.env.VITE_BASE_URL,
    analize: import.meta.env.VITE_ANALIZE,
  };
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [sentimentFilter, setSentimentFilter] = useState('all'); 
  const [nameFilter, setNameFilter] = useState(''); 
  const itemsPerPage = 10; 
    

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${config.url}/history/list?size=999`);
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error('Błąd podczas pobierania przedmiotów:', error);
      }
    };
0
    fetchItems();
  }, []);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const filteredItems = data.filter((item) => {
    const matchesSentiment = sentimentFilter === 'all' || item.sentiment === sentimentFilter;
    const matchesName = nameFilter ? item.title.toLowerCase().includes(nameFilter.toLowerCase()) : true;

    return matchesSentiment && matchesName;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const isLastPage = indexOfLastItem >= filteredItems.length;


  return <section className="fix-height padding-sides">
    <h1>History</h1>
    <select
          value={sentimentFilter}
          onChange={(e) => setSentimentFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="positive">Positive</option>
          <option value="negative">Negative</option>
          <option value="neutral">Neutral</option>
        </select>
        <input
          type="text"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        {displayedItems.map((item) => (
        <SingleEntry object={item}/>
      ))}

          <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
      <button onClick={handleNextPage} disabled={isLastPage}>Next</button>
  </section>
}

export default History;