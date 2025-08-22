            alert("Cargando información");

            function removeBanner(){
                var bannerEl = document.getElementById("banner");
                bannerEl.remove();
            }

            function removeBannerThis(element){
                element.parentElement.remove();
            }

            function changeTemperatura(){
                var temperaturaEl = document.getElementById("temperatura");
                
                var temperaturasEls = document.querySelectorAll(".temperaturaSigno");
                for(var i = 0; i < temperaturasEls.length; i++){
                    temperaturasEls[i].innerText = temperaturaEl.value;
                }
            }
