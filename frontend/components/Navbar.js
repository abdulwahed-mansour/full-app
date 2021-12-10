import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container py-2">
          <Link href="/">
            <a class="navbar-brand d-flex alain-item-center">
              <Image
                src="/logo2.svg"
                alt="logo"
                width="132"
                height="30"
              />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="about">
                  <a className="nav-link">About Us</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="blog">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    News
                  </a>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href="blog">
                      <a className="dropdown-item">Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/post">
                      <a className="dropdown-item">Post action</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="#">
                      <a className="dropdown-item">Something else here</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="navbar-nav ms-auto">
              <a href="#" class="nav-item nav-link">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
