// Iteration 1: Names and Input
const hacker1 = "Elisa";
console.log(`the driver name is ${hacker1}`);
const hacker2 = "Javier";
console.log(`the navigator name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters`
  );
}

// Iteration 3: Loops
let result1 = ''
for (let i=0; i<hacker1.length; i++){
    result1 += hacker1[i].toUpperCase() + ' '
}
console.log(result1.trim())

let result2= ''
for (let i=hacker2.length - 1; i>=0; i--){
    result2 += hacker2[i]
}
console.log(result2)

for(let i=0; i<hacker2.length; i++){
    if(hacker1 === hacker2){
        console.log(`What?! You both have the same name?`)
        break
    }
    else if(hacker1[i]>hacker2[i]){
        console.log(`The driver's name goes first`)
        break
    }else if(hacker1[i]<hacker2[i]){
        console.log(`Yo, the navigator goes first, definitely`)
        break
    }else{
        continue
    }
}

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices in eros vitae iaculis. Nullam lacus justo, pulvinar vitae massa faucibus, pretium pulvinar odio. Duis eu leo felis. Pellentesque elementum odio ut eros semper mollis. Phasellus volutpat arcu at ipsum elementum, ac mollis justo placerat. Proin scelerisque finibus sem, eget scelerisque nibh dignissim in. Morbi sagittis sapien velit, vel ornare leo tempus ut.

Nunc id bibendum tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in suscipit lectus. Pellentesque lobortis tortor velit, eget scelerisque libero facilisis sed. Ut in neque ut turpis ultricies rhoncus. Pellentesque vel nisi dui. Aenean egestas pharetra justo, nec rutrum arcu dictum vel. Quisque convallis, nulla sed gravida interdum, sem erat dignissim ipsum, vitae iaculis ipsum dolor quis tellus. Nullam pellentesque justo sed felis posuere mollis ac nec felis. Ut dapibus sollicitudin nisl, in molestie urna congue in. Donec ac lacus vel ex viverra mollis non ac nulla. Mauris iaculis massa lectus.

Vestibulum in interdum justo. Integer hendrerit dolor vel et elit ullamcorper tempus. Sed tempus odio et laoreet ultricies. Praesent non dignissim dolor, vel dapibus mauris. Aenean tincidunt vitae mauris placerat tempor. Morbi eget nisl id erat luctus pulvinar a eget turpis. Pellentesque nulla urna, vulputate ut ultrices sed, tincidunt eleifend nibh. Nullam convallis ipsum nec sem vestibulum malesuada. Aliquam euismod lacus sed euismod volutpat. Morbi elementum consequat lectus. Sed porttitor tincidunt nisl quis lobortis. Nulla nec iaculis odio, sed mattis ex. In hac habitasse platea dictumst. In sollicitudin nunc in augue ultricies tincidunt.`

let numberOfWords = 1
for (let i=0; i<longText.length; i++){
    if(longText[i] === ' '){
        numberOfWords += 1
    }
}
console.log(numberOfWords)

let numberOfEt = 0
for(let i=0; i<longText.length; i++){
    if(longText[i]+longText[i+1]+longText[i+2]+longText[i+3] === ' et '){
        numberOfEt += 1
    }
}
console.log(numberOfEt)

const phraseToCheck = "Was it a car or a cat I saw?"

let phraseNormal = ''
let phraseReverse = ''
for (let i=0; i<phraseToCheck.length; i++){
    if(phraseToCheck[i] >= 'A' && phraseToCheck[i] <= 'z'){
        phraseNormal += phraseToCheck[i].toLocaleLowerCase()
    }else{
        continue
    }
}
for(let i=phraseNormal.length-1; i>=0; i--){
    phraseReverse += phraseNormal[i]
}
if(phraseNormal === phraseReverse){
    console.log(`it's a palindrome`)
}else{
    console.log(`it's not one!`)
}