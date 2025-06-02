import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const message = "Треба бананка для Олі, маленька. Допоможи, хулі"
  const [displayedLetters, setDisplayedLetters] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedLetters(prev => [...prev, message[currentIndex]])
        setCurrentIndex(prev => prev + 1)
      }, 200) // Затримка між буквами

      return () => clearTimeout(timer)
    }
  }, [currentIndex, message])

  return (
    <div className="app">
      {/* Анімований фон */}
      <div className="background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="particles">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className={`particle particle-${i % 5}`}></div>
          ))}
        </div>
      </div>

      {/* Контейнер для тексту */}
      <div className="content">
        <div className="letter-container">
          {displayedLetters.map((letter, index) => (
            <span
              key={index}
              className={`letter ${letter === ' ' ? 'space' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                color: `hsl(${(index * 40) % 360}, 80%, 70%)`
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>

        {/* Додаткові прикольні елементи */}
        {displayedLetters.length === message.length && (
          <div className="final-effects">
            <div className="sparkles">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className={`sparkle sparkle-${i}`}>✨</div>
              ))}
            </div>
            <div className="emoji-rain">
              {['💰', '🤑', '💸', '💵', '💶', '💷'].map((emoji, i) => (
                <div key={i} className={`emoji emoji-${i}`}>{emoji}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
