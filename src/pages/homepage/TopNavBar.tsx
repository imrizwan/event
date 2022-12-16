import { Dropdown } from "../../components";


const TopNavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-20 bg-gray-900">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <a href="#" className="text-white font-bold text-xl">Logo</a>
                <div className="flex items-center">
                    <a href="#" className="text-white mr-3">Home</a>
                    <a href="#" className="text-white mr-3">About</a>
                    <a href="#" className="text-white mr-3"><Dropdown /></a>
                </div>
            </div>
        </nav>

    )
}
export default TopNavBar; 