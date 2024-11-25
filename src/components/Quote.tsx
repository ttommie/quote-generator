import { useState } from 'react'
import axios from 'axios'

const Quote = () => {
  const [quoteText, setQuoteText] = useState("press 'generate' for a quote")
  const [authorText, setAuthorText] = useState('')
  const [errMessage, setErrText] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  const CopyToClip = () => {
    const textElement = document.getElementById('quote')
    if (!textElement) return

    const range = document.createRange()
    const selection = window.getSelection()
    range.selectNodeContents(textElement)
    selection?.removeAllRanges()
    selection?.addRange(range)

    navigator.clipboard
      .writeText(selection?.toString() || '')
      .then(() => setIsCopied(true))
      .catch((err) =>  {
        console.error(err)
        setErrText('Failed to copy quote')
      })

    setTimeout(() => {
      setIsCopied(false)
      selection?.removeAllRanges()
    }, 1800);
  }

  const FetchQuote = () => {
    axios.get('https://quoteslate.vercel.app/api/quotes/random')
      .then((res) => {
        setQuoteText(`${res.data.quote}`)
        setAuthorText(`— ${res.data.author}`)
        setErrText('')
      })
      .catch((err) => {
        const errData = err.response
          ? `Error: ${err.response.status} ${err.response.statusText}`
          : 'Failed to fetch quote'
        setErrText(errData)
      })
  }

  return (
    <div className='w-[300px] items-center space-y-4 sm:w-[474px]'>
      {/* Quote */}
      {errMessage ? (
        <p className='text-red-600'>{errMessage}</p>
      ) : (
        <p id='quote' className='font-inter text-[15px] select-text'>
          {quoteText}
          <br />
          <i>
            <b>{authorText}</b>
          </i>
        </p>
      )}

      {/* Copied Notification */}
      {isCopied ? <p className='font-inter text-[11px] uppercase text-textColor/80'>Copied Quote</p> : ''}

      {/* Buttons */}
      <div className='flex-col items-center space-y-3 flex justify-between sm:flex-row sm:space-y-0'>
        <button
          className='w-[300px] border-2 rounded-lg h-11 border-border hover:bg-buttonColor/20 sm:w-[230px]'
          onClick={FetchQuote}
        >
          generate
        </button>
        <button
          className='w-[300px] border-2 rounded-lg h-11 border-borderAccent hover:bg-buttonAccentColor/20 sm:w-[230px]'
          onClick={CopyToClip}
        >
          copy
        </button>
      </div>
    </div>
  )
}

export default Quote
