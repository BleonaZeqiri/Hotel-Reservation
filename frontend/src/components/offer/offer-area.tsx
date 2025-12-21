import Image from "next/image";
import Link from "next/link";

const offerData = [
  {
    id: 1,
    imgSrc: "/assets/img/offer/03.jpg",
    preLabel: "Exclusive",
    title: "Honeymoon<br/> Package",
    discount: "Get 40% Off",
    delay: ".3s",
  },
  {
    id: 2,
    imgSrc: "/assets/img/offer/01.jpg",
    preLabel: "Unbundled",
    title: "Cocktail<br/> Package",
    discount: "Get 30% Off",
    delay: ".4s",
  },
  {
    id: 3,
    imgSrc: "/assets/img/offer/02.jpg",
    preLabel: "Wellness",
    title: "Massage<br/> Package",
    discount: "Get 25% Off",
    delay: ".5s",
  },
  {
    id: 4,
    imgSrc: "/assets/img/offer/04.jpg",
    preLabel: "Exclusive",
    title: "Airport <br> Transfer",
    discount: "Get 40% Off",
    delay: ".3s",
  },
  {
    id: 5,
    imgSrc: "/assets/img/offer/05.jpg",
    preLabel: "Unbundled",
    title: "Holiday <br> Relax",
    discount: "Get 30% Off",
    delay: ".4s",
  },
  {
    id: 6,
    imgSrc: "/assets/img/offer/06.jpg",
    preLabel: "Wellness",
    title: "Couple’s <br> Spa Day",
    discount: "Get 35% Off",
    delay: ".5s",
  },
];

type IProps = {
  allOffers?: boolean;
};

export default function OfferArea({ allOffers = false }: IProps) {
  const offerItems = allOffers ? offerData : offerData.slice(0, 3);
  return (
    <div
      className={`tp-offer-area pt-120 pb-${allOffers ? '115' : '105'}`}
      style={{ backgroundImage: allOffers ? "none" : "url(/assets/img/offer/04.png)" }}
    >
      <div className="container">
        <div className="row">
          {!allOffers && (
            <div className="col-lg-12">
              <div className="tp-room-title-wrap text-center mb-50">
                <h5 className="tp-section-three-title-pre">Offers</h5>
                <h2 className="tp-section-three-title mb-15">Exclusive offers</h2>
              </div>
            </div>
          )}

          {offerItems.map((offer) => (
            <div key={offer.id} className="col-lg-4 col-md-6 col-sm-6 mb-30">
              <div
                className="tp-offer-three-wrap p-relative wow fadeInUp"
                data-wow-delay={offer.delay}
                data-wow-duration="1s"
              >
                <div className="tp-offer-three-thumb">
                  <Image
                    className="w-100"
                    src={offer.imgSrc}
                    alt="offer"
                    width={384}
                    height={440}
                  />
                </div>
                <div className="tp-offer-three-content p-absolute text-center">
                  <span className="tp-offer-three-pre">{offer.preLabel}</span>
                  <h4 className="tp-offer-three-title pb-65">
                    <Link
                      href="/contact"
                      dangerouslySetInnerHTML={{ __html: offer.title }}
                    />
                  </h4>
                  <Link className="tp-offer-three-btn" href="/contact">
                    {offer.discount}
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {!allOffers && (
            <div className="col-lg-12">
              <div className="tp-offer-discount pt-30 text-center">
                <p>
                  <span className="tp-offer-awesome mr-10">AWESOME</span>
                  <span className="discount">Get 20% discount</span>
                  on hotels booking with above websites.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
