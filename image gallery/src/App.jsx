import { useState } from 'react';
import { createClient } from 'pexels';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const client = createClient('fAzG3j4NYAp3hturC3lhpnt67m87MKGMERicW6kbjTErcchJx4WufMI9');

  const fetchPhoto = async () => {
    setLoading(true);
    try {
      const response = await client.photos.search({ query, per_page: 10 });
      console.log(response.photos);
      const photoUrls = response.photos.map((photo) => photo.src.original);
      setData(photoUrls);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (query.trim() !== '') {
      fetchPhoto(); 
    }
  };

  console.log(data);

  return (
    <>
      <div className="images">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Enter search term..."
          />
          <button type="submit">Search</button>
        </form>

        {loading ? (
          <p>Loading photos...</p>
        ) : (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            {data.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Pexels Image ${index + 1}`}
                style={{
                  width: '300px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
