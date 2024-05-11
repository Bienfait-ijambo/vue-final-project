import Swal from "sweetalert2/dist/sweetalert2.js";


export function confirmDelation(){
    return new Promise((resolve, reject) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "do you want to delete this ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              resolve(result.isConfirmed)
            }
            reject()
          });
    } )
}
