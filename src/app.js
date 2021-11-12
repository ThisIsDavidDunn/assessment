import { createGlobalStyle } from "styled-components";
import AccountOverview from "./views/AccountOverview/AccountOverview";
import "./app.css";

function App() {
  const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;
      letter-spacing: 0.04rem;
    }

    html {
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  `;

  const accountOverviewStub = {
    supportContact: {
      name: "John Smith",
      email: "john.smith@feefo.com",
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    },
  };

  return (
    <div className="App">
      <GlobalStyle />
      <AccountOverview data={accountOverviewStub} />
    </div>
  );
}

export default App;
