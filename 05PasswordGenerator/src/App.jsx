import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charsAllowed, setCharsAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numbersAllowed) {
      str += '0123456789'
    }
    if (charsAllowed) {
      str += '!@#$%^&*()_+[]{}|;:,.<>?'
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numbersAllowed, charsAllowed])

  const copytoclipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numbersAllowed, charsAllowed, generatePassword])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-8 bg-gray-800 border border-gray-700 space-y-6">
        <h1 className="text-white text-2xl font-bold text-center">🔐 Password Generator</h1>

        <div className="flex items-center gap-2 shadow rounded-md overflow-hidden">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="flex-1 py-2 px-3 bg-gray-700 text-white outline-none text-sm rounded-l-md"
            placeholder="Generated password"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md text-sm font-medium"
            onClick={copytoclipboard}
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm text-white">
          <div className="flex items-center justify-between">
            <label>Password Length: <span className="font-semibold">{length}</span></label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-1/2 accent-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="numbers">Include Numbers</label>
            <input
              id="numbers"
              type="checkbox"
              checked={numbersAllowed}
              onChange={(e) => setNumbersAllowed(e.target.checked)}
              className="h-4 w-4 accent-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="chars">Include Special Characters</label>
            <input
              id="chars"
              type="checkbox"
              checked={charsAllowed}
              onChange={(e) => setCharsAllowed(e.target.checked)}
              className="h-4 w-4 accent-blue-500"
            />
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 transition text-white py-2 rounded-md font-semibold text-sm"
        >
          Generate New Password
        </button>
      </div>
    </div>
  )
}

export default App
