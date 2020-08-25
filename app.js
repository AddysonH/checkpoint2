


//NOTE create a global autoMod and clickMod
//increase correct mod on purchase

let clickMod = 1
let autoMod = 0
let potions = 0


let inventories = [
    {
        name: "Magic Spoons: ",
        clickValue: 2,
        stock: 0
    },

    {
        name: "Spell Book: ",
        clickValue: 5,
        stock: 0
    },

    {
        name: "fairies: ",
        clickValue: 0,
        stock: 0

    },

    {
        name: "cauldron: ",
        value: 10,
        stock: 0
    }
]

let upgrades = [
    {
        name: "magic spoons: ",
        value: 5
    },

    {
        name: "spell book: ",
        value: 10

    },

    {
        name: "fairies: ",
        value: 5
    },

    {
        name: "cauldron: ",
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
let inventoryElem = document.getElementById("spoon")
let totalElem = document.getElementById("total")
let fairyElem = document.getElementById("fairies")
let upgradeElem = document.getElementById("upgrades")
let modElem = document.getElementById("modification")


//templates

function inventoryTemplate(inventory) {
    return `<div class="col-4">
        <h5>${inventory.name}<span>${inventory.stock}</span></h5>
    </div>`
}

// function upgradeTemplate(upgrade) {
//     return `<div class="col-3 text-align" id="upgrades">
//     <h5>${upgrade.name} <button  id="btn"  type = "button" onclick="getUpgrades(${upgrade})">$<span>${upgrade.value}</span></button></h5>
// </div>
// `
// }
function upgradeTemplate(upgrade) {
    return `<div class="col-3 text-align" id="upgrades">
    <h5>${upgrade.name} <button  id="btn"  type = "button" onclick="getUpgrades('${upgrade.name}', ${upgrade.value})">$<span>${upgrade.value}</span></button></h5>
</div>
`
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
    inventoryElem.innerHTML = template
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
    potions += clickMod
    console.log(potions)

    update()
}


function getUpgrades(upgradeName, upgradeValue) {
    if (potions >= upgradeValue) {
        potions -= upgradeValue

        inventories.forEach(inventory => {
            if (inventory.name.toLowerCase() === upgradeName.toLowerCase()) {
                inventory.stock++
                clickMod += inventory.clickValue
                if (inventory.name.toLowerCase() === "fairies: ") {
                    autoMod += 1
                    modifications[0].value = autoMod;
                    setInterval(startInterval, 1000)
                }

                if (inventory.name.toLowerCase() === "cauldron: ") {
                    autoMod += 2
                    modifications[0].value = autoMod;
                    setInterval(startInterval, 1000 * 2)
                }
            }
        })
    }

    update()
}

// function getUpgrades(upgradeName, upgradeValue) {
//     if (potions >= 5) {
//         clickMod += inventories[0].clickValue
//         potions -= 5
//         inventories[0].stock++
//         //upgrades[0].value++

//     }

//     update()
// }

//TODO create getSpellbook as well as cauldron

/*
function getSpellBook() {

    if (potions >= 10) {
        clickMod += inventories[1].clickValue
        potions -= 10
        inventories[1].stock++
        //upgrades[1].value++
    }

    update()
}

*/



//TODO increase autoMod when buying fairy or cauldron



function startInterval() {
    console.log("Counting")
    potions += autoMod

    update()
}




function update() {
    drawUpgrades()
    drawInventory()
    drawModifications()
    totalElem.innerHTML = "potions " + potions.toString()
    //modElem.innerHTML += autoMod.toString()

}

update()




