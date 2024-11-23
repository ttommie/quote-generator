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
    axios
      .get('https://api.quotable.io/random')
      .then((res) => {
        setQuoteText(`${res.data.content}`)
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
    <div className='items-center w-[474px] space-y-4'>
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
      <div className='flex justify-between'>
        <button
          className='border-2 rounded-lg w-[230px] h-11 border-border hover:bg-buttonColor/20'
          onClick={FetchQuote}
        >
          generate
        </button>
        <button
          className='border-2 rounded-lg w-[230px] h-11 border-borderAccent hover:bg-buttonAccentColor/20'
          onClick={CopyToClip}
        >
          copy
        </button>
      </div>
    </div>
  )
}

export default Quote
