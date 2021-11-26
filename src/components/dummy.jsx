
const useStyles = () => {
  return {color: 'pink'}
}

export default function dummy({ showContent, content="default", color='red', onClick }) {
const headerStyle = useStyles();
  return (
    <div>
      <main>
        <h1 css={headerStyle}>
          Welcome!
        </h1>
        
        {showContent && <p style={{color}}>
        Here is your content:
          {content}
        </p> }

        <button onClick={onClick}>Click me</button>
      
      </main>
    </div>
  )
}
  