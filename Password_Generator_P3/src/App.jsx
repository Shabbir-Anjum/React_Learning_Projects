import { useState, useCallback, useEffect, useRef} from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef= useRef(null)
  const [value, setvalue]=useState(' ')
  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])
  const copyPassword=useCallback(()=>{
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() => {
    passwordGen()
  }, [length, numberAllowed, charAllowed, passwordGen])
  // const updateValue= useCallback((e)=>{
  //   let text= e.target.value;
  //   setvalue(text)
  //},[value])
  const clearPassword=()=>{setPassword(''); console.log("chech error")}
  const pastValue= useCallback(()=>{
    setvalue(password)
  },[value, password])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        <button
        onClick={clearPassword}
        className='outline-none ml-1 bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Clear</button>
        
    </div>
    <div className='flex text-sm gap-x-2 text-white'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharacter((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-3">
        <input
            type="text"
            value={value}
            className="outline-none w-full py-1 px-3"
            placeholder="Text"
            
        />
        <button
        onClick={pastValue}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Past</button>
    </div>
        <p className='text-white text-sm'>Text: {value}</p>

</div>
    
  )
}

export default App