import { Input } from 'reactstrap';

const SearchBar = (props: { value: string, onChangeHandler: (value: string) => void, }) => {
  return (
    <div>
          <Input bsSize="lg" placeholder='search application' value={props.value} onChange={(e) => props.onChangeHandler(e.target.value)} />
    </div>
  )
}

export default SearchBar