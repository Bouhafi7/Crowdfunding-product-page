let burgerIcon = document.querySelector('.burger-icon');
let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');

burgerIcon.addEventListener('click', () => {
    overlay.classList.toggle('active');
    menu.classList.toggle('active');
    menu.classList.contains('active') ? burgerIcon.src = 'images/icon-close-menu.svg' : burgerIcon.src = 'images/icon-hamburger.svg';
});



let bookmarkBtn = document.querySelector('.bookmark');
let bookmarkIcon = document.querySelector('.bookmark i');
let bookmarkText = document.querySelector('.bookmark span');

bookmarkBtn.addEventListener('click', () => {
    bookmarkIcon.classList.toggle('bookmarked');
    bookmarkBtn.classList.toggle('bookmarked');
    bookmarkBtn.classList.contains('bookmarked') ? bookmarkText.innerText = 'Bookmarked' : bookmarkText.innerText = 'Bookmark';
});


let backProjectBtn = document.querySelector('.back');
let backProjectContainer = document.querySelector('.back-project');
let closeBackProjectBtn = document.querySelector('.back-project .close');

backProjectBtn.addEventListener('click', () => {
    backProjectContainer.classList.add('active');
    backProjectContainer.style.marginTop = '90vh';
    overlay.classList.add('active');
});

let allPledges = document.querySelectorAll('.pledge-container');
let cards = document.querySelectorAll('.back-project .card');
let checkboxes = document.querySelectorAll('.container .radio .radio-btn');

closeBackProjectBtn.addEventListener('click', () => {
    removeBackProject();
});

function removeBackProject() {
    backProjectContainer.classList.remove('active');
    overlay.classList.remove('active');
    allPledges.forEach(pledge => {
        pledge.classList.remove('active');
    });
    cards.forEach(card => {
        card.classList.remove('active');
    });
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
};





cards.forEach(card => {
    let checkbox = card.querySelector('.container .radio .radio-btn');
    let titleCheck = card.querySelector('.card .container .title');
    let pledgeContainer = card.querySelector('.pledge-container');
    
    checkbox.addEventListener('click', (e) => {
        cardsDeal(e);
    });

    titleCheck.addEventListener('click', (e) => {
        cardsDeal(e);
    });

    function cardsDeal(e) {
        checkbox.checked = true;
        cards.forEach(card => {
            card.classList.remove('active');
            allPledges.forEach(pledge => {
                pledge.classList.remove('active');
            });
        });
        e.target.parentElement.parentElement.parentElement.classList.add('active');
        pledgeContainer ? pledgeContainer.classList.add('active') : false;
    };

    let btnSelectReward = document.querySelectorAll('.select-reward');

    btnSelectReward.forEach(btn => {
        btnSelectReward[0].addEventListener('click', () => {
            matchQuery();
            overlay.classList.add('active');
            backProjectContainer.classList.add('active');
            backProjectContainer.style.marginTop = '180vh';
            cards[1].classList.add('active');
            cards[1].childNodes[1].children[0].children[0].checked = true;
            cards[1].childNodes[3].classList.add('active');
        });
        btnSelectReward[1].addEventListener('click', () => {
            matchQuery();
            overlay.classList.add('active');
            backProjectContainer.classList.add('active');
            backProjectContainer.style.marginTop = '180vh';
            cards[2].classList.add('active');
            cards[2].childNodes[1].children[0].children[0].checked = true;
            cards[2].childNodes[3].classList.add('active');
        });
    });
});

let pledgeInputOver25 = document.querySelector('.pledge-input.over25');
let btnpledgeOver25 = document.querySelector('.inputs > .over25');

let pledgeInputOver75 = document.querySelector('.pledge-input.over75');
let btnpledgeOver75 = document.querySelector('.inputs > .over75');

pledgeInputOver25.addEventListener('input', () => {
    if ((/^[1-9]\d*(\.\d+)?$/).test(pledgeInputOver25.value) == false || pledgeInputOver25.value < 25) {
        pledgeInputOver25.style.border = '1px solid red';
        btnpledgeOver25.classList.add('invalid');
    } else {
        pledgeInputOver25.style.border = '1px solid hsl(176, 50%, 47%)';
        btnpledgeOver25.classList.remove('invalid');
    }
});


pledgeInputOver75.addEventListener('input', () => {
    if ((/^[1-9]\d*(\.\d+)?$/).test(pledgeInputOver75.value) == false || pledgeInputOver75.value < 75) {
        pledgeInputOver75.style.border = '1px solid red';
        btnpledgeOver75.classList.add('invalid');
    } else {
        pledgeInputOver75.style.border = '1px solid hsl(176, 50%, 47%)';
        btnpledgeOver75.classList.remove('invalid');
    }
});

let continueBtns = document.querySelectorAll('.continue');
let thanksContainer = document.querySelector('.thanks-container');
let gotItBtn = document.querySelector('.thanks-container .btn');

continueBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        removeBackProject();
        pledgeInputOver25.value = '25';
        pledgeInputOver75.value = '75';
        overlay.classList.add('active');
        backProjectContainer.classList.remove('active');
        thanksContainer.classList.add('active');
    });
    gotItBtn.addEventListener('click', () => {
        thanksContainer.classList.remove('active');
        overlay.classList.remove('active');
    });
});
