import React, {useState} from 'react'
import {TextInput} from 'grommet'
import {FormSearch} from 'grommet-icons' 

const Search = () => {
    const [value, setValue] = useState('');
  return (
    <TextInput
        placeholder="Search..."
        value={value}
        onChange={event => setValue(event.target.value)}
        icon={<FormSearch />}
        reverse={true}
    
    />
  );
}

export default Search;
