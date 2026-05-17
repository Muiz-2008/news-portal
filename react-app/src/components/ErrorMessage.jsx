// ErrorMessage.jsx — shown when a fetch fails or no results are found
// Props:
//   title    — headline text
//   message  — supporting detail
//   onRetry  — optional function called when user clicks "Try Again"

export default function ErrorMessage({
  title   = 'Something went wrong',
  message = 'Please try again later.',
  onRetry,
}) {
  return (
    <div className="error-wrap">
      <div className="error-icon">&#9888;</div>
      <h3 className="error-title">{title}</h3>
      <p className="error-message">{message}</p>
      {onRetry && (
        <button className="btn btn-outline" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  )
}
