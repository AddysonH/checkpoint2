

let inventories = [

    {
        name: "potions: ",
        value: 0
    },

    {
        name: "Magic Spoons: ",
        value: 0
    },

    {
        name: "Spell Book: ",
        value: 0
    },

    {
        name: "fairies: ",
        value: 0
    },
]

let upgrades = [
    {
        name: "Magic Spoon",
        value: 5
    },

    {
        name: "spellbook",
        value: 10

    },

    {
        name: "fairy",
        value: 5
    },

    {
        name: "cauldron",
        value: 10
    }


]

let modifications = [
    {
        name: "potions per sec. :",
        value: 0
    },
]


//elements
let inventElem = document.getElementById("inventory")
let fairyElem = document.getElementById("fairies")

let upgradeElem = document.getElementById("upgrades")
let modElem = document.getElementById("modification")


//templates
function inventoryTemplate(inventory) {
    return `<div class="col-4">
        <h5>${inventory.name}<span>${inventory.value}</span></h5>
    </div>`
}

function fairyInventory(inventory) {
    return `<div class="col-4">
        <h5>${inventory[3].name}<span>${inventory[3].value}</span></h5>
    </div>`
}

function fairyUpgrade(upgrade) {
    return `<div class="col-3 text-align" id="upgrades">
    <h5>${upgrade[2].name} <button  id="btn"  type = "button" onclick="getFairy()">$<span>${upgrade[2].value}</span></button></h5>
</div>`
}

function upgradeTemplate(upgrade) {
    return `<div class="col-3 text-align" id="upgrades">
    <h5>${upgrade.name} <button  id="btn"  type = "button" onclick="getSpoon()">$<span>${upgrade.value}</span></button></h5>
</div>`
}

function modTemplate(modification) {
    return `<div class="col-6">
    <p>${modification.name}<span>${modification.value}</span></p>
</div > `
}



//drawFunctions
function drawInventory() {
    let template = " "
    inventories.forEach(inventory => {
        template += inventoryTemplate(inventory)
    })

    inventElem.innerHTML = template
}

function drawFairies() {
    let template = " "
    inventories.forEach(inventory => {
        template += fairyInventory(inventory)
    })

    fairyElem.innerHTML = template
}

function drawUpgrades() {
    let template = ""
    upgrades.forEach(upgrade => {
        template += upgradeTemplate(upgrade)
    })

    upgradeElem.innerHTML = template
}

function drawModifications() {
    let template = ""
    modifications.forEach(modification => {
        template += modTemplate(modification)
    })

    modElem.innerHTML = template

}


function getResource() {
    let newCount = inventories[0].value++
    newCount

    /*
    if (inventories[1].value < upgrades[0].value) {
        document.getElementById("btn").setAttribute("disabled", "disabled");
    } else {
        document.getElementById("btn").removeAttribute("disabled")
    }
*/

    update()
}

function getSpoon() {
    let spoonCount = inventories[1].value++
    spoonCount
    //This needs to be x2

    // modifications.forEach(modification => {
    //   modification.value++
    //  })


    //startInterval()
    update()
}


function getFairy() {
    let fairyCount = inventories[3].value++
    fairyCount



    update()
}




function startInterval() {
    let harvestInterval = setInterval(getResource, 1000)
    harvestInterval

    update()
}


function update() {
    drawUpgrades()
    drawInventory()
    drawModifications()
    drawFairies()
}

update()



