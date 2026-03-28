import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Track which page to show: 'home', 'login', or 'register'
  const [view, setView] = useState('home') 

  // --- Components for the new views ---
  
  const LoginForm = () => (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button className="counter" type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <span className="link" onClick={() => setView('register')}>Register</span></p>
      <button className="back-btn" onClick={() => setView('home')}>← Back</button>
    </div>
  )

  const RegisterForm = () => (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button className="counter" type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <span className="link" onClick={() => setView('login')}>Login</span></p>
      <button className="back-btn" onClick={() => setView('home')}>← Back</button>
    </div>
  )

  return (
    <>
      {/* Navigation Header */}
      <nav style={{ padding: '20px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button onClick={() => setView('home')}>Home</button>
        <button onClick={() => setView('login')}>Login</button>
        <button onClick={() => setView('register')}>Register</button>
      </nav>

      {/* Conditional Rendering based on "view" state */}
      {view === 'home' && (
        <section id="center">
          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>
          <div>
            <h1>Get started</h1>
            <p>Edit <code>src/App.tsx</code> and save to test <code>HMR</code></p>
          </div>
          <button className="counter" onClick={() => setCount((c) => c + 1)}>
            Count is {count}
          </button>
        </section>
      )}

      {view === 'login' && <LoginForm />}
      {view === 'register' && <RegisterForm />}

      <div className="ticks"></div>

      <section id="next-steps">
        {/* ... Your existing documentation and social sections remain here ... */}
        <div id="docs">
           <h2>Resources</h2>
           <p>Check the links below to learn more.</p>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App