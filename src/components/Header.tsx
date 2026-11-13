type HeaderProps = {
  name: string
  tagline: string
}

function Header({ name, tagline }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header-name">{name}</h1>
      <p className="header-tagline">{tagline}</p>
    </header>
  )
}

export default Header
