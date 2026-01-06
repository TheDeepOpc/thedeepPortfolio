import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

// === STYLED COMPONENTS (Oldingi dizayn saqlandi) ===
const Section = styled.section`
  background: #000;
  color: #fff;
  padding: 4rem 1.5rem;
  font-family: 'Space Mono', monospace;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: left;
  border-left: 4px solid #fff;
  padding-left: 20px;
  margin-bottom: 4rem;
  
  h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    font-weight: 900;
    letter-spacing: -1px;
    margin: 0;
  }
  
  p {
    color: #444;
    font-size: 0.8rem;
    margin-top: 5px;
  }
`;

const NewsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
`;

const Card = styled(motion.article)`
  background: #050505;
  border: 1px solid #111;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #fff;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: #111;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.6s ease, transform 0.6s ease;
  }

  ${Card}:hover img {
    filter: grayscale(0%);
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h2 {
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 1rem;
    color: #fff;
    font-weight: 700;
  }

  p {
    font-size: 0.85rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 2rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Meta = styled.div`
  font-size: 0.65rem;
  color: #333;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ActionLink = styled.div`
  margin-top: auto;
  text-decoration: none;
  color: #fff;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #222;
  width: fit-content;
  padding: 8px 16px;
  transition: 0.3s;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 5rem;

  button {
    background: transparent;
    border: 1px solid #222;
    color: #444;
    padding: 10px 20px;
    cursor: pointer;
    font-family: inherit;
    transition: 0.3s;

    &.active {
      border-color: #fff;
      color: #fff;
    }

    &:hover:not(.active) {
      border-color: #666;
      color: #666;
    }
  }
`;

// === ASOSIY KOMPONENT ===
export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchNews = async (pageNum) => {
    setLoading(true);
    setError(null);
    
    const target = pageNum === 1 
      ? 'https://uzcert.uz/yangiliklar/' 
      : `https://uzcert.uz/yangiliklar/page/${pageNum}/`;

    const proxyUrl = "https://restless-base-d1c7.sardordev02.workers.dev/";
    const finalUrl = `${proxyUrl}?url=${encodeURIComponent(target)}`;

    try {
      const response = await fetch(finalUrl);
      if (!response.ok) throw new Error("Tarmoq xatosi!");
      
      const htmlText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');
      
      const postElements = doc.querySelectorAll('article');
      
      const parsedData = Array.from(postElements)
        .map(el => {
          const title = el.querySelector('.page-title')?.innerText || el.querySelector('h2')?.innerText || "";
          const img = el.querySelector('img')?.getAttribute('src') || null;
          const link = el.querySelector('a')?.getAttribute('href');
          const excerpt = el.querySelector('.entry-content p')?.innerText?.substring(0, 160) + "...";

          return { id: el.getAttribute('id'), title, img, link, excerpt };
        })
        // === FILTRLASH QISMI: "Yangiliklar va maqolalar" sarlavhasini olib tashlaymiz ===
        .filter(item => 
          item.title.toLowerCase() !== "yangiliklar va maqolalar" && 
          item.title.trim() !== ""
        );

      setArticles(parsedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  return (
    <Section>
      <Container className='mt-3' >
        <Header>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Meta style={{ color: '#fff', marginBottom: 0 }}>Cyber Security Feed</Meta>
            <h1>Latest CyberSecurity News</h1>
            <p>// STATUS: {loading ? "SCANNING_RESOURCES..." : "SYSTEMS_ONLINE"}</p>
          </motion.div>
        </Header>

        {error && (
          <div style={{ textAlign: 'center', color: 'red', padding: '5rem' }}>
            <p>ERROR: {error}</p>
            <button onClick={() => fetchNews(page)} style={{background:'none', border:'1px solid red', color:'red', padding:'10px', marginTop:'10px', cursor:'pointer'}}>
              <RefreshCcw size={14} /> REBOOT
            </button>
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: 'center', padding: '10rem 0', color: '#222' }}>DECRYPTING_PACKETS...</div>
        ) : (
          <AnimatePresence mode="wait">
            <NewsGrid key={page} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {articles.map((item, index) => (
                <Card
                  key={item.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ImageContainer>
                    {item.img ? <img src={item.img} alt="Intel" /> : <div style={{ padding: '20%', textAlign: 'center', color: '#222' }}>NO_VISUAL</div>}
                  </ImageContainer>
                  <Content>
                    <Meta>{item.id?.replace('post-', 'REF_') || 'NEWS_DATA'}</Meta>
                    <h2>{item.title}</h2>
                    <p>{item.excerpt}</p>
                    <Link to={`/news/${item.id}`} state={{ link: item.link, allNews: articles }} style={{ textDecoration: 'none' }}>
                      <ActionLink>
                        VIEW_FULL_REPORT <ExternalLink size={12} />
                      </ActionLink>
                    </Link>
                  </Content>
                </Card>
              ))}
            </NewsGrid>
          </AnimatePresence>
        )}

        <Pagination>
          {[1, 2, 3,4,5,6].map((num) => (
            <button key={num} className={page === num ? 'active' : ''} onClick={() => setPage(num)}>
              {num < 10 ? `0${num}` : num}
            </button>
          ))}
        </Pagination>
      </Container>
    </Section>
  );
}