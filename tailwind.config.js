/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
    extend: {
      keyframes:{
        "cloud": {
          '0%,100%':{opacity:'1',transform:'translatex(1000px)'},
          
        },
      },
      width:{
        "90":"90%",
        "95":"95%",
        "70":"70%",
      },
      borderColor:{
        "nav-border-color":"#3375e1",
        
      },
      textColor:{
        "nav-text-color":"#dde8fa",
        "slider-btn-color":"#1c66de",
        "parag-body-text":"#707070",
        "low-color-cards":"#b7b7b7",

      },
      backgroundColor:{
        "main-nav-bg":"#1c66de",
        "under-domain-bg":"#e8f1f8",
        "facebook":"#4b62b3",
        "twitter":"#03baeb",
        "google":"#cb242e",
        "insta":"#057ad7",
        "youtube":"#e20000",



      }
    },
  },
  plugins: [],
}

