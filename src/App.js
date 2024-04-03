import SEO from "./components/seo";

function App() {
  return (
    <div className="App">
      <SEO
        type="website"
        title="helmet test"
        description="react-helmet-async test"
        url="https://www.npmjs.com/package/react-helmet-async"
        image="https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg"
      />
      <div>Helmet Test</div>
    </div>
  );
}

export default App;
