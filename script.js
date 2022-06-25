document.querySelectorAll(`button`).forEach((element, ind, arr) => {
   element.addEventListener("click", function () {
      if (this.dataset.status) {
         return (this.dataset.status = "")
      }
      this.dataset.status = "pending"
   })
})
