import Layout from '../components/Layout';

export default function About() {



    return (
      <Layout pageTitle='About'>
        <h1>About</h1>
      </Layout>
    )
  }

  // This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://localhost:5000/factions/')
  const persos = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      persos,
    },
  }
}
  