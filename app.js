let inventories = [

    {
        name: "Mined Items: ",
        value: 0
    },

    {
        name: "Upgrade1: ",
        value: 0
    },

    {
        name: "Upgrade2: ",
        value: 0
    },

    {
        name: "Upgrade3: ",
        value: 0
    },

    {
        name: "Upgrade4: ",
        value: 0
    }
]

let upgrades = [
    {
        name: "Upgrade1 =",
        value: 0
    },

    {
        name: "Upgrade1 =",
        value: 0
    },

    {
        name: "Upgrade1 =",
        value: 0
    },

    {
        name: "Upgrade1 =",
        value: 0
    }
]

let modifications = [
    {
        name: "mod1",
        value: 0
    },
    {
        name: "mod2",
        value: 0
    }
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
    return `<div class="col-3">
    <h5>${upgrade.name} <span>${upgrade.value}</span></h5>
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


function getResource() {
    let newCount = inventories[0].value++
    console.log(newCount)
    update()
}


function update() {
    drawUpgrades()
    drawInventory()
    drawModifications()
}

update()