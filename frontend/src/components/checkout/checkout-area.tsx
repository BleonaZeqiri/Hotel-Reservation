'use client';
import TableItem from "./table-item";
import ErrorMsg from "../common/err-msg";
import { formatDate } from "@/utils/date";
import useCheckoutSubmit from "@/hooks/use-checkout-submit";
import useGlobalContext from "@/hooks/use-global-context";
import { formatPrice } from "@/lib/format-price";
import { CardElement } from "@stripe/react-stripe-js";
import { useMemo } from "react";
import countryList from "react-select-country-list";

type IProps = {
   hotelName: string;
   price: number;
   days: number;
   paymentIntent:string
};


export default function CheckoutArea({ hotelName, price, days,paymentIntent }: IProps) {
   const { userInfo } = useGlobalContext();
   const { handleSubmit, onSubmit, register, errors, checking, checkout, adults, children,loading } = useCheckoutSubmit(paymentIntent);
   const options = useMemo(() => [{value:'',label:'Select Country'},...countryList().getData()], []);
   return (
      <section className="checkout-area pb-80 pt-120">
         <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="row">
                  <div className="col-lg-6 col-md-12">
                     <div className="checkbox-form">
                        <h3>Billing Details</h3>
                        <div className="row">
                           <div className="col-md-12">
                              <div className="country-select">
                                 <label>Country <span className="required">*</span></label>
                                 <select {...register('country', { required: 'Country is required' })} name="country" className="select nice-select">
                                    {options.map((option) => (
                                       <option key={option.value} value={option.value}>
                                          {option.label}
                                       </option>
                                    ))}
                                 </select>
                              </div>
                              {errors?.country?.message && <ErrorMsg msg={errors.country.message} />}
                           </div>
                           <div className="col-md-6">
                              <div className="checkout-form-list">
                                 <label>First Name <span className="required">*</span></label>
                                 <input {...register('fname', { required: 'First Name is required' })} type="text" placeholder="First Name" defaultValue={userInfo?.user?.username} />
                                 {errors?.fname?.message && <ErrorMsg msg={errors.fname.message} />}
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="checkout-form-list">
                                 <label>Last Name <span className="required">*</span></label>
                                 <input {...register('lname', { required: 'Last Name is required' })} type="text" placeholder="Last Name" />
                                 {errors?.lname?.message && <ErrorMsg msg={errors.lname.message} />}
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="checkout-form-list">
                                 <label>Address <span className="required">*</span></label>
                                 <input {...register('address', { required: 'Address is required' })} type="text" placeholder="Street address" />
                                 {errors?.address?.message && <ErrorMsg msg={errors.address.message} />}
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="checkout-form-list">
                                 <label>Email Address <span className="required">*</span></label>
                                 <input type="email" placeholder="Email" defaultValue={userInfo?.user?.email} {...register('email', { required: 'Email is required' })} />
                                 {errors?.email?.message && <ErrorMsg msg={errors.email.message} />}
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="checkout-form-list">
                                 <label>Phone <span className="required">*</span></label>
                                 <input type="text" placeholder="Phone" {...register('phone', { required: 'Phone is required' })} />
                                 {errors?.phone?.message && <ErrorMsg msg={errors.phone.message} />}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                     <div className="your-order mb-30 ">
                        <h3>Your order</h3>
                        <div className="your-order-table table-responsive">
                           <table>
                              <thead>
                                 <tr>
                                 </tr>
                              </thead>
                              <tbody>
                                 <TableItem name="Room" value={hotelName} />
                                 <TableItem name="Checkin" value={formatDate(checking!)} />
                                 <TableItem name="Checkout" value={formatDate(checkout!)} />
                                 <TableItem name="Adult" value={adults!} />
                                 <TableItem name="Children" value={children!} />
                                 <TableItem name="Days" value={String(days)} />
                              </tbody>
                              <tfoot>
                                 <tr className="order-total">
                                    <th>Total Cost</th>
                                    <td>
                                       <strong>
                                          <span className="amount">{formatPrice(price)}</span>
                                       </strong>
                                    </td>
                                 </tr>
                              </tfoot>
                           </table>
                        </div>
                        <div className="payment-method">
                           <div className="accordion" id="checkoutAccordion">
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="checkoutOne">
                                    <button className="accordion-button" type="button">
                                       Direct Bank Transfer
                                    </button>
                                 </h2>
                                 <div id="bankOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                       <CardElement
                                          options={{
                                             style: {
                                                base: {
                                                   fontSize: "16px",
                                                   color: "#424770",
                                                   "::placeholder": {
                                                      color: "#aab7c4",
                                                   },
                                                },
                                                invalid: {
                                                   color: "#9e2146",
                                                },
                                             },
                                          }}
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="order-button-payment mt-20">
                              <button disabled={loading} type="submit" className="tp-cart-checkout-btn  w-100">
                                 {loading ? 'Processing...' : 'Confirm Booking'}
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </section>
   )
}
