export default function User({authedUser}) {
  return (
    <>
      <h1>👋 {authedUser.firstName}</h1>
    </>
  )
}
