import { useState } from "react";


export default function Auth() {
  const[email, setyEmail] = useState('')
  const[password, setIsPassword] = useState('')
  const[laoding, setlaoing] = useState('')

  async function signInWithEmail() {
    setLoding(true)
    
  }
}