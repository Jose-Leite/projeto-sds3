import ImgDsDark from 'assets/img/TClogo.svg';

const NavBar = () => {
    return (

        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-success bg-opacity-50 border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                    <img src={ImgDsDark} alt="TCLogo" width="120" />
                </nav>
            </div>
        </div>

    );
}

export default NavBar;
