import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shidaa Immigration Consults</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <nav className="navbar">
        <img src="/Shidaa Logo.jpeg" alt="Shidaa Immigration Consults Logo" width={50} height={50} />
        <div className="logo">Shidaa Immigration Consults</div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <main className="main">
        <h1 className="title">
          Welcome to Shidaa Immigration Consults
        </h1>

        <p className="description">
          We are licensed by the IRCC to assist you in all your immigration needs.
        </p>

        <div className="grid">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHKiha0IrOXSIzWijgb1T7HPwZ8BytpVuRK47KMVZyL4NfKQ/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <h3>Study in Canada</h3>
            <p>Submit your details and we will contact you.</p>
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHKiha0IrOXSIzWijgb1T7HPwZ8BytpVuRK47KMVZyL4NfKQ/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <h3>Talk to our experienced consultant</h3>
            <p>Book some time with our consultant.</p>
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHKiha0IrOXSIzWijgb1T7HPwZ8BytpVuRK47KMVZyL4NfKQ/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <h3>Work in Canada</h3>
            <p>Explore the opportunities available to you.</p>
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHKiha0IrOXSIzWijgb1T7HPwZ8BytpVuRK47KMVZyL4NfKQ/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <h3>Frequently Asked Questions</h3>
            <p>Find instant answers to common questions.</p>
          </a>
        </div>
      </main>

      <footer className="footer">
        <a href="mailto:daniel@shidaaimmigration.com" target="_blank" rel="noopener noreferrer">
          Contact us: daniel@shidaaimmigration.com | +1-647-568-5095
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          color: #000000; /* Black text color */
          font-family: Arial, sans-serif;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          list-style-type: none;
        }

        .nav-links li {
          margin-right: 1rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #000000;
        }

        .main {
          text-align: center;
          padding: 2rem;
        }

        .title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .description {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid columns */
          grid-gap: 2rem;
          justify-content: center;
          padding: 0 2rem;
        }

        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          border: 2px solid #ff0000; /* Red outline */
          border-radius: 8px;
          transition: transform 0.3s ease;
          text-decoration: none;
          color: inherit;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .card p {
          font-size: 1.1rem;
        }

        .footer {
          margin-top: 4rem;
          text-align: center;
        }

        .footer a {
          text-decoration: none;
          color: inherit;
        }

        /* Media Queries */
        @media screen and (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr; /* Display a single column on smaller screens */
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}
