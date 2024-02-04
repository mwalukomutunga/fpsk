const Contact = () => {
  return (
    <section class="contact-us-page d-inline-block w-100 my-5">
      <div class="container">
        <div class="container">
          <div class="row g-lg-5">
            <div class="col-lg-5 col-xl-4">
              <div class="cm-text-n">
                <h6 class="mb-0">Let's Talk</h6>
                <h2> We are here to Help You </h2>
                <ul class="list-unstyled mt-4">
                  <li class="d-flex">
                    <span class="icon-c">
                      <i class="fas fa-phone-square-alt"></i>
                    </span>
                    <span class="text-c">
                      {" "}
                      Call Us
                      <small class="d-block"> +254 111 25 5274 </small>
                    </span>
                  </li>
                  <li class="d-flex">
                    <span class="icon-c">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="text-c">
                      Email:
                      <small class="d-block"> info.fpsk1@gmail.com </small>
                    </span>
                  </li>
                  <li class="d-flex">
                    <span class="icon-c">
                      <i class="fas fa-map-marker-alt"></i>
                    </span>
                    <span class="text-c">
                      {" "}
                      Fax:
                      <small class="d-block"> +254 725 39 6615 </small>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-7 col-xl-8">
              <div class="conatct-form-div mb-5 mt-5 mt-lg-0">
                <h6 class="mb-0">Send us a message</h6>
                <h2> Fill The Form Below </h2>
                <form name="fmn" method="post">
                  <div class="row mt-4">
                    <div class="col-lg-6">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Name"
                        required=""
                      />
                    </div>
                    <div class="col-lg-6">
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div class="col-lg-6">
                      <input
                        type="text"
                        name="phone"
                        class="form-control"
                        placeholder="Phone"
                        required=""
                      />
                    </div>
                    <div class="col-lg-6">
                      <input
                        type="text"
                        name="subject"
                        class="form-control"
                        placeholder="Subject"
                        required=""
                      />
                    </div>
                    <div class="col-lg-12">
                      <textarea
                        class="form-control"
                        name="message"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div class="col-lg-12">
                      <input
                        type="submit"
                        name="submit"
                        class="btn subimt-message"
                        value="Submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section class="apoinments-div d-inline-block w-100">
    //   <div class="container">
    //     <div class="row row-cols-1 row-cols-lg-2 gy-5 g-lg-5">
    //       <div class="col">
    //         <h6 class="sub-text">
    //           {" "}
    //           <i class="fas fa-circle"></i> Contact us{" "}
    //         </h6>
    //         {/* <h2 class="comon-heading my-4"> Schedule Your Appointment For Today</h2> */}
    //         <p>
    //           {" "}
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since
    //         </p>
    //         <h5 class="mt-4"> Opening Hours </h5>
    //         <div class="con-time mt-4 d-flex align-items-center justify-content-between">
    //           <span> Monday - Saturday </span>
    //           <span>
    //             {" "}
    //             <i class="far fa-clock"></i> 08.00 AM - 18.00 PM
    //           </span>
    //         </div>
    //         <div class="row row-cols-1 row-cols-lg-2 gy-5 g-lg-5 mt-0">
    //           <div class="col">
    //             <div class="comon-address">
    //               <h5> New York, USA </h5>
    //               <ul class="mt-4">
    //                 <li class="d-flex align-items-start">
    //                   <span class="me-2">
    //                     {" "}
    //                     <i class="fas fa-map-marker-alt"></i>{" "}
    //                   </span>
    //                   <span> Hill Plaza Building, Nairobi, Kenya</span>
    //                 </li>
    //                 <li class="d-flex align-items-start">
    //                   <span class="me-3">
    //                     {" "}
    //                     <i class="far fa-envelope"></i>{" "}
    //                   </span>
    //                   <span> exmaple@gmail.com</span>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>

    //           <div class="col">
    //             <div class="comon-address">
    //               <h5> New York, USA </h5>
    //               <ul class="mt-4">
    //                 <li class="d-flex align-items-start">
    //                   <span class="me-2">
    //                     {" "}
    //                     <i class="fas fa-map-marker-alt"></i>{" "}
    //                   </span>
    //                   <span>
    //                     {" "}
    //                     1 E 2nd St, New York,
    //                     <br /> NY 10003, USA
    //                   </span>
    //                 </li>
    //                 <li class="d-flex align-items-start">
    //                   <span class="me-2">
    //                     {" "}
    //                     <i class="far fa-envelope"></i>{" "}
    //                   </span>
    //                   <span> exmaple@gmail.com</span>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col">
    //         <div class="form-divu02 ms-0 ms-lg-3">
    //           <form
    //             method="get"
    //             action="https://oxentictemplates.in/templatemonster/retirement/am"
    //           >
    //             <div class="row">
    //               <div class="col-lg-12">
    //                 <div class="form-group">
    //                   <input
    //                     type="text"
    //                     class="form-control"
    //                     placeholder="Your Name"
    //                   />
    //                 </div>
    //               </div>
    //               <div class="col-lg-6">
    //                 <div class="form-group">
    //                   <input
    //                     type="text"
    //                     class="form-control"
    //                     placeholder="Phone"
    //                   />
    //                 </div>
    //               </div>
    //               <div class="col-lg-6">
    //                 <div class="form-group">
    //                   <input
    //                     type="email"
    //                     class="form-control"
    //                     placeholder="Email"
    //                   />
    //                 </div>
    //               </div>
    //               <div class="col-lg-12">
    //                 <div class="form-group">
    //                   <select class="form-select">
    //                     <option selected>Select Subject</option>
    //                     <option value="1">One</option>
    //                     <option value="2">Two</option>
    //                     <option value="3">Three</option>
    //                   </select>
    //                 </div>
    //               </div>

    //               <div class="col-lg-12">
    //                 <div class="form-group">
    //                   <textarea
    //                     class="form-control"
    //                     placeholder="Message"
    //                   ></textarea>
    //                 </div>
    //               </div>

    //               <div class="col-lg-12">
    //                 <div class="form-group">
    //                   <input
    //                     type="submit"
    //                     class="btn submit-mes"
    //                     value="Submit Message"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Contact;
