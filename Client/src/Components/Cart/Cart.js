import React from 'react'
import Img1 from './assets/vegetable-item-3.png';
import Img2 from './assets/vegetable-item-5.jpg'
import Img3 from './assets/vegetable-item-2.jpg';
import './style.css';
function Cart() {
  return (
    <div className='mt-140'>
        <>
        
        <div className="container-fluid py-5 mb-3">
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
                  <img src={Img1} className="img-fluid me-5 rounded-circle" style={{width: 80, height: 80}} alt />
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
                  <img src={Img2} className="img-fluid me-5 rounded-circle" style={{width: 80, height: 80}} alt />
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
                  <img src={Img3} className="img-fluid me-5 rounded-circle" style={{width: 80, height: 80}} alt />
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
      <div className="mt-5  mb-3">
        <input type="text" className="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" />
        <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button>
      </div>
      <div className='cart-pos'>
      <div className="cart-container ">
      <div className="cart-summary">
        <h1>Cart <span>Total</span></h1>
        <div className="d-flex justify-content-between mb-4">
          <h5>Total:</h5>
          <p>$</p>
        </div>
        <div className="d-flex justify-content-between">
          <h5>Shipping</h5>
          <div>
            <p>$</p>
          </div>
        </div>
      </div>
      <div className="total-amount">
        <h5>Total</h5>
        <p>$</p>
      </div>
      <button className="checkout-button" type="button">Procéder au paiement</button>
    </div>
    </div>
    </div>
  </div>
        </>
    </div>
  )
}

export default Cart