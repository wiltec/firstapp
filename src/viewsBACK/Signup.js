import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';

function Signup(){

    return (
        <>
            <Navbar />
            <Header />

            <main className="container">
                <section className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <form>
                            <Input name="first_name"
                            label="First Name"
                            type="text"
                            placeholder="First Name"
                            value={''}
                            onChange
                            required
                            />

                            <Input name="last_name"
                            label="Last Name"
                            type="text"
                            placeholder="Last Name"
                            value={''}
                            onChange
                            required
                            />

                            <Input name="email"
                            label="Email"
                            type="text"
                            placeholder="Email"
                            value={''}
                            onChange
                            required
                            />

                            <Input name="password"
                            label="password"
                            type="password"
                            placeholder="password"
                            value={''}
                            onChange
                            required
                            />

                            <Input name="confirm_password"
                            label="confirm password"
                            type="password"
                            placeholder="Confirm_password"
                            value={''}
                            onChange
                            required
                            />

                            <button type="submit" className="btn btn-primary">Send</button>
                            
                        </form>

                    </div>

                </section>
            </main>
        </>
    )
}

export default Signup;