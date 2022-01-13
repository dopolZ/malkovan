const canvas = document.querySelector('canvas')
const $ = canvas.getContext('2d')
const W = (canvas.width = document.documentElement.clientWidth)
const H = (canvas.height = document.documentElement.clientHeight)
const str =
   'А+人#Б U0吏LВ- >Г丈1W Д=Е2用Ё 为F&Ж G完3З И会4VЙ К中5SЛ М方6Н\
   手О7N 科%П< Р最8С 你Т9У 表Ф!YХ Ц?哪QЧ Ш.UЪ,从Ы Ь:手RЭ D我ЮZ;Я'
const matrix = str.split("")
const font = 12
const col = W / font
const row = Math.floor(H / font)
const arr = []

for (let i = 0; i < col; i++) arr[i] = 1

for (let i = 0; i < row; i++) {
   $.fillStyle = 'rgba(0, 0, 0, .09)'
   $.fillRect(0, 0, W, H)
   $.fillStyle = '#0f0'
   $.font = font + 'px system-ui'

   for (let i = 0; i < arr.length; i++) {
      let txt = matrix[Math.floor(Math.random() * matrix.length)]
      $.fillText(txt, i * font, arr[i] * font)
      arr[i]++
   }   
}

function draw() {
   $.fillStyle = 'rgba(0, 0, 0, .05)'
   $.fillRect(0, 0, W, H)
   $.fillStyle = '#0f0'
   $.font = font + 'px system-ui'

   for (let i = 0; i < arr.length; i++) {
      let txt = matrix[Math.floor(Math.random() * matrix.length)]
      $.fillText(txt, i * font, arr[i] * font)
   
      if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0
      arr[i]++
   }
}

setTimeout(() => setInterval(draw, 130))
