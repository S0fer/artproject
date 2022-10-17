import About from "./About";
import CakeList from "./CakeList";
import Cake from "./Cake";
import Contact from "./Contact";

function Content() {
    return (
        <div className='whitespace'>
            <About />
            <CakeList />
            <Cake />
            <Contact />
        </div>
    );
}

export default Content;