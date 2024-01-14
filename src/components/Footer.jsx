import { Link } from 'react-router-dom';
import footerLogo from '../assets/images/more/logo1.png';

const Footer = () => {

    const handleMessage = (e) =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        console.log(name, email, message);

        const userMessage = {
            name,
            email,
            message
        }
        fetch('http://localhost:5000/userMessage',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
              },
              body:JSON.stringify(userMessage)
        })
        .then(res => res.json())
        .then(data => {
           console.log(data)
        })

    }
    return (
        <div className="w-full">
            <footer className="footer mx-auto bg-base-200 text-base-content">
                {/* Company Details Section */}
                <div className="p-20">
                    <nav>
                        <div className='w-[36px] h-[36px] mb-4'>
                            <img className='w-full' src={footerLogo} alt="" />
                        </div>
                        <header className="footer-title">Espresso Emporium</header>
                        <p className="link link-hover">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>

                    </nav>
                    {/* Social Link */}
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </nav>
                    {/* Company Details */}
                    <nav>
                        <header className="footer-title">Get in Touch</header>
                        <div className='space-x-4'>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <Link to="/userMessage"><a className="link link-hover">Press kit</a></Link>
                        </div>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>

                </div>
                {/* Form Section */}
                <div className="p-20">
                    <form onSubmit={handleMessage}>
                        <header className="footer-title">Connect with Us</header>
                        <fieldset className="form-control w-80">
                            
                            <div className="flex flex-col">
                                <input type="text" name='name' placeholder="Name" className="input input-bordered join-item" />
                                
                                <input type="email" name='email' placeholder="username@site.com" className="input input-bordered join-item" />
                                
                                <input type="text" name='message' placeholder="send us your comment..." className="input input-bordered h-20 mt-6" />
                                <button className="btn btn-primary join-item" type='submit'>Send...</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default Footer;