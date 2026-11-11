export function UserProfile ({ profile }) {
  return (
    <div>
      <img src={profile.avatar_url} alt='avatar url' />
      <p>Nombre: {profile.name}</p>
      <p>Login: {profile.login}</p>
      <p>Bio: {profile.bio}</p>
      <p>Location: {profile.location}</p>
      <p>Followers: {profile.followers}</p>
      <p>Following: {profile.following}</p>
      <p>Public_repos: {profile.public_repos}</p>
      <p>Enlace: <span><a href={profile.html_url}>ver perfil</a></span></p>
    </div>
  )
}
