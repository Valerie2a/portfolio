import React from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'light'
  })
  React.useEffect(()=>{
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  },[theme])
  return (
    <button className="theme-toggle" onClick={()=>setTheme(t=> t==='light'?'dark':'light')}>
      {theme==='light' ? '🌙' : '☀️'}
      <span className="sr-only">Basculer le thème</span>
    </button>
  )
}