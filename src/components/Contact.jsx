import React from 'react'

const Contact = () => {
  return (

        <div className="contact">
            {/* <h1>Contact Us</h1> */}
            <main>

            <form action="">
            <h1>Contact Us</h1>
                <div>
                    <label For="name">Name</label>
                    <input type="text" name='name' required placeholder='Enter Your Name Plz👍' />
                    </div>
                <div>
                    <label For="email">Email</label>
                    <input type="email" name='email' required placeholder='xyz@gmail.com' />
                    </div>
                <div>
                    <label For="msg">Message</label>
                    <input type="text" name='msg' required placeholder='Tell Us About Your Query...' />
                    </div>

                    <button type='submit'>Send</button>
            </form>
            </main>

        </div>

  )
}

export default Contact