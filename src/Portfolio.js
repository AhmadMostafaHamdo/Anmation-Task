import { useRef } from 'react'
import './portfolio.css'

export default function Portfolio () {
    const home = useRef();
    const about = useRef();
    const portofolio = useRef();
    const contact = useRef();
    const icon1 = useRef();
    const icon2 = useRef();
    const icon3 = useRef();
    const icon4 = useRef();
    const icon5 = useRef();
    const icon6 = useRef();
    window.onscroll = ()=> {
        newFunction();

        function newFunction() {
          icon1.current.style.left = "50%";
          icon1.current.style.transform = "rotate(0deg)";          
          icon2.current.style.left = "55%";
          icon2.current.style.transform = "rotate(0deg)";          
          icon3.current.style.left = "60%";
          icon4.current.style.left = "65%";
          icon5.current.style.left = "70%";
          icon6.current.style.left = "75%";
          icon1.current.style.top = "67%";
          icon2.current.style.top = "67%";
          icon3.current.style.top = "67%";
          icon4.current.style.top = "67%";
          icon5.current.style.top = "67%";
          icon5.current.style.transform = "rotate(0deg)";          
          icon6.current.style.top = "67%";
          icon6.current.style.transform = "rotate(0deg)";          
        }
    }
    return (
        <div className="portfolio">
            {/* icons  */}
                {/* Start Header */}
                <div className='header'>
                    <img src={require('./images/Hani.dev.png')} alt='logo' />
                    <div className='header-links'>
                        <ul>
                            <li>Home</li>
                            <li 
                                onClick={()=>about.current.scrollIntoView({
                                    behavior:"smooth",
                                })}
                                >About</li>
                            <li
                             onClick={()=>portofolio.current.scrollIntoView({
                                behavior:"smooth",
                            })}
                            >Portfolio</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                {/* End Header */}
                <div className='anmi-icons'>
                <img src={require('./icons/Group 2.png')} alt='img1' ref={icon1}/>
                <img src={require('./icons/Group 1.png')} alt='img2' ref={icon2}/>
                <img src={require('./icons/Group 3.png')} alt='img3' ref={icon3}/>
                <img src={require('./icons/Group 5.png')} alt='img4' ref={icon4}/>
                <img src={require('./icons/Group 6.png')} alt='img5' ref={icon5}/>
                <img src={require('./icons/Group 4.png')} alt='img6' ref={icon6}/>
            </div>
            <div className="container">

                {/* Start Home */}
                <div className='home' ref={home}>
                    <div className='home-content'>
                        <div className='home-text'>
                            <h1>Front-End React Developer</h1>
                            <p>Hi, I am Hani Hadid, a passionate Front-End Developer from Syria.png</p>
                        </div>
                    </div>
                    <div className='home-image'>
                            <img src={require('./images/50353683 1 (1).png')} alt='personal image' className='right1'/>       
                    </div>
                    <div className='icons'>
                        <img src={require('./images/Vector-github.png')} alt='personal image' />
                        <img src={require('./images/Vector-in.png')} alt='personal image' />
                    </div>
                    <p className='tech'>Tech stack</p>
                </div>
                {/* End Home */}

                {/* Start About me */}
                <div className='about' ref={about}>
                    <div className='container' >
                        <div className='about-conttent'>
                            <img src={require('./images/0_UnaZKWRx_J94eTVw 1.png')} alt='image' />
                            <div className='text'>
                                <span>About me</span>
                                <p>Hello, I'm Hani, a Frontend Developer who is dedicated to crafting sleek UI/UX experiences for users. Currently, I primarily work with React/Next.js, Tailwind CSS, and TypeScript in my projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About me */}
                {/* Start Portfolio */}
                <div className='portfolio1' ref={portofolio}>
                    <span>Portfolio</span>
                    <p>I would like to present my portfolio for your consideration.</p>
                    <div className='portfolio'>
                    <div className='portfolio-content'>
                        <img src={require('./images/Frame 1 1.png')} alt="image" className="img"/>
                        <div className='features'>
                            <h2>
                                Erick coffee
                            </h2>
                            <p>The website features a modern and sleek design, showcasing Erick Coffee's products and brand story. </p>
                            <div className='language'>
                                <span>React</span>
                                <span>Scss</span>
                            </div>
                            <div className='sites'>
                               code <img src={require('./images/Vector-github.png')} alt='github' />
                               Live Demo <img src={require('./images/Vector (2).png')} alt='github' />
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='portfolio'>
                    <div className='portfolio-content'>
                        <div className='features'>
                            <h2>
                                Chicken
                            </h2>
                            <p>I designed a website for the restaurant Chicken, featuring an elegant and user-friendly interface to showcase their menu offerings and services. </p>
                            <div className='language'>
                                <span>React</span>
                                <span>Scss</span>
                            </div>
                            <div className='sites'>
                               code <img src={require('./images/Vector-github.png')} alt='github' />
                               code <img src={require('./images/Vector (2).png')} alt='github' />
                            </div>
                        </div>
                        <img src={require('./images/web design- creativezaiid 1.png')} alt="image" className="img"/>
                    
                    </div>
                    </div>
                    <div className='portfolio'>
                    <div className='portfolio-content'>
                        <img src={require('./images/web design- creativezaiid 2.png')} alt="image" className="img"/>
                        <div className='features'>
                            <h2>
                               Elevate
                            </h2>
                            <p>I crafted a website for Elevate Airlines that prioritizes both sophistication and ease of use. This user-friendly interface will seamlessly showcase our flight destinations, services, and booking options. </p>
                            <div className='language'>
                                <span>React</span>
                                <span>Scss</span>
                            </div>
                            <div className='sites'>
                               code <img src={require('./images/Vector-github.png')} alt='github' />
                               Live Demo <img src={require('./images/Vector (2).png')} alt='github' />
                            </div>
                        </div>
                    </div>
                    </div>
                    <button>See more</button>
                </div>
                {/* End Portfolio */}

                {/* Start Contact */}
                <div className='contact'>
                <h2>Contact</h2>
                <p>Don,t hesitate to call me</p>
                <div>
                    <div>
                        <img src={require('./icons/Frame 4.png')}  alt="" />
                        <div>
                            <span className='title'>Phone Number</span>
                            <span>+963 938 538 466</span>
                        </div>
                    </div>
                    <div>
                        <img src={require('./icons/mail.png')}  alt=""/>
                        <div>
                            <span className='title'>Email</span>
                            <span>hanihadid.22@gmail.com</span>
                        </div>
                    </div>
                </div>
                </div>
                {/* End Contact */}
            </div>
             {/* Start Footer */}
             <div className='footer'>
                    <p>Copyright @2024.All rigths are reserved.</p>
                    <div>
                        <img src={require('./images/Vector-github.png')}  alt=""/>
                        <img src={require('./images/Vector-in.png')} alt="" />
                    </div>
                </div>
                {/* End Footer */}
        </div>)
}