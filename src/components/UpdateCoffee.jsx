import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    
    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(updateCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            // jdi data mongodb te jai taile 
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        .catch((error) => {
            console.error('Error updating coffee:', error);
            Swal.fire({
              title: 'Error!',
              text: 'Something went wrong. Please try again later.',
              icon: 'error',
              confirmButtonText: 'OK',
            });
          });

    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-4xl font-extrabold">Update coffee:{name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row name and quantity*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label>
                            <div className="label">
                                <span className="label-text text-2xl mb-2">Coffee Name</span>
                            </div>
                            <input type="text" placeholder="Coffee Name" name="name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-2">
                        <label>
                            <div className="label">
                                <span className="label-text text-2xl mb-2">Available Quantity</span>
                            </div>
                            <input type="text" placeholder="Available Quantity" name="quantity" defaultValue={quantity} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row supplier and taste */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label>
                            <div className="label">
                                <span className="label-text text-2xl mb-2">Supplier</span>
                            </div>
                            <input type="text" placeholder="Supplier" name="supplier" defaultValue={supplier} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-2">
                        <label>
                            <div className="label">
                                <span className="label-text text-2xl mb-2">Taste</span>
                            </div>
                            <input type="text" placeholder="Taste" name="taste" defaultValue={taste} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row category and details */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label>
                            <div className="label">
                                <span className="label-text text-2xl mb-2">Category</span>
                            </div>
                            <input type="text" placeholder="Category" name="category" defaultValue={category} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-2">
                        <label>
                            <div className="label">
                                <span className="label-text text-2xl mb-2">Details</span>
                            </div>
                            <input type="text" placeholder="Details" name="details" defaultValue={details} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row photo url */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label>
                            <div className="label">
                                <span className="label-text text-2xl mb-2">Photo URL</span>
                            </div>
                            <input type="text" placeholder="Photo url" name="photo" defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateCoffee;