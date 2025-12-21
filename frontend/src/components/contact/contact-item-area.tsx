const contactItemData = [
    {
      id: 1,
      icon: "fa-sharp fa-solid fa-phone",
      title: "Phone",
      content: (
        <span>
          Office. <a href="tel:+61234–5678910">+61 234–567 8910</a>
        </span>
      ),
    },
    {
      id: 2,
      icon: "fa-regular fa-envelope",
      title: "Email",
      content: <a href="mailto:support@housey.com">support@housey.com</a>,
    },
    {
      id: 3,
      icon: "fa-sharp fa-regular fa-location-dot",
      title: "Office",
      content: (
        <a href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723">
          6391 Elgin St. Celina, Delaware.
        </a>
      ),
    },
  ];
  
  export default function ContactItemArea() {
    return (
      <div className="tp-contact-item-area">
        <div className="container container-1430">
          <div
            className="tp-contact-bg"
            style={{ backgroundImage: "url(/assets/img/contact/bg.jpg)" }}
          >
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-contact-content mb-35 text-center">
                  <span className="tp-contact-subtitle tp-contact-subtitle-2 mb-20">
                    Contact Us
                  </span>
                  <h2 className="tp-contact-title tp-contact-title-2">
                    Leave our team a message.
                  </h2>
                  <p className="tp-contact-dis">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus non enim
                    <br />
                    lacus. Nullam congue blandit quam, sit amet
                  </p>
                </div>
              </div>
              {contactItemData.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <div className="tp-contact-item mb-40">
                    <span className="tp-contact-icon">
                      <i className={item.icon}></i>
                    </span>
                    <div className="tp-contact-text">
                      <h5>{item.title}</h5>
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  