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
        name: "Magic Spoons: ",
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
let upgradeElem = document.getElementById("upgrades")
let modElem = document.getElementById("modification")


//templates
function inventoryTemplate(inventory) {
    return `<div class="col-4">
        <h5>${inventory.name}<span>${inventory.value}</span></h5>
    </div>`
}

function upgradeTemplate(upgrade) {
    return `<div class="col-3" id="upgrades">
    <h5>${upgrade.name} <button  id="btn"  type = "button" onclick="getUpgrade()">$<span>${upgrade.value}</span></button></h5>
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


//Collection Functions

function getResource() {
    let newCount = inventories[0].value++
    newCount

    if (inventories[1].value < upgrades[0].value) {
        document.getElementById("btn").setAttribute("disabled", "disabled");
    } else {
        document.getElementById("btn").removeAttribute("disabled")
    }

    update()
}

function getUpgrade() {
    let getTrimmer = inventories[1].value++
    getTrimmer

    startInterval()
    update()
}


function startInterval() {
    let harvestInterval = setInterval(getResource, 1000)
    harvestInterval
}


function update() {
    drawUpgrades()
    drawInventory()
    drawModifications()
}

update()

