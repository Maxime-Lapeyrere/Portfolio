$('#compteur').text($('.mail').length); 



var trashClick = $('.bin');

trashClick.click(
    function(){
        this.parentNode.remove();
        $('#compteur').text($('.mail').length);
        }
    )


// for(var i=0; i<trashClick.length; i++){
// trashClick[i].addEventListener("click", 
//     function(){
//             this.parentNode.remove();
//             document.getElementById('compteur').textContent = document.getElementsByClassName('mail').length;
//         }
//     )
// }

var clickadd = $('#btn');

clickadd.click(
    function(){
        var newtxt = $('#newmsg').val()
        
        var ul = $("#list")
        
        var newli = document.createElement("li");
        
        var first = $('.mail')
        console.log('info',first)
        
        newli.setAttribute("class","mail tmplt")
        
        ul.append(newli);
        

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max)); }
        var selectrandom = getRandomInt(11)
        tabimg = new Array();
        tabimg = ["./img/Fichier 1.png","./img/Fichier 2.png","./img/Fichier 3.png","./img/Fichier 4.png","./img/Fichier 5.png","./img/Fichier 6.png","./img/Fichier 7.png","./img/Fichier 8.png","./img/Fichier 9.png", "./img/Fichier 10.png","./img/Fichier 11.png","./img/Fichier 12.png",] 
        tabname = new Array();
        tabname = []
        var imag =  document.createElement("img");
            imag.className = "avatar";
            imag.src = tabimg[selectrandom].source;
        newli.appendChild(imag)

        var nameMessage =  document.createElement("div");
            nameMessage.setAttribute("class","message")
        newli.appendChild(nameMessage);

        var h6 =  document.createElement("h6");
            h6.textContent = "Jean Ledu";
        nameMessage.appendChild(h6);

        var content = document.createElement('p');
            content.textContent = newtxt  
        nameMessage.appendChild(content)

        var trash = document.createElement('img')
            trash.src = "./img/recycle-bin-1-461646.png";
            trash.setAttribute("class","bin")  
        newli.appendChild(trash)

        

        for(var i=0; i<trashClick.length; i++){
            trashClick[i].addEventListener("click", 
                function(){
                        this.parentNode.remove();
                        $('#compteur').text($('.mail').length);
                    }
                )
            }
        
        newli.insertAfter(".newtxt")
        $('#compteur').text($('.mail').length);
        document.getElementById('newmsg').value = 'Nouveau Message'
        
    }
)



// clickadd.addEventListener("click", 
//     function(){
//         var newtxt = document.getElementById('newmsg').value
//         console.log(newtxt)
//         var ul = document.getElementById("list")
//         var newli = document.createElement("li");
//         var first = document.getElementsByClassName('mail')
        
        
//         newli.setAttribute("class","mail tmplt")
        
//         ul.appendChild(newli);

//         function getRandomInt(max) {
//             return Math.floor(Math.random() * Math.floor(max)); }
//         tabimg = new Array();
//         tabimg = ["./img/Fichier 1.png","./img/Fichier 2.png","./img/Fichier 3.png","./img/Fichier 4.png","./img/Fichier 5.png","./img/Fichier 6.png","./img/Fichier 7.png","./img/Fichier 8.png","./img/Fichier 9.png","./img/Fichier 10.png","./img/Fichier 11.png","./img/Fichier 12.png"] 

//         var imag =  document.createElement("img");
//             imag.className = "avatar";
//             imag.src = tabimg[getRandomInt(11)];
//         newli.appendChild(imag)

//         var nameMessage =  document.createElement("div");
//             nameMessage.setAttribute("class","message")
//         newli.appendChild(nameMessage);

//         var h6 =  document.createElement("h6");
//             h6.textContent = "Jean Ledu";
//         nameMessage.appendChild(h6);

//         var content = document.createElement('p');
//             content.textContent = newtxt  
//         nameMessage.appendChild(content)

//         var trash = document.createElement('img')
//             trash.src = "./img/recycle-bin-1-461646.png";
//             trash.setAttribute("class","bin")  
//         newli.appendChild(trash)

        

//         for(var i=0; i<trashClick.length; i++){
//             trashClick[i].addEventListener("click", 
//                 function(){
//                         this.parentNode.remove();
//                         $('#compteur').textContent = $('.mail').length;
//                     }
//                 )
//             }
        
//         document.getElementById('list').insertBefore(newli, first[0])
    
//         $('#compteur').textContent = $('.mail').length;
//         document.getElementById('newmsg').value = 'Nouveau Message'
        
//     }
// )

// $('#compteur').textContent = $('.mail').length;

// var sent = document.getElementById("newmsg").value;
// var sent1 = document.getElementById("newmsg").textContent;
// sent.textContent=('Nouveau Message')
// console.log('info',sent1)
// console.log('info2',sent)