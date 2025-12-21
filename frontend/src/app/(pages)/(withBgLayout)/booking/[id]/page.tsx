import { getBookingById } from "@/api/booking";
import { GiftBox } from "@/components/svg";
import { formatDate } from "@/utils/date";

type IParams = Promise<{ id: string }>;

export default async function BookingPage({ params }: { params: IParams }) {
   const { id } = await params;
   const booking = await getBookingById(id);
   return (
      <main>
         {booking ? (
            <>
               <section className="tp-order-area pb-120 pt-120">
                  <div className="container">
                     <div className="row gx-0 align-items-center justify-content-center">
                        <div className="col-lg-6">
                           <div className="tp-order-inner">
                              <div className="tp-order-details" style={{ backgroundColor: "#4F3D97" }}>
                                 <div className="tp-order-details-top text-center mb-70">
                                    <div className="tp-order-details-icon">
                                       <span>
                                          <GiftBox />
                                       </span>
                                    </div>
                                    <div className="tp-order-details-content">
                                       <h3 className="tp-order-details-title">Your Order Confirmed</h3>
                                    </div>
                                 </div>
                                 <div className="tp-order-details-item-wrapper">
                                    <div className="row">
                                       <div className="col-sm-6">
                                          <div className="tp-order-details-item">
                                             <h4>Checkin:</h4>
                                             <p>{formatDate(booking.checkin)}</p>
                                          </div>
                                       </div>
                                       <div className="col-sm-6">
                                          <div className="tp-order-details-item">
                                             <h4>Checkout: </h4>
                                             <p>{formatDate(booking.checkout)}</p>
                                          </div>
                                       </div>
                                       <div className="col-sm-6">
                                          <div className="tp-order-details-item">
                                             <h4>Adults:</h4>
                                             <p>{booking.adults}</p>
                                          </div>
                                       </div>
                                       <div className="col-sm-6">
                                          <div className="tp-order-details-item">
                                             <h4>Children:</h4>
                                             <p>{booking.children}</p>
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
            </>
         ) : (
            <div className="text-center pt-120 pb-120">
               No Booking found with id: {id}
            </div>
         )}
      </main>
   );
}
