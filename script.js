const myArray=[{
    name:'book flight',
    dueDate:'12-11-2024'
    }, {
    name: 'buy cars',
    dueDate: '12-11-2024'
    }];

function clickList(){
    let taskNameHTML='';

    for (let i= 0; i <myArray.length; i++){
            const taskNameObject = myArray[i];
            //const name = taskNameObject.name;
            //const dueDate = taskNameObject.dueDate; Destructuring
            const{name, dueDate} = taskNameObject;


            const html = `<p> ${name} ${dueDate} 
                        <button onclick="
                        myArray.splice(${i},1);
                        clickList();"
                        >Delete</button>
            </p>`; //generating some HTML code
            taskNameHTML +=html;
    }

console.log(taskNameHTML);
document.querySelector('.js-list').innerHTML = `${taskNameHTML}`;
}

//Input box
function inputEvent(){
    const inputElelemt = document.querySelector('.js-input');
    const dateElelemt = document.querySelector('.js-date');

    const name = inputElelemt.value;
    const dueDate = dateElelemt.value;
    myArray.push({
        //name: name,
        //dueDate: dueDate [shorthand syntax]
        name,
        dueDate
    });

    console.log(myArray);
    inputElelemt.value='';
    clickList();


}

