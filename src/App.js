import React from "react"
import './App.css'
import Logo from "./Images/Logo.svg"
import Webicon from "./Images/Webicon.png"
import Lady from "./Images/Lady.png"
import manChild from "./Images/manChild.png"
import Getup from "./Images/Getup.png"
import Choose from "./Images/Choose.png"
import Build from "./Images/Build.png"
import Createvalue from "./Images/Createvalue.png"
import Pearson from "./Images/pearson.jpg" 
import Brewdog from "./Images/Brewdog.jpg"
import Bridgestone from "./Images/Bridgestone.jpg"
import Klarna from "./Images/Klarna.jpg"
import Closequotes from "./Images/Closequotes.png"
import Deichmann from "./Images/Deichmann.jpg"
import Waterson from "./Images/Waterson.jpg"
import Exabytes from "./Images/Exabytes.jpg"
import Fiverr from "./Images/Fiverr.jpg"
import Openquotes from "./Images/Openquotes.png"
import Travix from "./Images/Travix.jpg"
import Vicemedia from "./Images/Vicemedia.jpg"
import Schoeller from "./Images/Schoeller.png"
import Multichoice from "./Images/Multichoice.jpg"
import Bluenile from "./Images/Bluenile.jpg"
import Trainline from "./Images/Trainline.png"
import Engel from "./Images/Engel.jpg"
import Itv from "./Images/Itv.jpg"
import Delivery from "./Images/Delivery.png"
import Katzmedia from "./Images/Katzmedia.jpg"
import Culture from "./Images/Culture.jpg"
import Diversity from "./Images/Diversity.png"
import Experience from "./Images/Experience.jpg"
import Team from "./Images/Team.jpg"


