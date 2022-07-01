import "./styles.css";

export default function App() {
  return (
    <div id="contact-form">
      <div>
        {/* <h1>Scholarship positions</h1> */}
        <img src="/slogo.png" alt="logo" className="center" />
        <h5>We're happy you decided to subscribe to our email list.</h5>
        <h5>
          Please take a few seconds and fill in the list details in order to
          subscribe to our list.
        </h5>
        <h5>
          You will receive an email to confirm your subscription, just to be
          sure this is your email address.
        </h5>
      </div>
      <form
        action="https://newsletter.scholarship-positions.com/lists/to706w2qexc4c/subscribe/"
        method="post"
      >
        <input
          type="hidden"
          defaultValue="N2s3cGp6eEhiNXVpSnN6SldOTVU4OWF1MXBUYW1KUmOpO8BMTduQccl8vrEoQO8uFp9gnnpgoOxLbXlmVNsbew=="
          name="csrf_token"
        />
        <div>
          <label htmlFor="email">
            <span className="required">Email: *</span>
            <input
              placeholder="Email"
              type="text"
              name="EMAIL"
              id="EMAIL"
              tabIndex={2}
              required="required"
            />
          </label>
        </div>
        <div>
          <label htmlFor="Name">
            <span className="required">Name: *</span>
            <input
              placeholder="Name"
              type="text"
              name="NAME"
              id="!name"
              tabIndex={2}
              required="required"
            />
          </label>
        </div>
        <div>
          <button name="submit" type="submit" id="submit">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
