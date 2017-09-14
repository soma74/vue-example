var todoItemComponent = {
	template: '#todo-item',
	props: {
		type: {
			type: String
		},
		todo: {
			type: Object
		}
	},
	methods: {
		success: function() {
			this.$emit('success-event', this.todo);
		},
		rollback: function() {
			this.$emit('rollback-event', this.todo);
		}
	}
};

var todoListComponent = {
	template: '#todo-list',
	props: {
		type: {
			type: String,
		}
	},
	data: function() {
		return {
			todos: [
				{ type: 'active', message: '설거지 하기'},
				{ type: 'active', message: '빨래 하기'},
			],		
		};
	},
	methods: {
		success: function(todo) {
			todo.type = 'success';
		},
		rollback: function(todo) {
			todo.type = 'active';
		}
	},
	computed: {
		activeTodos: function() {
			return this.todos.filter(function(todo) {
				return todo.type === 'active';
			});
		},
		successTodos: function() {
			return this.todos.filter(function(todo) {
				return todo.type === 'success';
			});
		}
	},
	components: {
		'todo-item': todoItemComponent
	}
};

new Vue({
	el: '#app',
	data: {
		inputTodo: '',
		type: 'active'
	},
	methods: {
		addTodo: function() {
			if(this.inputTodo)
			{
				this.$refs.todoList.todos.push({
					type: 'active', 
					message: this.inputTodo
				});
				this.inputTodo = '';
				this.$refs.inputDom.focus();
			}
		},
	},
	components: {
		'todo-list': todoListComponent
	}
});