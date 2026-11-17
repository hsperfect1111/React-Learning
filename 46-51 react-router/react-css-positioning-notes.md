### 10.59.45 position-absolute concept

- position-absolute means element normal document flow follow nahi karta
- it gets removed from layout flow
- it is positioned relative to nearest parent with position: relative

### Bootstrap card behavior

- Bootstrap .card already has position: relative
- so any absolute element inside card will use card as reference

### Example

If icon is inside <h5> but has position-absolute:

- it will NOT stay inside h5 layout
- it will float and attach to card corner (top/right/etc)

### How do you change directory into a nested folder using a single command in terminal?

cd Project/7-social-media

### Extra for knowledge only

Icon ko clickable banana already easy hai :

<!--
<span
  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
  onClick={() => deletePost(post.id)}
  style={{ cursor: "pointer" }}
>
  <MdDelete />
</span>
-->

Kya change hua:
onClick → click event handle karega
cursor: pointer → hover pe hand icon aayega (user ko pata chalega clickable hai)

{createContext, useReducer} react se hi import krte hai hum