function App (){
  return(
   
    <div className="body">
        <div className="navbar">
            <div className="navbarContainer">
                <div className="Logo">
                    <img src={Logo}/>
                </div>
                <div className="rightnav">
                    <div>Products</div>
                    <div>Platform</div>
                    <div>Company</div>
                    <div>Resources</div>
                    <div>Customers</div>
                    <div>Support</div>
                    <div className="Webicon"><img src={Webicon}/></div>
                </div>
            </div>
        </div>
        
        <div className="first">
            <div className="firstText">
                <div className="firstTextWrapper">
                    <br/><br/> 
                <div className="delight">
                    <p>Delight made</p><p>easy</p>
                </div> 
                <br/>
                    <div className="wemake">We make it fast and easy for your business to delight<br/> customers and employees</div><br/>
                    <div className="buttons">
                        <button className="button1">FREE TRIALS</button>
                        <button className="button2">CONTACT SALES</button>
                    </div>
                </div>    
            </div>
            <div className="Lady"><img src={Lady}/></div>
        </div>

        <div className="second">
            <div className="manChild"><img src={manChild}/></div>
            <div className="secondText">
                <div className="secondTextWrapper">
                    <div className="secondTextUpper">Try the business software used by over<br/>
                    50,000 companies across the globe to<br/>
                    exceed customer and employee<br/>
                    expectations.
                    </div>
                    <div className="secondTextLower">
                        <div className="STLLeft">
                            <button className="button3">Customer Service</button>
                            <button className="button4">HR Management</button>
                            <button className="button5">Marketing Automation</button>
                        </div>
                        <div className="STLRight">
                            <button className="button6">IT Service Management</button>
                            <button className="button7">Sales Automation</button>
                            <button className="button8">All Products & Trials</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="third">
            <div className="thirdWrapper">
                <div className="thirdRow1">
                    <h1>Frictionless, simply, easy</h1>
                    <br/>
                    <h4>Freshworks makes it fast and easy for businesses to delight
                         their customers and employees.</h4>
                    <br/>
                    <h4>We take a fresh approach to how businesses discover, engage with,
                         and realize value from software throughout their journey.</h4>
                </div>
                <br/>
                <div className="thirdRow2">
                    <div className="thirdRow2Left">
                        <img className="Getup" src={Getup}/><br/>
                        <h2>Get up and running with no barriers</h2>
                        <p>Try or purchase our software directly from our website,</p>
                        <p>and onboard in a matter of days, not months.</p>
                        <p>Start free trial</p>
                    </div>
                    <div className="thirdRow2Right">
                        <img className="Choose" src={Choose}/><br/>
                        <h2>Choose your pricing plan</h2>
                        <p>Our pricing plans are designed for modern business use cases and</p>
                        <p>affordable for organizations of all sizes.</p>
                        <p>See pricing</p> 
                    </div>
                </div>
                <div className="thirdRow3">
                    <div className="thirdRow3Left">
                        <img className="Build" src={Build}/><br/>
                        <h2>Build and customize as you go</h2>
                        <p>Extend and tailor experiences to meet your unique</p>
                        <p>business needs, with low-code development and over 1,100</p>
                        <p>custom apps made available on our marketplace.</p>
                        <p>Visit marketplace</p>
                    </div>
                    <div className="thirdRow3Right">
                        <img className="Createvalue" src={Createvalue}/><br/>
                        <h2>Create value, fast</h2>
                        <p>Accelerate your team's productivity and efficiency with</p>
                        <p>modern automation and collaboration tools, to get tangible</p>
                        <p>results in no time</p>
                        <p>Start free trial</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="fourth">
            <div className="fourthWrapper">
                <div className="fourthText">
                    <h1>Trusted by 50K+ customers big and small</h1>
                    <p>We are a leading provider of modern SaaS solutions that solve multiple,
                         complex business problems to companies of all sizes. Businesses from</p>
                    <p>more than 120 countries around the world use Freshwork's products to delight their customers and employees every day.</p>     
                </div>
                <div className="fourthlogos1">
                    <img className="FourthLogos1a" src={Pearson}/>
                    <img className="FourthLogos1b" src={Brewdog}/>
                    <img className="fourthLogos1c" src={Bridgestone}/>
                    <img className="fourthLogos1d" src={Travix}/>
                    <img className="fourthLogos1e" src={Klarna}/>
                    <img className="fourthLogos1f" src={Vicemedia}/>
                </div>
                <div className="fourthlogos2">
                    <img className="fourthLogos1g" src={Deichmann}/>
                    <img className="fourthLogos1h" src={Waterson}/>
                    <img className="fourthLogos1i" src={Fiverr}/>
                    <img className="fourthLogos1j" src={Exabytes}/>
                    <img className="fourthLogos1k" src={Schoeller}/>
                    <img className="FourthLogos1l" src={Multichoice}/>
                </div>
                <div className="fourthlogos3">
                    <img className="fourthLogos1m" src={Bluenile}/>
                    <img className="fourthLogos1n" src={Trainline}/>
                    <img className="fourthLogos1o" src={Engel}/>
                    <img className="fourthLogos1p" src={Itv}/>
                    <img className="fourthLogos1q" src={Delivery}/>
                    <img className="fourthLogos1r" src={Katzmedia}/>
                </div>
            </div>
        </div>

        
            <div className="fifth">
                <div className="fifthWrapper">
                    <div className="fifthText1">
                        <img className="Openquotes" src={Openquotes}/>
                        <img className="Waterson" src={Waterson}/>
                        <img className="Closequotes" src={Closequotes}/>
                    </div>
                    <br/><br/>
                    <div className="fifthText2">
                        <p>“The Freshworks team was a great asset during implementation and continue to be a key partner</p> 
                        <p>for Waterstons as we look to further mature and improve our services to customers, tailored to</p> 
                        <p>their specific needs.”</p>
                        <br/>
                        <p><strong>Alex Bookless, Head of Managed Services, Waterstons</strong></p>
                    </div>
                </div>
            </div>

            <div className="sixth">
                <div className="sixthWrapper">
                    <div className="sixthRow1">We aspire to be one of the most loved companies in the world</div>
                    <div className="sixthRow2">
                        <img className="Culture" src={Culture}/>
                        <img className="Diversity" src={Diversity}/>
                        <img className="Experience" src={Experience}/>
                        <img className="Team" src={Team}/>
                    </div>
                    <div className="sixthRow3">
                        <div className="sixthRow3a">
                            <h2>Culture</h2>
                            <p>A culture that supports high-</p>
                            <p>quality work, joy and pride in that</p>
                            <p>work, speed to execution, and</p>
                            <p>intense customer focus.</p>
                        </div>
                        <div className="sixthRow3b">
                            <h2>Diversity</h2>
                            <p>Full-spectrum diversity, equity,</p>
                            <p>and inclusion are key priorities for</p>
                            <p>us.</p>
                        </div>
                        <div className="sixthRow3c">
                            <h2>Experience</h2>
                            <p>Focus on enhancing the team</p>
                            <p>experience by strengthening our</p>
                            <p>managers’ leadership capabilities.</p>
                        </div>
                        <div className="sixthRow3d">
                            <h2>Team</h2>
                            <p>4,000 employees and growing in</p>
                            <p>offices across India, US, Europe,</p>
                            <p>and Australia.</p>
                        </div>
                    </div>
                    <div className="sixthRow4">
                        <button className="See">See life at Freshwork</button>
                    </div>
                </div>
            </div>

            <div className="seventh">
                <div className="seventhWrapper">
                    <div className="seventhRow1">Ready to get started?</div><br/>
                    <div className="seventhRow2">Join our community of 50,000+ companies of all sizes who use Freshworks' 
                    modern SaaS products to make it fast and easy to<br/>delight our customers and employees</div><br/>
                    <div className="seventhRow3"><button className="Contactsales2">Contact sales</button></div>
                </div>
            </div>

        

        <button className="ContactSales">CONTACT SALES</button>
    </div>
    
  );
}

export default App

