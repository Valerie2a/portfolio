import React, { useEffect } from 'react'

export default function BubbleBackground(){
  useEffect(()=>{
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(reduced) return
    const container = document.createElement('div')
    container.className = 'bubbles'
    const root = document.querySelector('#root')
    root?.prepend(container)
    const makeBubble = ()=>{
      const b = document.createElement('span')
      b.className = 'bubble'
      b.style.left = Math.random()*100 + 'vw'
      b.style.setProperty('--size', 8 + Math.random()*18 + 'px')
      b.style.setProperty('--dur', 8 + Math.random()*12 + 's')
      container.appendChild(b)
      setTimeout(()=> b.remove(), 20000)
    }
    const id = setInterval(makeBubble, 400)
    return ()=> clearInterval(id)
  },[])
  return null
}
