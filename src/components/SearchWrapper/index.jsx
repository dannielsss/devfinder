import React from 'react'

import { Input } from './SearchWrapperElements'

function SearchWrapper() {
  return (
    <div>
      <form>
        <Input type="search" name="search" id="search" placeholder='Search Github username..' />
      </form>
    </div>
  )
}

export default SearchWrapper