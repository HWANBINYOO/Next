function User({ user }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </>
        );
      })}
    </>
  );
}

export default User;
