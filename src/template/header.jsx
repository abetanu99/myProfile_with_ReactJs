function Header() {
    return(
        <>
        <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky">
            <div className="container">
                <a className="navbar-brand logo" href="/html/index_1">
                    <img src="assets/images/logo.png" alt="" className="img-fluid logo-light"></img>
                    <img src="assets/images/logo-dark.png" alt="" className="img-fluid logo-dark"></img>
                </a>    
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="navbar-collapse collapse" id="navbarCollapse">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item active">
                            <a href="#home" className="nav-link text-secondary">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link text-secondary">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link text-secondary">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#education" className="nav-link text-secondary">Education</a>
                        </li>
                        <li className="nav-item">
                            <a href="#work" className="nav-link text-secondary">Work</a>
                        </li>
                        <li className="nav-item">
                            <a href="#client" className="nav-link text-secondary">Client</a>
                        </li>
                        <li className="nav-item">
                            <a href="#blog" className="nav-link text-secondary">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link text-secondary">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
  }

  export default Header