import Form from "./components/Form";
import data from "./social.json";

function App() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="wrapper">
      <main>
        <section>
          <img
            src={`${basePath}/assets/images/logo.svg`}
            alt="PING logo"
            width={53.58}
            height={15.24}
            className="logo"
          ></img>
          <div className="heading">
            <h1>
              <span>We are launching</span> soon!
            </h1>
            <p>Subscribe and get notified</p>
          </div>
          <Form></Form>
        </section>
        <img
          src={`${basePath}/assets/images/illustration-dashboard.png`}
          alt="Dashboard illustration"
          width={319.94}
          height={191.94}
          className="dashboard"
        ></img>
      </main>
      <footer>
        <ul>
          {data.map((social) => (
            <li key={social.id}>
              <a href="#">
                <img
                  src={`${basePath}/${social.image}`}
                  alt={`${social.name} icon`}
                  width={24}
                  className="social-icon"
                ></img>
              </a>
            </li>
          ))}
        </ul>
        <p>© Copyright Ping. All rights reserved.</p>
        <div className="attribution">
          Challenge by&nbsp;
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            aria-label="Learn more about challenges on frontendmentor.io"
          >
            Frontend Mentor
          </a>
          . Coded by&nbsp;
          <a
            href="https://www.frontendmentor.io/profile/BlackiePearlJoobi"
            target="_blank"
            aria-label="Visit Kohta Kumazaki's developer profile on frontendmentor.io"
          >
            Kohta Kumazaki
          </a>
          .
        </div>
      </footer>
    </div>
  );
}

export default App;
