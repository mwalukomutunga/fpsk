const Footer = () => {
  return (
    <footer class="float-start w-100 footer-new">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 g-lg-5">
          <div class="col">
            <div class="company-detailso">
              <a href="index.html">
                <img alt="logo" width="100px" src="images/logo-fpsk.png" />
              </a>
              <p class="my-5">
                Together – Repositioning the Fodder and Pasture Value Chains in
                Kenya for a Competitive Livestock Sub sector.
              </p>
              {/* <ul>
                <li>
                  <a href="index.html#" class="btn socal-links">
                    {" "}
                    <i class="fab fa-facebook-f"></i>{" "}
                  </a>
                  <a href="index.html#" class="btn socal-links">
                    {" "}
                    <i class="fab fa-twitter"></i>{" "}
                  </a>
                  <a href="index.html#" class="btn socal-links">
                    {" "}
                    <i class="fab fa-google-plus-g"></i>{" "}
                  </a>
                  <a href="index.html#" class="btn socal-links">
                    {" "}
                    <i class="fab fa-youtube"></i>{" "}
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
          <div class="col all-right-footer d-grid justify-content-lg-center">
            <div class="fotter-comgh">
              <h5> Explore More</h5>
              <ul>
                <li>
                  <a href="index.html">
                    {" "}
                    <i class="fas fa-arrow-right"></i> Home{" "}
                  </a>
                </li>
                <li>
                  <a href="index.html#about">
                    {" "}
                    <i class="fas fa-arrow-right"></i> About Us{" "}
                  </a>
                </li>
                <li>
                  <a href="index.html#team">
                    {" "}
                    <i class="fas fa-arrow-right"></i> Our Team
                  </a>
                </li>
                <li>
                  <a href="index.html#why">
                    {" "}
                    <i class="fas fa-arrow-right"></i> Why us{" "}
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    {" "}
                    <i class="fas fa-arrow-right"></i> Contact{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col all-right-footer">
                  <div class="fotter-comgh">
                    <h5> Members</h5>
                    <ul class="insta-gma">
                      <li>
                        <a href="index.html#"> 
                          <div class="img-0">
                            <img alt="shj" src="images/Edith Wanja John.jpg"/>
                          </div>  
                        </a>
                      </li>
                      <li>
                       <a href="index.html#"> 
                         <div class="img-0">
                           <img alt="shj" src="images/Emily Odumba.jpg"/>
                         </div>  
                       </a>
                     </li>
                     <li>
                       <a href="index.html#"> 
                         <div class="img-0">
                           <img alt="shj" src="images/Joyce M Mutua.png"/>
                         </div>  
                       </a>
                     </li>
                     <li>
                       <a href="index.html#"> 
                         <div class="img-0">
                           <img alt="shj" src="images/Wilson Lelei.jpg"/>
                         </div>  
                       </a>
                     </li>
                     <li>
                       <a href="index.html#"> 
                         <div class="img-0">
                           <img alt="shj" src="images/Laureen .M. Njuguna.jpg"/>
                         </div>  
                       </a>
                     </li>
                     <li>
                       <a href="index.html#"> 
                         <div class="img-0">
                           <img alt="shj" src="images/Samuel Kariuki.png"/>
                         </div>  
                       </a>
                     </li>
                     <li>
                       <a href="index.html#"> 
                         <div class="img-0">
                           <img alt="shj" src="images/Gabriel Muli.jpg"/>
                         </div>  
                       </a>
                     </li>
                      
                    </ul>
                  </div>
                </div>
          <div class="col all-right-footer">
            <div class="fotter-comgh">
              <h5> Contact Information</h5>

              <form method="get" class="mt-4">
                <div class="subscibe-footer d-flex align-items-center">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button type="submit" class="btn ms-lg-3">
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
              <ul class="contact-gma">
                <li>
                  <span>
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <span>Hill Plaza Building, 
                    Nairobi, Kenya</span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <span>
                  
                  +254 111255274 <br />
                  +254 725396615
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span>info.fpsk1@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="bg-light" />
        <p class="text-center text-white">
          {" "}
          © 2024 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
