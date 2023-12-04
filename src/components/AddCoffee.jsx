
const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee)

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-4xl font-extrabold">Add a coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form row name and quantity*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label>
                            <div className="label">
                                <span className="label-text text-2xl mb-2">Coffee Name</span>
                            </div>
                            <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-2">
                        <label>
                            <div className="label">
                                <span className="label-text text-2xl mb-2">Available Quantity</span>
                            </div>
                            <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Supplier" name="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-2">
                        <label>
                            <div className="label">
                                <span className="label-text text-2xl mb-2">Taste</span>
                            </div>
                            <input type="text" placeholder="Taste" name="taste" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Category" name="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-2">
                        <label>
                            <div className="label">
                                <span className="label-text text-2xl mb-2">Details</span>
                            </div>
                            <input type="text" placeholder="Details" name="details" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Photo url" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddCoffee;