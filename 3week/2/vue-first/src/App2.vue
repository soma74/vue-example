<template>
	<div id="app">
		<button @click="'fetchPosts">불러오기</button>
		<ul>
			<li v-for=post in posts">
				<h1>{{ post.title }}</h1>
				<p>{{ post.body}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data () {
			return {
				posts:[]
			}
		},
		methods: {
			fetchPosts () {
				this.axios.get("https://jsonplaceholder.typicode.com/posts")
					.then((response) => {
						console.log(response);
						this.posts = response.data
				})
			}
		}
	}
</script>

<style lang="sass">
$point-color: #17569a;

ul {
	li {
		h1 {
			font-sizze:  20pt;
		}
	}
}
</style>
