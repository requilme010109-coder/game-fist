 const pertayaan = document.getElementById("pertayaan")
 const jawaban = document.getElementById("jawaban")
 const load = document.getElementById("loaders")
 const container = document.getElementsByClassName("container")
 const head = document.getElementById("head")

 let init = 0

 
 const botSay = (data) => {
    return [
        "Haloo, saya adalah SanBot, nama kamu siapa?",
        `Haloo ${data?.nama}, berapa usia kamu?`,
        `Ohh ${data?.usia}, hobi kamu apa?`,
        `Woww sama dong aku juga suka ${data?.hobi}, Kalau pacar punya gak?`,
        `Ohh ${data?.pacar}, apa keluhan dan masalah kamu aku dengarin nih`,
        `Kamu ${data?.masalah}, aku saranin deh mulai disiplin dari hal kecil kecil dulu, contoh membaca buku`
        
    ]
 }

 pertayaan.innerHTML = botSay()[0]

 let usersData = []
 

function botStart () {
     if (jawaban.value.length < 1) return alert ("Silahkan isi jawaban terlebih dahulu")   
    init++
    if (init == 1) {
        (botDelay({ nama: jawaban.value}))
    } else if (init==2) {
        (botDelay({ usia: jawaban.value}))
    } else if (init==3) {
       (botDelay({ hobi: jawaban.value}))
    } else if (init==4) {
       (botDelay({ pacar: jawaban.value}))
    } else if (init==5) {
        (botDelay({ masalah: jawaban.value}))   
    } else if (init==6) {
        finishing()
    }

    else {
        botEnd()
    }
}


function botDelay(jawabanUser) {
    load.style.display = "block"
    container[0].style.filter ="blur(8px)"
    head.style.filter = "blur(8px)"
    setTimeout(() =>{
    pertayaan.innerHTML = botSay(jawabanUser)[init]
    load.style.display = "none"
    container[0].style.filter = "none"
    head.style.filter = "none"
    }, [1500])
    usersData.push(jawaban.value)
     jawaban.value=""
}

function finishing() {
    setTimeout(()=> {
    pertayaan.innerHTML = `Thank u ya ${usersData[0]} udah main di sanBot lain kali main lagi ya😁`
    jawaban.value ="Thank jugaa ya Sanbot"
    },[1500])  
} 

function botEnd() {
    alert (`Thank u sudah berkunjug ${usersData[0]} kamu akan diarahkan ke halaman utama`)
window.location.reload()
}