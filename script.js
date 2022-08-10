const newLi = document.createElement("li")
const ul = document.body.querySelector("nav ul")
ul.appendChild(newLi)


const btnOwner = document.createElement("button")
const textButton = document.createTextNode("Show Owner")
btnOwner.appendChild(textButton)

const addbtn = document.body.querySelector('nav ul li:nth-child(4)')
addbtn.appendChild(btnOwner)



btnOwner.addEventListener('click', function(){
    
    const asideFeatured = document.body.getElementsByTagName('aside')[0]
    asideFeatured.classList.toggle('featured')

    // show and hide profile
    if (asideFeatured.style.display === 'block'){
        asideFeatured.style.display = 'none'
    } else {
        asideFeatured.style.display = 'block'
    }

    const sectionA = document.body.getElementsByTagName('section')[0]
    sectionA.classList.toggle('featured')

    // change name button
    const btnName = document.body.getElementsByTagName('button')[0]
    if (btnName.textContent === 'Show Owner'){
        btnName.innerHTML = 'Unshow'
    } else {
        btnName.innerHTML = 'Show Owner'
    }

})
