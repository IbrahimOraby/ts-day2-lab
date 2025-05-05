interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export default class PostService {
	async fetchPosts(url: string) {
		let data = await fetch(url);
        let posts: Post[] = await data.json()
        posts.map((post: Post)=>{
            console.log(`User Id: ${post.userId}, Post Id: ${post.id}, Title: ${post.title}, Body: ${post.body}`)
        })
	}
}

