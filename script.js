const myArray=[''];



function clickList(){
    let taskNameHTML='';

    for (let i= 0; i <myArray.length; i++){
            const taskName = myArray[i];
            const html = `<p> ${taskName} </p>`; //create some HTML code
            taskNameHTML +=html;
    }

console.log(taskNameHTML);
document.querySelector('.js-list').innerHTML = `${taskNameHTML}`;
}

//Input box
function inputEvent(){
    const inputElelemt = document.querySelector('.js-input');
    const name = inputElelemt.value;
    myArray.push(name);
    console.log(myArray);
    inputElelemt.value='';
    clickList();


}

