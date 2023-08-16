// This component displays when the user enters a wrong URL to reach this website
function NoPage() {
  return (
    // JSX error message with a fine design, to show
    <div className='container d-flex flex-column flex-wrap justify-content-center align-items-center notFound vh-100'>
        <h1>404 - Error</h1>
        <h4 className='text-center'>The requested URL was not found on this server.</h4>
        <img src="/images/not-found.png" alt="404 Not Found" />
    </div>
  )
}

export default NoPage