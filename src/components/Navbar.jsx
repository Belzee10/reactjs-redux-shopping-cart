import React from "react";

const Navbar = props => {
  const { totalItems } = props;
  const badge = (
    <a className="nav-link login-link" href="/">
      {totalItems > 0 && (
        <span className="badge badge-warning mr-1">{totalItems}</span>
      )}
      Cart
    </a>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Shopping Cart
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">{badge}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
