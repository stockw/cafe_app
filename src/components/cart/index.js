import React from 'react'
import './index.css'

const Cart = ({handleChangeQty, handleCheckout}) => {
  // handleChangeQuantity to add something to cart, change qty, or remove is qty
  // handleCheckOut
  // checkoutDone == false

  let checkoutDone = false

  return (
    <div className='Cart'>
      <div className='SectionHeading'>
        {checkoutDone ?
        <>
          <span>Order <span>D44256sd</span></span>
          <span>date of order</span>
        </>
        :
        <>
          <span>New Order</span>
          <span>{new Date().toLocaleDateString}</span>
        </>
        }

      </div>
      <div className='OrderItemContainer'>
        {/* various order items here */}
        <section>
          {checkoutDone ?
          <span>Total</span>
          :
          <button className='btn-sm'>Checkout</button>
          }
          <span>qty</span>
          <span className='right'>Order Total Price</span>
        </section>
      </div>

    </div>
  )
}

export default Cart