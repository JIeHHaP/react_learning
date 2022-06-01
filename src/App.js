import React, {useState} from "react";
import "./components/styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

	const [posts, setPosts] = useState([
		{id: 1, title: "JavaScript", body: "description"},
		{id: 2, title: "JavaScript2", body: "description2"},
		{id: 3, title: "JavaScript3", body: "description3"},
		{id: 4, title: "JavaScript4", body: "description4"}
	])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className="App">
			<PostForm create={createPost}/>
			{posts.length
				?
				<PostList remove={removePost} posts={posts} title="Список постов"/>
				:
				<h1 className="title">Посты не найдены</h1>
			}


		</div>
	);
}

export default App;
