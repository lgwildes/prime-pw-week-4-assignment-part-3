console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//setting basket to empty array
let basket =[];
console.log(`expect empty basket`, basket)

//creating function called addItem
function addItem(item){
    if(basket.push(item)) 
   return true;

}
console.log('Adding carrot: expect true.', addItem('carrot'))
console.log('Adding pear: expect true.', addItem('pear'))
console.log('Adding apple: expect true.',addItem('apple'))
console.log( `Basket is now ${basket}`)

//creating loop in function called listItems
function listItems(things){
    for(let i=0; i<things.length; 
        i++)
       {
        console.log(things[i]);
       }
}
listItems(basket)


//creating function to empty 
testArray = [1,2,3,]  
function empty(array){
if(array.length > 0){
    array.length = 0;
    return array
}
}
console.log('expect to see empty array', empty(testArray))

//Stretch part 1 

//creating max items
const maxItems = 5

//is full function
function isFull(array){
    if (array.length < maxItems){
        return false
    }
    else{
        return true
    }
}
console.log('logging basket, and expect false:', isFull(basket))

function addItemUpdated(item){
   if(basket.length < maxItems) {
    basket.push(item)
    return 'another item added';}
   else {
    return 'all out of space'
    //I chose to do a string that makes more sense to me then "true" or "false" in this scenario. I hope that's ok!
   }   
}

console.log('logging addItemUpdated and expect "another item added".' , addItemUpdated('orange'))
console.log('checking contents of basket' ,basket)
console.log('expect room.', addItemUpdated('cherry'))
console.log('expect is full.' ,addItemUpdated('coconut'))
console.log('checking contents of basket' ,basket)

//Stretch part 2
