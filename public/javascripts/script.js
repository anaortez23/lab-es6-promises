// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                const steakImg = document.createElement("img");
                steakImg.src = "./public/images/steak.jpg";
                document.getElementById("table").appendChild(steakImg);

              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes')
.then(() => {
  // ... your code here
  return addFood(mashPotatoes[1], '#mashPotatoes')
.then(() => {
  return addFood(mashPotatoes[2], '#mashPotatoes')
.then(() => {
  return addFood(mashPotatoes[3], '#mashPotatoes')
.then(() => {
  return addFood(mashPotatoes[4], '#mashPotatoes')
.then(() => {
          const mashPotatoesImg = document.createElement("img");
                mashPotatoesImg.src = "./public/images/mashPotatoes.jpg";
                document.getElementById("table").appendChild(mashPotatoesImg);
        })
      })
    })
  })
});

// Iteration 3 using async and await

  async function makeFood(step) {
    // ... your code here
    for(i = 0; i < step.length; i++){
      await addFood(step[i], "#brusselSprouts");
    }
    const brusselSprouts = document.createElement("img");
    brusselSprouts.src = "./public/images/brusselSprouts.jpg";
    document.getElementById("table").appendChild(brusselSprouts);

  }
  makeFood(brusselSprouts);
