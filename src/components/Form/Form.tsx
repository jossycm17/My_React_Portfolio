  // import { Container, ContainerSucces } from './styles'
  // import { useForm, ValidationError } from '@formspree/react'
  // import { toast, ToastContainer } from 'react-toastify'
  // import ReCAPTCHA from 'react-google-recaptcha'
  // import { useEffect, useState } from 'react'
  // import validator from 'validator'

  // export function Form() {
  //   const [state, handleSubmit] = useForm('xknkpqry')
  //   const [validEmail, setValidEmail] = useState(false)
  //   const [isHuman, setIsHuman] = useState(false)
  //   const [message, setMessage] = useState('')
  //   function verifyEmail(email: string) {
  //     if (validator.isEmail(email)) {
  //       setValidEmail(true)
  //     } else {
  //       setValidEmail(false)
  //     }
  //   }
  //   useEffect(() => {
  //     if (state.succeeded) {
  //       toast.success('Email successfully sent!', {
  //         position: toast.POSITION.BOTTOM_LEFT,
  //         pauseOnFocusLoss: false,
  //         closeOnClick: true,
  //         hideProgressBar: false,
  //         toastId: 'succeeded',
  //       })
  //     }
  //   })
  //   if (state.succeeded) {
  //     return (
  //       <ContainerSucces>
  //         <h3>Thanks for getting in touch!</h3>
  //         <button
  //           onClick={() => {
  //             window.scrollTo({ top: 0, behavior: 'smooth' })
  //           }}
  //         >
  //           Back to the top
  //         </button>
  //         <ToastContainer />
  //       </ContainerSucces>
  //     )
  //   }
  //   return (
  //     <Container>
  //       <h2>Get in touch</h2>
  //       <form onSubmit={handleSubmit}>
  //         <input
  //           placeholder="Email"
  //           id="email"
  //           type="email"
  //           name="email"
  //           onChange={(e) => {
  //             verifyEmail(e.target.value)
  //           }}
  //           required
  //         />
  //         <ValidationError prefix="Email" field="email" errors={state.errors} />
  //         <textarea
  //           required
  //           placeholder="Send a message to get started."
  //           id="message"
  //           name="message"
  //           onChange={(e) => {
  //             setMessage(e.target.value)
  //           }}
  //         />
  //         <ValidationError
  //           prefix="Message"
  //           field="message"
  //           errors={state.errors}
  //         />
  //         <ReCAPTCHA
  //           sitekey="6LfK0FUrAAAAACosNgNoLHoS-qq0Mg5QGpsIV_3s"
  //           onChange={(e) => {
  //             setIsHuman(true)
  //           }}
  //         ></ReCAPTCHA>
  //         <button
  //           type="submit"
  //           disabled={state.submitting || !validEmail || !message || !isHuman}
  //         >
  //           Submit
  //         </button>
  //       </form>
  //       <ToastContainer />
  //     </Container>
  //   )
  // }
import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import validator from 'validator'

const SITE_KEY = '6Lc0yVcrAAAAAG7Xw0yVwa2P8VxIs_7qB3owZRUp' // <-- Replace with your actual v3 site key

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry')
  const [validEmail, setValidEmail] = useState(false)
  const [isHuman, setIsHuman] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email))
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`
    script.async = true
    document.body.appendChild(script)
  }, [])

  // async function handleCaptcha() {
  //   if ((window as any).grecaptcha) {
  //     const token = await (window as any).grecaptcha.execute(SITE_KEY, {
  //       action: 'submit',
  //     }
  //   )
  //     if (token) {
  //       setIsHuman(true)
  //     }
  //   }
  // }

  async function handleCaptcha() {
  try {
    if ((window as any).grecaptcha) {
      const token = await (window as any).grecaptcha.execute(SITE_KEY, {
        action: 'submit',
      })
      if (token) {
        setIsHuman(true)
      } else {
        throw new Error('No reCAPTCHA token returned')
      }
    } else {
      throw new Error('reCAPTCHA not loaded')
    }
  } catch (error) {
    console.error('reCAPTCHA failed:', error)
    toast.error('reCAPTCHA failed. Please try again.', {
      position: toast.POSITION.BOTTOM_LEFT,
    })
    setIsHuman(false)
  }
}

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await handleCaptcha()
    if (validEmail && message && isHuman) {
      handleSubmit(e)
    } else {
      toast.error('Please verify the form details and reCAPTCHA.', {
        position: toast.POSITION.BOTTOM_LEFT,
      })
    }
  }


  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  }, [state.succeeded])

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch</h2>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            verifyEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message.trim()}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
