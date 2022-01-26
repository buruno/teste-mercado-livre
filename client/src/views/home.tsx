import { Helmet } from "react-helmet"

function Home() {
  return (
    <main className="container">
      <Helmet>
        <title>Bruno Ishikawa - Mercado Livre</title>
      </Helmet>
      <div className="view">
      <h1 style={{fontWeight: 'bold'}}>Teste para desenvolvedor front-end</h1>
      <h2>Bruno Ishikawa</h2>
      </div>
    </main>
  )
}

export default Home
