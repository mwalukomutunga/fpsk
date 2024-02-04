const Banner = () => {
  return (
    <section class="banner-part float-start w-100">
      <figure class="m-0">
        <img alt="bg-img" src="images/land-banner.jpg" />
      </figure>
      <div class="container d-grid align-content-center">
        <div class="col-md-7">
          <div class="text-banner">
            <h6> Welcome to Utiy</h6>
            <h1 class="mt-4 mb-4 text-white">
              Makes <b>Secure </b> Your
              <span class="d-block d-xl-block"> Retirement Planing </span>{" "}
            </h1>
            <p class="col-lg-9">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
            <a href="index.html#" class="btn mt-5 get-st">
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
