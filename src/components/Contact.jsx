import React, { useState } from "react";

const Contact = (props) => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    if (data.fullname !== "" && data.phone != "" && data.email != "") {
      alert(
        `I am ${data.fullname} \n My email is ${data.email} \n and this is what I have to Say: ${data.message}`
      );
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-10 mx-auto">
            <div className="row">
              <h2 className="container mt-5 mb-5 text-center">Contact Us</h2>
              <div className="container-fluid col-6">
                <form onSubmit={SubmitForm}>
                  <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                      id="fullname"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                      id="phone"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                      id="email"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      value={data.message}
                      onChange={InputEvent}
                      rows="3"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-get-started-lite">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
