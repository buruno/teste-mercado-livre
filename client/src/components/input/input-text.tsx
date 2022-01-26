function HeaderForm(props: {handleInput(v: string): void}) {
  const {handleInput} = props
  function emitInput(ev: React.BaseSyntheticEvent):void {
    handleInput(ev.target.value)
  }
  return (
    <div className="input input-text_component">
      <input onInput={(ev) => emitInput(ev)} type="text" />
    </div>
  )
}

export default HeaderForm