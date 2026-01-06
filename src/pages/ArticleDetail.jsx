import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// === STYLED COMPONENTS ===
const DetailSection = styled.section`
  background: #000;
  color: #fff;
  min-height: 100vh;
  padding: 2rem 1.5rem;
  font-family: 'Space Mono', monospace;
`;

const MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ContentArea = styled(motion.article)`
  .hero-img {
    width: 100%;
    max-height: 550px;
    object-fit: cover;
    border: 1px solid #111;
    margin-bottom: 2.5rem;
  }

  h1 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    line-height: 1.1;
    margin-bottom: 2rem;
    font-weight: 800;
  }

  .entry-content {
    color: #ccc;
    line-height: 1.9;
    font-size: 1.05rem;

    p { margin-bottom: 1.8rem; }
    
    h2, h3 { 
      color: #fff; 
      margin: 3.5rem 0 1.5rem; 
      font-size: 1.5rem;
      border-left: 4px solid #fff;
      padding-left: 20px;
      background: #050505;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    ul, ol { 
      margin: 2rem 0 2rem 1.5rem; 
      border-left: 1px solid #222; 
      padding-left: 2rem; 
      color: #bbb;
    }
    
    li { margin-bottom: 1rem; }
    strong { color: #fff; font-weight: 700; }
    
    img { 
      max-width: 100%; 
      height: auto; 
      margin: 2.5rem 0; 
      border: 1px solid #222; 
    }

    /* === JADVALLAR UCHUN STIL (TR, TD INTEGRATSIYASI) === */
    figure.wp-block-table {
      margin: 2.5rem 0;
      width: 100%;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #222;
      font-size: 0.9rem;
      background: #020202;
    }

    th, td {
      padding: 15px;
      border: 1px solid #222;
      text-align: left;
    }

    th {
      background: #080808;
      color: #fff;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 1px;
    }

    td {
      color: #aaa;
    }

    tr:hover td {
      background: #050505;
      color: #fff;
      border-color: #444;
    }
  }
`;

const Sidebar = styled.aside`
  .sticky-top { position: sticky; top: 2rem; }
  h4 { 
    font-size: 0.75rem; 
    color: #444; 
    text-transform: uppercase; 
    margin-bottom: 2rem; 
    letter-spacing: 3px; 
    border-bottom: 1px solid #111; 
    padding-bottom: 10px; 
  }
  
  .side-card {
    margin-bottom: 25px;
    padding: 15px;
    border: 1px solid #111;
    background: #020202;
    transition: 0.3s;
    &:hover { border-color: #fff; }
    
    .ref { font-size: 0.6rem; color: #555; margin-bottom: 5px; display: block; }
    a { 
        color: #eee; 
        text-decoration: none; 
        font-size: 0.85rem; 
        line-height: 1.4; 
        display: block; 
    }
  }
`;

const BackBtn = styled.button`
  background: #fff;
  color: #000;
  border: none;
  padding: 12px 24px;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 3rem;
  transition: 0.3s;
  &:hover { background: #ccc; transform: translateX(-5px); }
`;

const PrevNav = styled.div`
  margin-top: 6rem;
  padding-top: 2rem;
  border-top: 1px solid #111;

  .nav-label { font-size: 0.7rem; color: #444; text-transform: uppercase; margin-bottom: 20px; display: block; }
  
  .nav-box {
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    padding: 20px;
    background: #050505;
    border: 1px solid #111;
    transition: 0.3s;
    &:hover { border-color: #fff; }
    
    img { width: 120px; height: 70px; object-fit: cover; filter: grayscale(1); }
    .nav-title { color: #fff; font-size: 0.9rem; font-weight: bold; }
  }
`;

// === MAIN COMPONENT ===
export default function ArticleDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const articleUrl = location.state?.link || `https://uzcert.uz/${id}/`;
  const otherNews = location.state?.allNews || [];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchFullIntelligence = async () => {
      setLoading(true);
      const proxy = "https://restless-base-d1c7.sardordev02.workers.dev/";
      const finalTarget = `${proxy}?url=${encodeURIComponent(articleUrl)}`;
      
      try {
        const res = await fetch(finalTarget);
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Maqola tanasini topish (WordPress bloklari uchun kengaytirilgan)
        const selectors = [
          '.entry-content',
          '.post-content',
          'article .is-layout-flow',
          'main article',
          '.wp-block-post-content'
        ];

        let entryContent = null;
        for (let selector of selectors) {
          entryContent = doc.querySelector(selector);
          if (entryContent && entryContent.innerText.trim().length > 100) break;
        }

        let contentHtml = "";
        if (entryContent) {
          // TABLE va FIGURE teglari qo'shildi
          const nodes = entryContent.querySelectorAll('h2, h3, p, ul, ol, figure, table');
          nodes.forEach(node => {
            const isTable = node.tagName === 'TABLE' || node.querySelector('table');
            const hasText = node.innerText.trim().length > 0;
            const isFigure = node.tagName === 'FIGURE';

            if (hasText || isTable || isFigure) {
              contentHtml += node.outerHTML;
            }
          });
        }

        if (!contentHtml) {
            const fallback = doc.querySelector('article');
            contentHtml = fallback ? fallback.innerHTML : "Ma'lumot topilmadi.";
        }

        setData({
          title: doc.querySelector('h1')?.innerText || doc.title,
          heroImg: doc.querySelector('meta[property="og:image"]')?.content,
          htmlContent: contentHtml
        });

      } catch (err) {
        console.error("Xatolik:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFullIntelligence();
  }, [articleUrl, id]);

  if (loading) return (
    <DetailSection style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      [ DECRYPTING_INTEL_STREAM... ]
    </DetailSection>
  );

  return (
    <DetailSection>
      <MainWrapper  className='mt-5 '>
        <ContentArea initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <BackBtn onClick={() => navigate(-1)}>
            <ArrowLeft size={18} /> BACK_TO_SYSTEM_FEED
          </BackBtn>

          {data?.heroImg && <img src={data.heroImg} alt="Report" className="hero-img" />}
          
          <div style={{color:'#333', fontSize:'0.7rem', marginBottom:'10px'}}>
            SOURCE: UZCERT // REF: {id}
          </div>
          
          <h1>{data?.title}</h1>

          <div 
            className="entry-content" 
            dangerouslySetInnerHTML={{ __html: data?.htmlContent }} 
          />
          
          {/* Previous Post Navigation */}
          {location.state?.prevArticle && (
            <PrevNav>
              <span className="nav-label">Previous_Intelligence_Report</span>
              <Link 
                to={`/news/${location.state.prevArticle.id}`}
                state={{ link: location.state.prevArticle.link, allNews: otherNews }}
                className="nav-box"
              >
                {location.state.prevArticle.img && <img src={location.state.prevArticle.img} alt="prev" />}
                <span className="nav-title">{location.state.prevArticle.title}</span>
              </Link>
            </PrevNav>
          )}
        </ContentArea>

        <Sidebar>
          <div className="sticky-top">
            <h4>Terminal_Updates</h4>
            {otherNews
              .filter(item => item.id !== id)
              .slice(0, 8)
              .map((item, index) => (
                <div key={item.id || index} className="side-card">
                  <span className="ref">#REF_{index + 1}</span>
                  <Link to={`/news/${item.id}`} state={{ link: item.link, allNews: otherNews }}>
                    {item.title}
                  </Link>
                </div>
              ))}
          </div>
        </Sidebar>
      </MainWrapper>
    </DetailSection>
  );
}