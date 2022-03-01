/**
 * Author model
 */

module.exports = (bookshelf) => {
	return bookshelf.model('Author', {
		tableName: 'authors',
		books() {
			return this.hasMany('Book');
		},
	}, {
		
		async fetchById(id) {
			// fetch user with parameter id
			return await new this({ id }).fetch();
		},
	});
}
