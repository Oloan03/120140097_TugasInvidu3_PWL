import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = props => {
  const [news, setNews] = useState([]);
  const apiKey = 'a914f6db85534d6694561c436ea763cf'; // Ganti dengan API key Anda
  const apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2023-09-15&sortBy=publishedAt';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${apiUrl}&apiKey=${apiKey}`);
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2 className="text-center">Berita Terbaru</h2><br />
      <ul className="list-group list-group-flush">
        {news.map((article, index) => (
          <li key={index} className="list-group-item">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;