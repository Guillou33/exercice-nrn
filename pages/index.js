import axios from 'axios';
import { FetchError } from 'fetch-error';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home({factions}) {
  
  console.log(factions);

  return (
    <Layout pageTitle='Home'>
      <h1>Home</h1>
      <table>
        <th><td>Faction</td><td>Race</td></th>
          {factions.map((faction) => (
            <tr style={{ backgroundColor: faction.color }}><td>{faction.namefaction}</td><td>{faction.race}</td></tr>
          ))}
        </table>
    </Layout>
  )
}
 // This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  //send error if fetch does not work
  function errorify(res) {
    if (res.status >= 400 && res.status < 600)
      throw new FetchError(res.status, res.statusText, {response: res})
    else
      return res
  }

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:5000/factions/');
  const factions = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      factions,
    },
  }
}
  