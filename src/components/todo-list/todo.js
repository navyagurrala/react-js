

export const TodoList =()=>{

const details={
    name:"navya",
    age:21,
    branch:"cse",
    skills:["HTML5","CSS3","BOOTSTRAP","JAVASCRIPT"]
}
 
const {name,age,branch,skills}=details;

return(
    <div>
        <h1>{name}</h1>
<h3>{branch}</h3>
<ul>
    <li>{skills[0]}</li>
    <li>{skills[1]}</li>
    <li>{skills[2]}</li>
    <li>{skills[3]}</li>
</ul>

    </div>
)

}