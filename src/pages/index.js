import Head from 'next/head'

const useStyles = () => {
  return {
    color: "red"
  }
}

export default function Home() {
  const redStyle = useStyles();
  return (
    <div>
      <Head> Nini </Head>
      <main>
        <h1 css={redStyle}>
          Welcome!
        </h1>
      </main>
    </div>
  )
}
