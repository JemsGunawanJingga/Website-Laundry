// pakaian
const btnOrderPakaian = document.getElementById("btn-order-pakaian");
const btnExitPakaian  = document.getElementById("exit-btn-pakaian");
const payLaundryPakaian = document.getElementById("btn-pay-pakaian");
const laundryPakaian = document.getElementById("laundry-pakaian");

function openLaundryPakaian() {
    laundryPakaian.style.display= 'block' ;
  }

  function exitLaundryPakaian() {
    laundryPakaian.style.display= 'none' ;
  }

  btnOrderPakaian.addEventListener('click', event => {
      openLaundryPakaian();
    })

    btnExitPakaian.addEventListener('click', event => {
      exitLaundryPakaian();
    }) 

// serba tidur
const btnOrderSerbaTidur = document.getElementById("btn-order-serba-tidur");
const payLaundrySerbaTidur = document.getElementById("btn-pay-serba-tidur");
const laundrySerbaTidur = document.getElementById("laundry-serba-tidur");
const btnExitSerbaTidur = document.getElementById("exit-btn-serba-tidur");
     
           function openLaundrySerbaTidur()  {
            laundrySerbaTidur.style.display = 'block';
           }
           function exitLaundrySerbaTidur() {
            laundrySerbaTidur.style.display = 'none';
           }
           btnOrderSerbaTidur.addEventListener('click', event => {
            openLaundrySerbaTidur();
           })
           btnExitSerbaTidur.addEventListener('click', event => {
            exitLaundrySerbaTidur();
           })

// Sepatu & topi 
const btnOrderSepatuTopi = document.getElementById("btn-order-sepatu-topi");
const payLaundrySepatuTopi = document.getElementById("btn-pay-sepatu-topi");
const laundrySepatuTopi = document.getElementById("laundry-sepatu-topi");
const btnExitSepatuTopi= document.getElementById("exit-btn-sepatu-topi");

function openLaundrySepatuTopi()  {
    laundrySepatuTopi.style.display = 'block';
   }
   function exitLaundrySepatuTopi() {
    laundrySepatuTopi.style.display = 'none';
   }
   btnOrderSepatuTopi.addEventListener('click', event => {
    openLaundrySepatuTopi();
   })
   btnExitSepatuTopi.addEventListener('click', event => {
    exitLaundrySepatuTopi();
   })


   // Tikar 
   const btnOrderTikar = document.getElementById("btn-order-tikar");
const payLaundryTikar = document.getElementById("btn-pay-tikar");
const laundryTikar = document.getElementById("laundry-tikar");
const btnExitTikar= document.getElementById("exit-btn-tikar");

function openLaundryTikar()  {
    laundryTikar.style.display = 'block';
   }
   function exitLaundryTikar() {
    laundryTikar.style.display = 'none';
   }
   btnOrderTikar.addEventListener('click', event => {
    openLaundryTikar();
   })
   btnExitTikar.addEventListener('click', event => {
    exitLaundryTikar();
   })




// Order 
        function onlyNumber(evt) {
                
            var ch = String.fromCharCode(evt.which);
        
            if(!(/[0-9]/g.test(ch))){
                evt.preventDefault();
            }
        }
        
        function onlyWeight(evt) {
                        
            var ch = String.fromCharCode(evt.which);
        
            if(!(/[0-9\.]/g.test(ch))){
                evt.preventDefault();
            }
        }
        
        function onlyAlphabet(evt) {
                        
            var ch = String.fromCharCode(evt.which);
        
            if(!(/^[a-z" "A-Z]/g.test(ch))){
                evt.preventDefault();
            }
        }
        
        