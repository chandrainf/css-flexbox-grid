const projects = [
	{
		name: 'travel-blog-flexbox',
	},
	{
		name: 'freelancer-flexbox',
	},
	{
		name: 'menus-flexbox',
	},
	{
		name: 'holy-grail-flexbox',
	},
	{
		name: 'udemy-flexbox',
	},
	{
		name: 'netflix-flexbox',
	},
	{
		name: 'admin-flexbox',
	},
	{
		name: 'recipe-blog-cssgrid',
	},
	{
		name: 'real-estate-cssgrid',
	},
	{
		name: 'freelancer-cssgrid',
	},
	{
		name: 'airbnb-cssgrid',
	}
];

const list = document.getElementById('list');

projects.forEach(({ name, youtube }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}
