<h1>Bookmark-Api </h1>

<p>Live Demo: https://bookmarks-api-212121.herokuapp.com</p>

<h3>How to get started</h3>
<p>Create a config folder and make new .env file</p>

<p>-->config</p>
<p>     -->dev.env</p>
<p>     -->test.env</p>

<h3>List of commands</h1>

</h4>Bookmark</h4>
<p>Create a new Bookmark: POST request url/bookmarks</p>
<p>body:{ link:String, title:String, publisher: String }</p>

<p>Delete a Bookmark: DELETE request url/bookmarks/:id</p>
<p>param: a valid bookmark id</p>

</h4>Tag</h4>
<p>Create a new Tag: POST request url/tags</p>
<p>body:{title:String}</p>

<p>Attach a tag to a bookmark: PUT request url/tags</p>
<p>body: {  tagtitle: String, bookmarkId: String }</p>

<p>Remove a tag from a specific bookmark: PATCH request url/tags</p>
<p>body: {  tagtitle: String, bookmarkId: String }</p>

<p>Delete a tag: DELETE request url/tags/:id</p>
<p>param: a valid tag id</p>
