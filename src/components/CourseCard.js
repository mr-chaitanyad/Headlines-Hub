import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import Slider from './Slider'; // Make sure to import it
import Alert from './Alert'; 
import { fetchArticles } from '../api/api';

export default function CourseCard({ type }) {
  const [articles, setArticle] = useState([]);
  const [load, setLoad] = useState(true); // ✅ Corrected

  useEffect(() => {
    async function loadData() {
      try {
        setLoad(true);
        const result = await fetchArticles(type); // ✅ Clean usage
        setArticle(result);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoad(false);
      }
    }

    loadData();
  }, [type]);

  return (
    <>
      {load ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
            <Slider />
        </div>
      ) : (
        <Container className="d-flex flex-wrap gap-4 justify-content-center mt-4">
          {articles.length === 0 ? (
            <Alert message={`No news articles available for category "${type}"`}/>
          ) : (
            articles.map((article, ind) => (
              <Card key={ind} className="CCard" style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={article.urlToImage || 'https://via.placeholder.com/150'}
                  alt={article.title}
                />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description?.slice(0, 100)}...</Card.Text>
                  <Button
                    variant="dark"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
          
        </Container>
      )}
    </>
  );
}
