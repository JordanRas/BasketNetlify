function Navbar() {
    return (
      <>
        <header className="header fixed-top" style={{background: '#f8f8f8'}}>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <img alt="Brand" src="logo.png" style={{ width: '5%', float: 'inline-start' }}/>
                </a>
                </div>
            </div>
        </nav>
        </header>
        
      </>
    )
  }
  
  export default Navbar