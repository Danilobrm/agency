const hamburguer = document.querySelector(".hamburguer")
const menu = document.querySelector(".menu")
const bar = document.querySelectorAll('.bar')
const page1 = document.querySelector('.principal')
const itemMenu = document.querySelectorAll('a.item')
const contact = document.querySelector('.contact')
const header = document.querySelector('header')
const body = document.querySelector('header')



//ativa hamburguer, ativa menu e ative o desaparecimento do botao contato
//quando clicado novamente, fecha hamburguer, fecha menu e fecha botao contato
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active")
    menu.classList.toggle("active")
    buttonContact.classList.toggle("active")
    //trocar cor hamburguer menu aberto
    if(menu.className === 'menu active') {
        changeBlack()
    }//trocar cor hamburguer quando menu fechar e estiver na tela branca
    if(menu.className === 'menu' && scroll() < 1017) {
        changeWhite()  
    } 
})

for(let i of itemMenu){
    i.addEventListener("click", ()=> {buttonContact.classList.toggle("active")})
}

//executa a função para o hamburguer começar branco
changeWhite() 

//fecha menu hamburguer quando seleciona uma opção
document.querySelectorAll(".item").forEach(n => n.
addEventListener("click", () => {
    hamburguer.classList.remove("active")
    menu.classList.remove("active")
}))


//if screen size is less than 800px and menu it's not active, 
//closes the menu and change the color oh hamburguer to white
//back to default mode
function removeMenuBySize(sizeScreen) {
    if(sizeScreen>800){
        if(menu.className === 'menu active') {
            hamburguer.classList.remove("active")
            menu.classList.remove("active")
            changeWhite()
        }
    }
}

//auto execute the function that gives de menu your inner text by window width
innerTextMenu(size())

    //create button with href to contact
    const buttonContact = document.createElement('a')
    buttonContact.href = '#contact'
    //if the window size is less than 800 and menu doesn't have the class active
    //bring the contact circle back
    if(size() <= 800 && !(menu.className.includes("active"))) {
        page1.appendChild(buttonContact)
    }
    if(size() > 800 ) {
        page1.appendChild(buttonContact)
    }
    

//give the position of the scroll Y
function scroll() {
    return window.scrollY
}
//give me the actual size of the window
function size() {
    return window.innerWidth
}

    //defines the contact button text by the window size
    function text(sizeScreen){
        if(sizeScreen>800){
            return 'Contact us'
        }
        if(sizeScreen<=800){
            return `<i class="ball ${menuType(size())[2]}"></i>` 
        }
    }

    //defines the contact button class by the window size
    function className(sizeScreen){
        if(sizeScreen>800){
            return 'contact-us'
        }
        if(sizeScreen<=800){
            return 'contact-ball'
        }
    }

    //if page1 last element don't have the button contact class and dont have the 
    //button contact active class, execute the function to to give the button
    //it's class and inner text
    function contactInner() {
        if(page1.lastElementChild.className !== className(size()) && page1.lastElementChild.className !== `${className(size())} active`){
            createButtonContact(size())
        }
    }
    
    //auto create the logo of the page and links to the home page
        const logo = document.createElement('a')
        logo.className = 'logo'
        logo.innerText = 'LOGO'
        logo.href = '#home'

    //execute a function that uses scroll
    function scrollAction(scrollWindow) {
        changeMenuColor(scrollWindow)
        menuBigScreenSee(scrollWindow)
    }

    
    //function to give the button contact it's class and name
    function createButtonContact(sizeScreen) {
        buttonContact.className = className(sizeScreen)
        buttonContact.innerHTML = text(sizeScreen)     
    }
    executeBySize(size())
    //this function will execute functions that uses size as parameter, 

    //remove the menu by the window size
    //change the menu inner text from text to icon
    //change the logo between the header and the div from body
    function executeBySize(sizeScreen) {
        contactInner(sizeScreen)
        removeMenuBySize(sizeScreen)  
        innerTextMenu(sizeScreen)
        appendLogo(sizeScreen).appendChild(logo)
    }
    //auto create logo when open the website
    appendLogo(size()).appendChild(logo)

    //function that turns the hamburguer in white
    function changeWhite() {
        for(let i of bar) {
            i.style.backgroundColor = 'white'
        }
    }

    //function that turns the hamburguer in black
    function changeBlack() {
        for(let i of bar) {
            i.style.backgroundColor = 'black'
        }
    }

    //change the hamburguer color depending on the screen position
    //white screen the hamburguer turns black
    function changeMenuColor() {
        if(scroll() >= 1017) {
            changeBlack()  
        }
        if(scroll() < 1017 && menu.className === 'menu') {
            changeWhite()    
        }  
    }

    //auto execute the function that turns hamburguer white to when open
    //the page it's possible to see the hamburguer in it's size
    changeWhite()

    //change the menu background color depending on the screen position
    //white screen the background appears
    function menuBigScreenSee() {
        if(scroll() >= 1017) {
            for(let i of itemMenu) {
                i.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
            }
        }
        if(scroll() < 1017 && menu.className === 'menu') {
            for(let i of itemMenu) {
                i.style.backgroundColor = 'transparent'
                contact.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
            }
        }          
    }

    


    

    // defines the type of menu by the windows size
    //hamburguer or normal
    function menuType(sizeScreen) {
        if(sizeScreen>800){
            return ['Home', 'About us', 'Contact']
        }
        if(sizeScreen<=800){
            return ["fa-solid fa-house", "fa-solid fa-users", "fa-solid fa-phone"]
        }
    }

    //if the size screen is bigger than 800, put the normal menu the texts
    //if the size screen is lower than 800, put the hamburguer menu the icons
    function innerTextMenu(sizeScreen) {
        if(sizeScreen>800){
            appendInnerText()
        }
        if(sizeScreen<=800){
            appendInnerIcon()
        }
    }
    
    //put each menu text in your space
    function appendInnerText() {
        for(let i = 0; i<itemMenu.length; i++) {
            itemMenu[i].innerText = menuType(size())[i]
        }
    }
    //put each menu icon in your space
    function appendInnerIcon() {
        for(let i = 0; i<itemMenu.length; i++) {
            itemMenu[i].innerText = ''
            const icon = itemMenu[i].appendChild(document.createElement('i'))
            icon.classList = menuType(size())[i]
        }
    }

    //tell me if the logo goes inside the header or the body
    function appendLogo(sizeScreen) {
        if(sizeScreen>800){
            return header
        }
        if(sizeScreen<=800){
            return body
        }
    }
