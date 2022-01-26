import { InputText, InputSubmitSearch } from 'components/input/'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function HeaderForm() {
  const [search, setSearch] = useState('')
  const [isValid, setIsValid] = useState(false)

  let navigate = useNavigate();

  useEffect(()=>{
    setIsValid(search.length > 0)
  },[search])

  function submit(ev: React.FormEvent) {
    ev.preventDefault()
    if (isValid) {
      navigate(`/items?search=${search}`)
    }
  }

  return (
    <form onSubmit={(ev) => submit(ev)} className="d--flex w--full items--center">
      <InputText handleInput={setSearch} />
      <InputSubmitSearch isValid={isValid} />
    </form>
  )
}

export default HeaderForm