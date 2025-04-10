import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import ToastNotification from './ToastNotification';
import Footer from './Footer';
export default function CourseCard({ type }) {
  const [articles, setArticle] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${type}&apiKey=1490e7fa578740dda5f0e1359e153358`
        );
        const result = await response.json();
        setArticle(result.articles || []);
        console.log(result);
        if (!result.articles || result.articles.length === 0) {
          setShowToast(true);
          
        } else {
          setShowToast(false);
        }
      } catch (err) {
        console.log('Fetch error:', err);
      }
    }
    fetchData();
  }, [type]);
 
  return (
    
    <Container className="d-flex flex-wrap gap-4 justify-content-center mt-4">
      {articles.length === 0 ? (
        <p className="text-center">No news found for "{type}"</p>
        
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
              <Card.Text>
                {article.description?.slice(0, 100)}...
              </Card.Text>
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
      <ToastNotification
        show={showToast}
        title="No News Found"
        message={`No news articles available for category "${type}"`}
      />
    </Container>
    
  );
  
  {articles.length > 0 && <Footer />}
}
