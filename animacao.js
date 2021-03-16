      
        let clique = document.querySelector(".icon-menu");
        clique.addEventListener("click" , mostra);
        
        function mostra(){
            let menu = document.getElementById('nav-link');
            if(menu.classList.contains('hide')){
                menu.classList.add('show');
                menu.classList.remove('hide');
            }else{
                menu.classList.remove('show');
                menu.classList.add('hide')
            }
            
        
        }