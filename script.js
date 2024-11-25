const myArray= [''];

document.querySelector('.js-add').addEventListener('click', () => {
    inputEvent();
})

function clickList() {
    let taskNameHTML='';

    for (let i= 0; i <myArray.length; i++){
        if( i === 0){
            continue;//jump the first index
        }
            const taskNameObject = myArray[i];
            //const name = taskNameObject.name;
            //const dueDate = taskNameObject.dueDate; Destructuring
            const{name, dueDate} = taskNameObject;


            const html = `<div class="result"> ${name} <div>${dueDate}</div> 
                        <button 
                        class="delete"
                        onclick="
                        myArray.splice(${i},1);
                        clickList();"
                        >Delete</button>
            </div>`; //generating some HTML code
            taskNameHTML +=html;
    }

console.log(taskNameHTML);
document.querySelector('.js-list').innerHTML = `${taskNameHTML}`;
}

const keyDown = document.querySelector('.js-input');
keyDown.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        inputEvent();
    }
});


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

