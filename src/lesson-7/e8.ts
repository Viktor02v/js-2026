// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень 
// (шляхи до зображень передаються у функцію)

{
if(confirm('Start testing ?')){
  const IMG_1 = 'public/bell.png'
  const IMG_2 = 'public/peach.png'
  const IMG_3 = 'public/plum.png'
  const IMG_4 = 'public/seven.png'

  const MIN = 1 
  const MAX = 4

  function generateRandomNumber(min:number, max:number) {
    if(!min || !max) throw new Error()
      return min + Math.floor(Math.random() * max)
  }

  function getRandomImg(img1:string, img2:string, img3:string, img4:string) {
    if(!img1 || !img2 || !img3 || !img4) throw new Error()
    let randomNum = generateRandomNumber(MIN, MAX)
    switch(randomNum) {
      case 1: 
      return img1
      case 2: 
      return img2
      case 3: 
      return img3
      case 4: 
      return img4
      default: return 'Sorry, someting went wrong!'
    }
  }

  const randomImg = getRandomImg(IMG_1, IMG_2, IMG_3,IMG_4)

  document.write(`
    <p><img src="/${randomImg}" alt="${randomImg}"></p>
    `)
}
}