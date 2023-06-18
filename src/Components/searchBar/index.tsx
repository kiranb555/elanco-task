import { Input } from 'reactstrap';

const SearchBar = (props: { placeHolder: string, value: string, onChangeHandler: (value: string) => void, }) => {
  return (
    <div>
      <Input bsSize="lg" placeholder={ props.placeHolder} value={props.value} onChange={(e) => props.onChangeHandler(e.target.value)} />
    </div>
  )
}

export default SearchBar