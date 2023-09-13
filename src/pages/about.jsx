import Wrapper from "../layout/wrapper"
import { neon } from "../assets";

const About = () => {
    return (
        <div className="flex w-full justify-between items-center">
            <div data-aos="fade-left" className="px-[50px]">
                <h2>about me:</h2>
                <div className="flex mt-[10px] justify-start items-start gap-[10px]">
                    <div>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                    </div>
                    <div>
                        <p>
                        My name is Khatamov Nuriddin, <br />
                        I am 16 years old, I am already a <br />
                        very experienced front-end <br />
                        developer, I have worked in <br />
                        many large start-up projects, I <br />
                        like working in a team, I'm fun <br />
                        to work with!
                        </p>
                    </div>
                </div>

                <h2 className="mt-[50px]">skills:</h2>
                <div className="flex mt-[10px] justify-start items-start gap-[10px]">
                    <div>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                    </div>
                    <div>
                        <p>
                        HTML, CSS, JavaScript, jQuery, Bootstrap, Sass, <br />
                        ReactJS, TailwindCSS, Redux, Typescript, NextJS, <br />
                        ChakraUI, DaisyUI, MaterialUI, Firebase, Zustand, <br />
                        Figma
                        </p>
                    </div>
                </div>                
            </div>
            <img data-aos="fade-right" src={neon} className="absolute right-0 -z-20 w-[1000px]" width={800} />  
        </div>
    )
}

export default About