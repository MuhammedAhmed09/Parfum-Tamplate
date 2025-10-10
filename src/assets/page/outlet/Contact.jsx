import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [helpMessage, setHelpMessage] = useState('');

  return (
    <section className='bg-Light-Pink w-full flex px-6 flex-col items-center justify-end min-h-[80vh] gap-4 md:gap-6'>
      <p className="text-3xl sm:text-4xl md:text-5xl text-center">
        Let's chat.
      </p> 
      <p className='text-sm text-black/80 lg:text-base'>
        Send us a message and we’ll get right back to you,
      </p>
      <form className='flex flex-col gap-4 w-full items-center'>
        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-lg items-center'>
          <input
            type="text" 
            placeholder='Full Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border w-full rounded-lg py-2 px-4 placeholder:text-sm font-semibold lg:placeholder:text-base'
            required
            />
          <input 
            type="email" 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border w-full rounded-lg py-2 px-4 placeholder:text-sm font-semibold lg:placeholder:text-base'
            required
          />
        </div>
        <textarea 
          placeholder='How can we help you?'
          value={helpMessage}
          onChange={(e) => setHelpMessage(e.target.value)}
          className='border min-h-32 self-center w-full sm:w-lg rounded-lg py-2 px-4 placeholder:text-sm font-semibold lg:placeholder:text-base'
          required
        />
        <button type='submit' className='bg-Green py-2 px-7 rounded-full text-sm font-semibold cursor-pointer lg:text-base '>
          SEND MESSAGE
        </button>
      </form>
    </section>
  )
}

export default Contact