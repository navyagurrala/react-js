//ways to export a component
//1.default export

function Fun1(){
return(
    <div>
        <h1>default export</h1>
    </div>
)
}
export default Fun1;

//2.named export

export function Newfun1(){
    return(

        <div>
            <h1>this is named export</h1>
        </div>


    )
}


export function Named1(){
    return(

<div>
<h1>we can write as many as components in named export</h1>


</div>

    )
}

