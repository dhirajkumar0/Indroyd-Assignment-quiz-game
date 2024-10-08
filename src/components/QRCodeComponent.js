import React from 'react'
import QRCode from 'qrcode.react'

const QRCodeComponent = ({setGameStarted}) => {
  const url = window.location.href // Generates QR code with the current URL

  return (
    <div>
      <h1>Scan to Join</h1>
      <QRCode value={url} size={256} />
      <button onClick={() => setGameStarted(true)}>Start Game</button>
    </div>
  )
}

export default QRCodeComponent
