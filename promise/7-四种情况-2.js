new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('step1 end')
    resolve('Hello1')
  }, 1000)
})
  .then((val) => {
    console.log(val)
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('step2 end')
        resolve('Hello2')
      }, 1000)
    })
  })
  .then((val) => {
    console.log(val)
    console.log('step3 end')
  })

// step1 end
// Hello1
// undefined
// step3 end
// step2 end