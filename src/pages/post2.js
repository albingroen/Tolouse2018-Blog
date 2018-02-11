import React from 'react'
import './post2.css'

export default class Post2 extends React.Component {
  render() {
    // variables

    const paragraphStyle = {
      marginTop: '40px',
      lineHeight: '25px',
      fontFamily: 'PT Serif',
      marginBottom: '100px',
    }

    const title = 'Travel-day'
    const text = {
      paragraph1:
        'We started the day in Västeårs at the central station. We took the bus to Arlanda for about 1 and 1/2 hour. After arriving to Arlanda we checked our luggage in and headed to the gate. We played some cards and grabbed some snacks before it was time to board the plane. We now headed of to Munchen for a 1.5 hour layover. We where met with the longest line ever to the passport-control directly after stepping out the plane. When finsihed with the passport-control we eaded towards the next gate, grabbed som German food and stepped on the next plane to Toulouse.',
      paragraph2:
        'The plane to Toulouse was a smaller one ( not Airbus like the first one ) with 2 seats on each side. At the plane to Toulouse we recieved some dry baguettes with marmelade and cheese, but soon enough a safe landing in Toulouse. We were met with a gray sky and rain unfortunatly. We went to collect our luggage and continued to the trem-station. Getting tickets for everybody was quite a challange since the machines apparantly spoke french, according to the teachers. After a while we finally stepped on the train and made our way the correct station were we changed lane.',
      paragraph3:
        'About 20 minutes later we finally arrived to the proper school and met up with a couple of other teams in the project. We made our way along this gigantic school-complex to the part were we enjoyed French dinner together with the other members of the project. Gathering and socializing was a tiny bit awkward at first obviously, but after a while we could have somewhat of a natural conversation with the other students involved. Now I am sitting on my room with some random French student ( not involved in the ICAROS project ) across the room watching french comics... not weird at all. Oh, and he does not know English so we are communicating via Google Translate every know and then.  Remember to scroll down the page to look at some images I managed to snap along the day. ',
    }
    return (
      <div className="contentWrapper">
        <h1>{title}</h1>
        <p style={paragraphStyle}>
          {text.paragraph1}
          <br />
          <br />
          {text.paragraph2}
          <br />
          <br />
          {text.paragraph3}
        </p>
        <div className="image image1" />
        <div className="image image2" />
        <div className="image image3" />
        <div className="image image4" />
        <div className="image image5" />
        <div className="image image6" />
      </div>
    )
  }
}
