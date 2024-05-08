import logo from '../images/logo.png';
export default function Navbar() {

    

    return(
        <div className="navbar">

                    <div className="logo">
                        <img className='logo' src={logo} alt="logo" />
                    </div>

                    <div className="searchbar">
                        <input
                        className='search' 
                        type="text"
                        placeholder="find a car"
                        />
                    </div>           

                    <div className="menu">
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
       </div>
    )
}







