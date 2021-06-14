import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';
import MenuBook from '@material-ui/icons/MenuBookOutlined';

const App = () => {
	const [data, setData] = useState('');
	const [load, setLoad] = useState(false);
	const [error, setError] = useState('');
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const array = data.docs;

	useEffect(() => {
		setLoad(true);
		fetch('http://openlibrary.org/search.json?author=tolkien')
			.then((response) => response.json())
			.then((data) => setData(data))
			.then(() => setLoad(load))
			.catch(setError);
	}, []);

	if (load) {
		return <h1 style={{ textAlign: 'center' }}>Loading...</h1>;
	} else if (error) {
		return <pre>{JSON.stringify(error, null, 2)}</pre>;
	} else if (!data) {
		return null;
	}
	const searchHandler = (search) => {
		setSearch(search);
		if (search != '') {
			const newBookList = array.filter((book) => {
				return Object.values(book)
					.join('')
					.toLowerCase()
					.includes(search.toLowerCase());
			});
			setSearchResults(newBookList);
		} else {
			setSearchResults(array);
		}
		console.log(searchResults);
	};

	return (
		<div className='appContainer'>
			<Search term={search} searchKeyword={searchHandler} />
			{search.length < 1 ? (
				<ul className='list'>
					{array.map((books, id) => {
						return (
							<li key={id} className='list_item'>
								<MenuBook className='menubook_list_item' />
								<div>
									<p>Title: {books.title}</p>

									<p>Book Cover: {books.cover_edition_key}</p>

									<p>Author: {books.author_name}</p>
									<div>
										<li>
											<p>Publish Date:</p>
											<ul>{books.publish_date}</ul>
										</li>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			) : (
				<ul className='list'>
					{searchResults.map((books, id) => {
						return (
							<li key={id} className='list_item'>
								<MenuBook className='menubook_list_item' />
								<div>
									<p>Title: {books.title}</p>

									<p>Book Cover: {books.cover_edition_key}</p>

									<p>Author: {books.author_name}</p>
									<div>
										<li>
											<p>Publish Date:</p>
											<ul>{books.publish_date}</ul>
										</li>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default App;
