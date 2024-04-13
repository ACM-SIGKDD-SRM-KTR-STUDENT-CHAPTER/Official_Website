import React,{useState,useEffect} from 'react'
import '../css/About.css'
import Focus from '../components/about/focus/Focus'
import Spline from '@splinetool/react-spline';

function About() { 
  const [scroll, setScroll] = useState(0);

    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });

  return (
    <>
    <div id="progressBarContainer">
                <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
            </div>
    <section className="landing-section section h-70vh" style={{marginTop:"220px"}}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center mobtitle">
              <h1 className="title">
                About{" "}
                <span style={{ color: "var(--secondary-color)",textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                 Us
                </span>{" "}
              </h1>
            </div>
          </div>
          <div className="container">
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p className='textt'>As an official student chapter of ACM SIGKDD (Special Interest Group on Knowledge Discovery in Data), we are committed to fostering a culture of innovation, learning, and collaboration in the field of data science and data related fields.<br/><br/> Our members work across multiple disciplines to deliver their solutions for the world!</p>
                    <p className='textt'>We make real-time projects, conduct researches, organize meetups, host events, and workshops primarily focusing on Data Science, Machine Learning, Al, Web Development and more. We guide and teach all those who aspire to work in these fields and help them attain better skills and knowledge.</p>
                  </div>
                </div>
                <Spline className='threed' scene="https://prod.spline.design/v-IBsi0nOsWOEuWg/scene.splinecode" style={{marginTop:"-70px"}}/>
  <div className="content" style={{marginTop:"-160px"}}>
  <Focus/>
  </div>
</div>
        </div>
      </section>
    </>
  )
}

export default About