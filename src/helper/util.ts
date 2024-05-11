

export function myDebounce<T>(fn: ()=>Promise<T>,delay:number){
    let timer:any

    return function(){
        clearTimeout(timer)
        timer=setTimeout(()=>fn(),delay)
    }
}


export function openModal(element:string,postId:number) {

    return new Promise<number>((resolve) => {
        // Open the Bootstrap modal using its API
    var modal = document.getElementById(element) as HTMLElement
 
    if (modal) {
     
      setTimeout(function () {
        modal.classList.add('fade', 'show')
        modal.style.display = 'block'
        modal.classList.add('in')
      }, 500)

      // Add class to the body for the modal backdrop
      document.body.classList.add('modal-open')

      var modalBackdrop = document.createElement('div')
      modalBackdrop.className = 'modal-backdrop fade show'
      document.body.appendChild(modalBackdrop)
    }
    resolve(postId)
    })
    

}


export function closeModal(element: string) {
    // Close the Bootstrap modal
    var modal = document.getElementById(element) as HTMLElement
    var modalBackdrop = document.querySelector('.modal-backdrop')
  
    if (modal) {
      // Remove added classes
      modal.classList.remove('in', 'show', 'fade')
      modal.style.display = ''
  
      document.body.classList.remove('modal-open')
  
      // Remove the modal backdrop element
      if (modalBackdrop) {
        document.body.removeChild(modalBackdrop)
      }
    }
  }