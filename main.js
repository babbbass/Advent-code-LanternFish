import { readFileSync } from "fs"

const test = readFileSync("test.txt", "utf8")
const final = readFileSync("final.txt", "utf8")
console.log(test)
const fishs = final.split(",").map(Number)
const fishsDays = Array(9).fill(0)

fishs.forEach((daysRemaining) => {
  fishsDays[daysRemaining]++
})

let days = 256
while (days > 0) {
  const newfish = fishsDays.shift()
  fishsDays[6] = fishsDays[6] + newfish
  fishsDays.push(newfish)
  days = days - 1
}

const nbfish = fishsDays.reduce((a, b) => a + b, 0)
console.log(nbfish)
