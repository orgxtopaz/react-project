console.log("I am running");



let storeDatas =["1"];

const submitForm =(e) =>{
    e.preventDefault();
    const datas = e.target.elements.inputs.value;


    if(submitForm){  
        storeDatas.push(datas);
        e.target.elements.inputs.value="";
        console.log(storeDatas);
        render();
    }

}
const removeAll =()=>{
    storeDatas =[""];
}

var appRoot = document.getElementById('app');  //----------------------------ORIGIN---------------------


const render =()=>{

const formRender =(

    <div>

        <form onSubmit={submitForm}>
            <input type="text" placeholder="input here" name="inputs"></input>
            <button type="submit">click</button>
          
            <button type="submit" onClick={removeAll}>click</button>

            {

                storeDatas.map((values)=>{
                    return <p key={values}>Values:{values} </p>
                })
            }
        </form>

    </div>


)
ReactDOM.render(formRender, appRoot);
}


render()







