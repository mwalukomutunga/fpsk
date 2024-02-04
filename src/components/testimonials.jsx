const Testimanials = () => {
  return (
    <>
      <section class="d-inline-block tetimonals-work-home-01 w-100">
        <div class="video-sections d-inline-block w-100">
          <div class="img-videom">
            <img src="images/vdeo-bg.jpg" alt="vdeo" />
          </div>
          <div class="container">
            <div class="dveo-text text-center">
              <button
                type="button"
                class="btn btn-play01"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i class="fas fa-play"></i>
              </button>
              <h1 class="mt-5">
                {" "}
                We Give You best Investment With
                <span class="d-block"> A Trusting Relationships </span>{" "}
              </h1>
              <p class="col-md-8 mx-auto mt-4">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <a href="index.html#" class="btn btn-more mt-4 mt-md-5">
                {" "}
                Watch More{" "}
              </a>
            </div>
          </div>
        </div>

        <div class="section-drti-text">
          <div class="container">
            <div class="insui-div d-inline-block w-100">
              <div class="row row-cols-1 row-cols-lg-2">
                <div class="col p-5">
                  <div class="ledt-tsti">
                    <h6 class="sub-text">
                      {" "}
                      <i class="fas fa-circle"></i> TESTIMONIALS{" "}
                    </h6>
                    <h2 class="comon-heading mt-3">
                      {" "}
                      Positive Reviews From <b> Our Customers </b>
                    </h2>
                    <p class="mt-3">
                      {" "}
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <a href="index.html#" class="btn btn-contact mt-5">
                      {" "}
                      Contact Us{" "}
                    </a>
                  </div>
                </div>
                <div class="col">
                  <div class="slider-divo w-100">
                    <div class="slider-testi owl-carousel owl-theme">
                      <div class="tems-slider01">
                        <div class="img-userpic">
                          <div class="quite">
                            <i class="fas fa-quote-right"></i>
                          </div>
                        </div>
                        <div class="para-details mt-5">
                          <p>
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s
                          </p>
                          <div class="d-flex align-items-center mt-5">
                            <figure class="m-0">
                              <img
                                src="images/testimonials-1-1.jpg"
                                alt="pnm"
                              />
                            </figure>
                            <h5 class="ms-3">
                              {" "}
                              James Dan
                              <span class="d-block">JS Founder, USA </span>
                            </h5>
                          </div>
                        </div>
                      </div>

                      <div class="tems-slider01">
                        <div class="img-userpic">
                          <div class="quite">
                            <i class="fas fa-quote-right"></i>
                          </div>
                        </div>
                        <div class="para-details mt-5">
                          <p>
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s
                          </p>
                          <div class="d-flex align-items-center mt-5">
                            <figure class="m-0">
                              <img src="images/teacher-11.jpg" alt="pnm" />
                            </figure>
                            <h5 class="ms-3">
                              {" "}
                              Patel Smith
                              <span class="d-block">JS Founder, USA </span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="d-none w-100 work-diuo-div">
        <div class="work-count-div">
          <div class="container">
            <div class="row row-cols-1 row-cols-md-4 gy-5 g-lg-5" id="counter">
              <div class="col">
                <div class="comon-number1" data-aos="fade-up">
                  <div class="d-flex align-items-center justify-content-center">
                    <h2 class="counter-value" data-count="10">
                      0
                    </h2>
                    <span>
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>

                  <p> Years Of Experience </p>
                </div>
              </div>
              <div class="col">
                <div class="comon-number1" data-aos="fade-up">
                  <div class="d-flex align-items-center justify-content-center">
                    <h2 class="counter-value" data-count="28">
                      0
                    </h2>
                    <span>
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                  <p> Expert Staffs </p>
                </div>
              </div>
              <div class="col">
                <div class="comon-number1" data-aos="fade-down">
                  <div class="d-flex align-items-center justify-content-center">
                    <h2 class="counter-value" data-count="500">
                      0
                    </h2>
                    <span>
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                  <p> Positive Review </p>
                </div>
              </div>
              <div class="col">
                <div class="comon-number1" data-aos="fade-up">
                  <div class="d-flex align-items-center justify-content-center">
                    <h2 class="counter-value" data-count="450">
                      0
                    </h2>
                    <span>
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                  <p> Satisfied Clients </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimanials;
