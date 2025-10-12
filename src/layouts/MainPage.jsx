import Header from "../components/Header";
import Home from "../pages/Home";
import Footer from "../components/Footer";

function MainPage() {
    return (
        <div className="h-full light:bg-slate-200 bg-zinc-900 text-white light:text-black">
        <Header />
        <Home />
        <Footer />
        </div>
    )
}
export default MainPage;