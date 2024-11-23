import { useState } from 'react'
import axios from 'axios'

const Quote = () => {
  const [quoteText, setQuoteText] = useState("press 'generate' for a quote")
  const [authorText, setAuthorText] = useState('')

  const CopyToClip = () => {
    const textElement = document.getElementById('quote')
    if (!textElement) return // TODO: Create Error Alert

    const range = document.createRange()
    const selection = window.getSelection()
    range.selectNodeContents(textElement)
    selection?.removeAllRanges()
    selection?.addRange(range)

    navigator.clipboard
      .writeText(selection?.toString() || '')
      .then(() => console.log('TEXT COPIED')) //TODO: Create Copied Notification
      .catch((err) => console.error('failed to copy text: ' + err)) //TODO: Create Error Alert
  }

  const FetchQuote = () => {
    axios
      .get('https://api.quotable.io/random')
      .then((res) => {
        setQuoteText(`${res.data.content}`)
        setAuthorText(`— ${res.data.author}`)
      })
      .catch((error) => console.error('Error fetching quote:', error))
  }

  return (
    <div className='items-center w-[474px] space-y-4'>
      {/* Quote */}
      <p id='quote' className='font-inter text-[15px] select-text'>
        {quoteText}
        <br />
        <i>{authorText}</i>
      </p>

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
