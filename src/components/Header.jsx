const Header = () => {
  return (
    <header class="float-start w-100">
      <div class="top-header01">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand" href="index.html">
              <img alt="sr" src="images/logo.png" />
            </a>
            <div class="right-menu-rd d-flex d-lg-none">
              <div class="d-flex align-items-center">
                {/* <a href="index.html#" class="btn btn-login">
                  Login
                </a>
                <a href="index.html#" class="btn btn-partners ms-3">
                  Start Free
                </a> */}
              </div>
              <button
                class="navbar-toggler border-0 p-0 ms-4"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobile-menu"
              >
                <i class="fas fa-bars"></i>
              </button>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" href="index.html">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    Why Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    Services
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="our-adviser.html">
                    Our team
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div class="right-menu-rd d-none d-lg-block">
              <div class="d-flex align-items-center">
                <div class="comon-phone d-flex align-items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </span>
                  <span>
                    <b class="text-icon">+254 011 125 5274 </b>
                    <br />
                    <a href="index.html#" class="d-inline-block">
                      Any quries? Call us
                    </a>
                  </span>
                </div>
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                  class="btn btn-partners ms-3"
                >
                 Portal
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
