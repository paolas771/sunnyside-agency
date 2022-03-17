import React from "react"
import Navbar from "./components/Navbar"
import Fruit from "./components/Fruit"
import Testimonals from "./components/Testimonals"
import Description from "./components/Description"
import Footer from "./components/Footer"
import emily from "./images/image-emily.jpg"
import thomas from "./images/image-thomas.jpg"
import jennie from "./images/image-jennie.jpg"

export default function App(){
    return(
        <main>
            <Navbar />
            <div className="transform-stand">
                <div className="topPics pic1"></div>
                <div className="des1">
                    <Description 
                        header="Transform your brand"
                        info="We are a full-service creative agency specializing in helping brands grow fast. 
                        Engage your clients through compelling visuals that do most of the marketing for you."
                    />
                </div>
                <div className="topPics pic2"></div>
                <div className="des2">
                    <Description 
                        header="Stand out to the right audience"
                        info="Using a collaborative formula of designers, 
                        researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
                    />
                </div>
            </div>
            <div className="fruitGrid">
                <div className="cherry">
                    <Fruit 
                        header="Graphic design"
                        info="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
                    />
                </div>
                <div className="orange">
                    <Fruit 
                        header="Photography"
                        info="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                    />
                </div>
            </div>
            
                <h2 className="testHeader">CLIENT TESTIMONIALS</h2>
                <div className="testies">
                <Testimonals 
                    img={emily}
                    test="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                    name="Emily R."
                    position="Marketing Director"
                />
                <Testimonals 
                    img={thomas}
                    test="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
                    name="Thomas S."
                    position="Chief Operating Officer"
                />
                <Testimonals 
                    img={jennie}
                    test="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                    name="Jennie F."
                    position="Business Owner"
                />
            </div>
            <div className="bttmImg">
                <section className="milk"></section>
                <section className="oranges"></section>
                <section className="cone"></section>
                <section className="cubes"></section>
            </div>
            <Footer />
        </main>
    )
}