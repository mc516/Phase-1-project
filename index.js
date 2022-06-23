document.addEventListener('DOMContentLoaded', () => {
    let randomBtn = document.querySelector('#random');
    //FIRST EVENT LISTENER
    randomBtn.addEventListener('click', () => {
        findRandomActivity();
    });

    let form = document.querySelector('form');
    //SECOND EVENT LISTENER
    form.addEventListener('submit', e => {
        e.preventDefault();
        let type = e.target.selector.value;
        filterActivity(type);
    })  
    
    let darkModeBtn = document.querySelector('.dark-mode')
    //THIRD EVENT LISTENER
    darkModeBtn.addEventListener('click', () => {
        console.log('click')
        darkMode();
    })

    let randomList = document.querySelector('.random-list')
    //FOURTH EVENT LISTENER WITH ARR METHOD
    randomList.addEventListener('click', () => {
       randomActList();  
    })

})



function findRandomActivity() {
    fetch('http://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => {
        let randomAct = document.querySelector('.random-activity')
        randomAct.innerHTML = `${data.activity}`
    })
}

function filterActivity(type) {
    let result;
    fetch('http://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => {
        if(data.type == type) {
            console.log(data)
            result = data.activity;
        } else {
            filterActivity(type)
        }
        console.log(result)
        let activity = document.querySelector('.filtered-activity')
        activity.innerHTML = `${result}`
    })
}

function darkMode() {
    let darkModeBtn = document.querySelector('.dark-mode')
    console.log(darkModeBtn)
}

function randomActList() {
    fetch('http://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => {
        let li = document.createElement('ul')
        li.innerHTML = `<h6>${data.activity}</h6>`
        document.querySelector('.list-activity').appendChild(li)
    })
}