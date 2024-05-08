AFRAME.registerComponent("markerhandler",{
  init: async function(){
      this.el.addEventListener("markerFound",()=>{
          this.handleMarkerFound()
      })
      this.el.addEventListener("markerLost",()=>{
          this.handleMarkerLost()
      })
  },

  handleMarkerFound:function(){
      var btn = document.getElementById("button-div")
      btn.style.display = "flex"
      var buttonRate = document.getElementById("order-summary-button")
      var buttonOrder = document.getElementById("order-button")

      buttonRate.addEventListener("click",()=>{
          swal({
              icon:"warning", title:"Rate dish", text:"Rate our dish"
          })
      })

      
      buttonOrder.addEventListener("click",()=>{
          swal({
              icon:"tick", title:"Order now!", text:"Order our dish"
          })
      })
      
  },
  handleMarkerLost:function(){
      var btn = document.getElementById("button-div")
      btn.style.display = "none"
  }



  
})