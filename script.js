var total=document.querySelector('#total')
var price=document.querySelectorAll('#price')
var quantity=document.querySelectorAll('#quantity')
var moin=document.querySelectorAll('#moin')
var plus=document.querySelectorAll('#plus')
var heart=document.querySelectorAll('#heart')
var trash=document.querySelectorAll('#trash')
var card=document.querySelectorAll('.card')
var darkbutton=document.querySelector('.circle')
var body=document.querySelector("body")
console.log( body.style.background=="");
darkbutton.addEventListener("click",()=>{
   if(body.style.background==""){
    body.style.background="black"
    for(let i=0;i<plus.length;i++){
        plus[i].style.background="black"
    }}else{
        body.style.background=""
        for(let i=0;i<plus.length;i++){
            plus[i].style.background=""
        }  
    }
})
function somme(){
    var result=0
    for (var i=0 ; i<price.length; i++)
        {
            result=result+price[i].innerHTML*quantity[i].innerHTML
        }
        return total.innerHTML=result
}

for(let i=0;i<moin.length;i++){
    console.log(i)
    moin[i].addEventListener('click',()=>{
        if (quantity[i].innerHTML==0)
            {
                quantity[i].innerHTML=0
            }
            else{
                quantity[i].innerHTML--
            }
        somme()
    })
}

for(let i=0;i<plus.length;i++){
    console.log(i)
    plus[i].addEventListener('click',()=>{
        
                quantity[i].innerHTML++
            
        somme()
    })
}
for(let i=0;i<heart.length;i++){
    heart[i].addEventListener('click',()=>{
        if(heart[i].style.color==''){
        heart[i].style.color='red'
    }else{
        heart[i].style.color=''
    }
    })
}
for(let i=0;i<trash.length;i++){
    trash[i].addEventListener('click',()=>{
        card[i].remove()
        quantity[i].innerHTML=0
        somme()
    })
}