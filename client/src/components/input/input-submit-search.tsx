import SearchIcon from 'assets/img/icons/icon-search.svg'

function InputSubmitSearch({isValid}: {isValid:boolean}) {
  return (
    <div className="input input-submit-search_component">
      <button type="submit" disabled={!isValid}>
        <img src={SearchIcon} />
      </button>
    </div>
  )
}

export default InputSubmitSearch