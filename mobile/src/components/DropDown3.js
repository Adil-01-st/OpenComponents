function DropDown3() {
return(

<div className="container">
<div className="row">

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
<a className="navbar-brand" href="#">Navbar</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle-navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
<ul className="navbar-nav">
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
</a>
<ul className="dropdown-menu dropdown menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
<li><a className="dropdown-item" href="#">Action</a></li>
<li><a className="dropdown-item" href="#">Another action</a></li>
<li><a className="dropdown-item" href="#">Something else here</a></li>   
</ul>
</li>
</ul>
</div>
</div>
</nav>
</div>
</div>
);
}

export default DropDown3;