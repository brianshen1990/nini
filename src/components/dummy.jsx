
const useStyles = () => {
  return {color: 'pink'}
}

export default function dummy({ showContent, content="default", color='red' }) {
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
      
      </main>
    </div>
  )
}
  