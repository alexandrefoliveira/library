import React from 'react';

const Search = ({ term, searchKeyword }) => {
	const handleSearch = (e) => {
		searchKeyword(e.target.value);
	};

	return (
		<div>
			<input
				className='search_inputField'
				type='text'
				value={term}
				placeholder='Search...'
				onChange={handleSearch}
			></input>
		</div>
	);
};

export default Search;
