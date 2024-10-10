import './App.css'
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  const setAct = () => {
    setActive(a => !a);
  };

  const [active1, setActive1] = useState(false);

  const setAct1 = () => {
    setActive1(a => !a); 
  };
  
  const [active2, setActive2] = useState(false);

  const setAct2 = () => {
    setActive2(a => !a);
  };
  
  const [active3, setActive3] = useState(false);

  const setAct3 = () => {
    setActive3(a => !a); 
  };

  return (
    <div className="container">
      <img className='desktop-banner' src="design/background-pattern-desktop.svg" alt="desktop banner"/>
      <img src="design/background-pattern-mobile.svg" alt="" className="mobile-banner" />

      <div className="main">
        <div className="faq-section">
          <div className="head">
            <img src="design/icon-star.svg" alt="star" />
            <h1>FAQs</h1>
          </div>
          <div className="lists lists-1">
            <div className="mini">
              <li onClick={setAct} className={`list-1 ${active ? 'active' : ''}`}>
                What is Frontend Mentor, and how will it help me?
              </li>
              <img className={`p-1 ${!active ? '' : 'hidden'}`} src="/design/icon-plus.svg" alt="plus" />
              <img className={`p-1 ${active ? '' : 'hidden'}`} src="/design/icon-minus.svg" alt="minus" />
            </div>
            <p className={`p-1 ${active ? '' : 'hidden'}`}>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>
          </div>
          <div className="lists lists-2">
            <div className="mini">
              <li onClick={setAct1} className={`list-2 ${active1 ? 'active' : ''}`}>Is Frontend Mentor free?</li>
              <img className={`p-2 ${!active1 ? '' : 'hidden'}`} src="/design/icon-plus.svg" alt="plus" />
              <img className={`p-2 ${active1 ? '' : 'hidden'}`} src="/design/icon-minus.svg" alt="minus" />
            </div>
            <p className={`p-2 ${active1 ? '' : 'hidden'}`}>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</p>
          </div>
          <div className="lists lists-3">
            <div className="mini">
              <li onClick={setAct2} className={`list-3 ${active2 ? 'active' : ''}`}>Can I use Frontend Mentor projects in my portfolio?</li>
              <img className={`p-3 ${!active2 ? '' : 'hidden'}`} src="/design/icon-plus.svg" alt="plus" />
              <img className={`p-3 ${active2 ? '' : 'hidden'}`} src="/design/icon-minus.svg" alt="minus" />
            </div>
            <p className={`p-3 ${active2 ? '' : 'hidden'}`}>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>
          </div>
          <div className="lists lists-4">
            <div className='mini'>
              <li onClick={setAct3} className={`list-1 ${active3 ? 'active' : ''}`}>How can I get help if I'm stuck on a Frontend Mentor challenge?</li>
              <img className={`p-4 ${!active3 ? '' : 'hidden'}`} src="/design/icon-plus.svg" alt="plus" />
              <img className={`p-4 ${active3 ? '' : 'hidden'}`} src="/design/icon-minus.svg" alt="minus" />
            </div>
            <p className={`p-4 ${active3 ? '' : 'hidden'}`}>How can I get help if I'm stuck on a Frontend Mentor challenge?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
