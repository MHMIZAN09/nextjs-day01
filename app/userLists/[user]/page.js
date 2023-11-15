
'use client'
function User({ params }) {
    console.log(params);
  return (
    <div>
      <h1>this is user: {params.user}</h1>
    </div>
  )
}

export default User
