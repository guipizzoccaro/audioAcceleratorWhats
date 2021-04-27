let cont = 0
const interval = setInterval(() => {
    const header = document.querySelector("._1R3Un")
    if (header) {
        console.log(header)
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "1x"
        button.classList.add("btn_rapidao")


        button.addEventListener("click", () => {
            const audio = document.querySelectorAll('audio')
            if (cont == 0) {
                audio.forEach((audio) => {
                    audio.playbackRate = 2
                    button.innerHTML = "2x"
                    cont = 1
                })
            } else if (cont == 1) {
                audio.forEach((audio) => {
                    audio.playbackRate = 1
                    button.innerHTML = "1x"
                    cont = 0
                })
            }



        })

        header.appendChild(button)
    }

}, 1000)

