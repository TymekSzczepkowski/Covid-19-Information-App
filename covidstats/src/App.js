import Main from "./components/Main/Main";
import Layout from "./components/Layout";
import useWebsiteTitle from "./hooks/useWebsiteTitle";
function App() {
  useWebsiteTitle("COVID-19 | Check coronavirus status in your country");
  return (
    <Layout>
      <Main></Main>
    </Layout>
  );
}

export default App;
