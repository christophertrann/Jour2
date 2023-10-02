let hamsandwichCount = 0
let tunasandwichCount = 0
let vegetariansandwichCount = 0
while (breadCount >= 2 && hamCount >= 1 ){
breadCount = breadCount - 2
hamCount = hamCount - 1
hamsandwichCount = hamsandwichCount + 1
}
while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) {
breadCount = breadCount - 2
tunaCount = tunaCount - 1
saladCount = saladCount - 2
tunasandwichCount = tunasandwichCount + 1
}
while (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2) {
breadCount = breadCount -2
saladCount = saladCount - 1
tomatoCount = tomatoCount - 2
vegetariansandwichCount = vegetariansandwich + 1
}
displayThisText("Number of ham sandwich(es):" + hamsandwichCount)
displayThisText("Number of tuna sandwich(es):" + tunasandwichCount)
displayThisText("Number of vegetarian sandwich(es):" + vegetariansandwichCount)
displayIngredients()