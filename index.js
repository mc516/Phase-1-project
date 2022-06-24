let arr =[];

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

    let getList = document.querySelector('.generate-list')
    //FOURTH EVENT LISTENER
    getList.addEventListener('click', () => {
        let listArr = [];
        console.log('click') 
        for(let i = 0; i < 10; i++){
            fetch('http://www.boredapi.com/api/activity/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                arr.push(data)
            })


            }

       
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



