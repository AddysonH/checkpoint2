let inventories = [

    {
        name: "Herbs: ",
        value: 0
    },

    {
        name: "Trimmer: ",
        value: 0
    },

    {
        name: "SpeedGrowth: ",
        value: 0
    },

    {
        name: "Gardener: ",
        value: 0
    },

    {
        name: "Sprinklers: ",
        value: 0
    }
]

let upgrades = [
    {
        name: "Trimmer",
        value: 10
    },

    {
        name: "Speedgrowth",
        value: 20
    },

    {
        name: "Gardener",
        value: 30
    },

    {
        name: "Sprinklers",
        value: 40
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
    <h5>${upgrade.name} $<button  id="buttons" onclick="getUpgrade()"><span>${upgrade.value}</span></button></h5>
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
    newCount

    //let harvestInterval = setInterval(getResource, 500)

    if (inventories[1].value < upgrades[0].value) {

    }

    update()
}

function getUpgrade() {
    let getTrimmer = inventories[1].value++
    getTrimmer

    let harvestInterval = setInterval(getResource, 500)

    harvestInterval

    update()
}

//if  inventories[1].value = 1 which is the trimmers then auto count needs to happen on the inventory[0].value which is the herbs




function update() {
    drawUpgrades()
    drawInventory()
    drawModifications()
}

update()