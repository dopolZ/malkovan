const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')
const days = document.querySelector('.days')
const months = document.querySelector('.months')
const years = document.querySelector('.years')
const start = Date.parse('2022-01-13T18:24:00.000Z')

const write = () => {
   const total = new Date(Date.now() - start)
   const sec = total.getSeconds()
   const min = total.getMinutes()
   const hou = total.getHours()
   const day = total.getDate() - 1
   const mon = total.getMonth()
   const yea = total.getFullYear() - 1970

   seconds.textContent = sec
   minutes.textContent = min
   hours.textContent = hou
   days.textContent = day
   months.textContent = mon
   years.textContent = yea
}

setInterval(write, 1000)
