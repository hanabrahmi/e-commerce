import React from 'react'

function cart() {
  return (
    <div>
<div>
  {/* Spinner Start */}
  <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
    <div className="spinner-grow text-primary" role="status" />
  </div>
  {/* Spinner End */}
  {/* Navbar start */}
  <div className="container-fluid fixed-top">
    <div className="container topbar bg-primary d-none d-lg-block">
      <div className="d-flex justify-content-between">
        <div className="top-info ps-2">
          <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary" /> <a href="#" className="text-white">123 Street, New York</a></small>
          <small className="me-3"><i className="fas fa-envelope me-2 text-secondary" /><a href="#" className="text-white">Email@Example.com</a></small>
        </div>
        <div className="top-link pe-2">
          <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
          <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
          <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
        </div>
      </div>
    </div>
    <div className="container px-0">
      <nav className="navbar navbar-light bg-white navbar-expand-xl">
        <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>
        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars text-primary" />
        </button>
        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <a href="index.html" className="nav-item nav-link">Home</a>
            <a href="shop.html" className="nav-item nav-link">Shop</a>
            <a href="shop-detail.html" className="nav-item nav-link">Shop Detail</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu m-0 bg-secondary rounded-0">
                <a href="cart.html" className="dropdown-item active">Cart</a>
                <a href="chackout.html" className="dropdown-item">Chackout</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
          <div className="d-flex m-3 me-0">
            <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary" /></button>
            <a href="#" className="position-relative me-4 my-auto">
              <i className="fa fa-shopping-bag fa-2x" />
              <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: '-5px', left: 15, height: 20, minWidth: 20}}>3</span>
            </a>
            <a href="#" className="my-auto">
              <i className="fas fa-user fa-2x" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
  {/* Modal Search Start */}
  <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body d-flex align-items-center">
          <div className="input-group w-75 mx-auto d-flex">
            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Search End */}
  {/* Single Page Header start */}
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6">Cart</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item"><a href="#">Home</a></li>
      <li className="breadcrumb-item"><a href="#">Pages</a></li>
      <li className="breadcrumb-item active text-white">Cart</li>
    </ol>
  </div>
  {/* Single Page Header End */}
  {/* Cart Page Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div className="d-flex align-items-center">
                  <img src="img/vegetable-item-3.png" className="img-fluid me-5 rounded-circle" style={{width: 80, height: 80}} alt />
                </div>
              </th>
              <td>
                <p className="mb-0 mt-4">Big Banana</p>
              </td>
              <td>
                <p className="mb-0 mt-4">2.99 $</p>
              </td>
              <td>
                <div className="input-group quantity mt-4" style={{width: 100}}>
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td>
                <p className="mb-0 mt-4">2.99 $</p>
              </td>
              <td>
                <button className="btn btn-md rounded-circle bg-light border mt-4">
                  <i className="fa fa-times text-danger" />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="d-flex align-items-center">
                  <img src="img/vegetable-item-5.jpg" className="img-fluid me-5 rounded-circle" style={{width: 80, height: 80}} alt />
                </div>
              </th>
              <td>
                <p className="mb-0 mt-4">Potatoes</p>
              </td>
              <td>
                <p className="mb-0 mt-4">2.99 $</p>
              </td>
              <td>
                <div className="input-group quantity mt-4" style={{width: 100}}>
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td>
                <p className="mb-0 mt-4">2.99 $</p>
              </td>
              <td>
                <button className="btn btn-md rounded-circle bg-light border mt-4">
                  <i className="fa fa-times text-danger" />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="d-flex align-items-center">
                  <img src="img/vegetable-item-2.jpg" className="img-fluid me-5 rounded-circle" style={{width: 80, height: 80}} alt />
                </div>
              </th>
              <td>
                <p className="mb-0 mt-4">Awesome Brocoli</p>
              </td>
              <td>
                <p className="mb-0 mt-4">2.99 $</p>
              </td>
              <td>
                <div className="input-group quantity mt-4" style={{width: 100}}>
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td>
                <p className="mb-0 mt-4">2.99 $</p>
              </td>
              <td>
                <button className="btn btn-md rounded-circle bg-light border mt-4">
                  <i className="fa fa-times text-danger" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <input type="text" className="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" />
        <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button>
      </div>
      <div className="row g-4 justify-content-end">
        <div className="col-8" />
        <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
          <div className="bg-light rounded">
            <div className="p-4">
              <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
              <div className="d-flex justify-content-between mb-4">
                <h5 className="mb-0 me-4">Subtotal:</h5>
                <p className="mb-0">$96.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="mb-0 me-4">Shipping</h5>
                <div className>
                  <p className="mb-0">Flat rate: $3.00</p>
                </div>
              </div>
              <p className="mb-0 text-end">Shipping to Ukraine.</p>
            </div>
            <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
              <h5 className="mb-0 ps-4 me-4">Total</h5>
              <p className="mb-0 pe-4">$99.00</p>
            </div>
            <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Cart Page End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
    <div className="container py-5">
      <div className="pb-4 mb-4" style={{borderBottom: '1px solid rgba(226, 175, 24, 0.5)'}}>
        <div className="row g-4">
          <div className="col-lg-3">
            <a href="#">
              <h1 className="text-primary mb-0">Fruitables</h1>
              <p className="text-secondary mb-0">Fresh products</p>
            </a>
          </div>
          <div className="col-lg-6">
            <div className="position-relative mx-auto">
              <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email" />
              <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{top: 0, right: 0}}>Subscribe Now</button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex justify-content-end pt-3">
              <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href><i className="fab fa-twitter" /></a>
              <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href><i className="fab fa-youtube" /></a>
              <a className="btn btn-outline-secondary btn-md-square rounded-circle" href><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <div className="footer-item">
            <h4 className="text-light mb-3">Why People Like us!</h4>
            <p className="mb-4">typesetting, remaining essentially unchanged. It was 
              popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
            <a href className="btn border-secondary py-2 px-4 rounded-pill text-primary">Read More</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column text-start footer-item">
            <h4 className="text-light mb-3">Shop Info</h4>
            <a className="btn-link" href>About Us</a>
            <a className="btn-link" href>Contact Us</a>
            <a className="btn-link" href>Privacy Policy</a>
            <a className="btn-link" href>Terms &amp; Condition</a>
            <a className="btn-link" href>Return Policy</a>
            <a className="btn-link" href>FAQs &amp; Help</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column text-start footer-item">
            <h4 className="text-light mb-3">Account</h4>
            <a className="btn-link" href>My Account</a>
            <a className="btn-link" href>Shop details</a>
            <a className="btn-link" href>Shopping Cart</a>
            <a className="btn-link" href>Wishlist</a>
            <a className="btn-link" href>Order History</a>
            <a className="btn-link" href>International Orders</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-item">
            <h4 className="text-light mb-3">Contact</h4>
            <p>Address: 1429 Netus Rd, NY 48247</p>
            <p>Email: Example@gmail.com</p>
            <p>Phone: +0123 4567 8910</p>
            <p>Payment Accepted</p>
            <img src="img/payment.png" className="img-fluid" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright bg-dark py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2" />Your Site Name</a>, All right reserved.</span>
        </div>
        <div className="col-md-6 my-auto text-center text-md-end text-white">
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up" /></a>   
</div>

    </div>
  )
}

export default cart