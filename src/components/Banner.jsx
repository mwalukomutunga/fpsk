const Banner = () => {
  return (
    <section class="banner-part float-start w-100">
      <figure class="m-0">
        <img alt="bg-img" src="images/11.jpg" />
      </figure>
      <div class="container d-grid align-content-center">
        <div class="col-md-7">
          <div class="text-banner">
            <h6> Welcome to FPSK</h6>
            <h1 class="mt-4 mb-4 text-white">
              Fodder and Pasture Society
              <span class="d-block d-xl-block"> of Kenya </span>{" "}
            </h1>
            <p class="col-lg-9">
              Together – Repositioning the Fodder and Pasture Value Chains in
              Kenya for a Competitive Livestock Sub sector.
            </p>
            <a href="index.html#" class="btn mt-5 get-st"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
