//import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <NavBar />
             <ItemListContainer greeting="Cell com" /> 
{/*            <ItemDetailContainer /> */}
        </div>
    );
}

export default Home;
