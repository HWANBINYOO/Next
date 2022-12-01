
function Error({ statusCode } : { statusCode : number }) {
  return (
    <p>
      {statusCode
        ? `${statusCode} 페이지 입니다`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err } : { res:any , err:any}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error