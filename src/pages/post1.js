import React from 'react'

export default class Post1 extends React.Component {
  render() {
    // variables

    const paragraphStyle = {
      marginTop: '40px',
      lineHeight: '25px',
      fontFamily: 'PT Serif',
      marginBottom: '100px',
    }

    const title = 'Tomorrow is the day.'
    const text = {
      paragraph1:
        'For the last one and a half year, the school I am attending has been working together with several other countries around Europe with a EU-project called ICAROS. ICAROS challanged us to build 6 drones in each of the attending countries to. So, we splitted our class into 6 groups and started planning the building of the drone. The teachers soon enough had what they need to order the needed parts.\n\n I should probably mention that our class were the only class in Sweden getting the chance to attend this EU-project',
      paragraph2:
        'At this point in time we were starting year 2 in high school. Nobody except one teacher had somewhat of understanding about building drones. The group consisted of about 30 students and 4 teachers. That single teacher that had some knowledge was probably the only reason we managed to create these V1.0 drones in year 2 of high school. It went decent with a hand full of not so good crashes throughout the year.',
      paragraph3:
        'The second step in this project, was for each country to choose a part on the drone we built in year one to take on and build from scratch. Each countries students built a set of 6 parts of their choise. My class chose the elctronics of the drone. Building and programming the electronics of the drone was basically something new for everybody. We met a bunch of problems throughout the way but ended up with that set of 6 electronics setups needed.',
      paragraph4:
        'So, tomorrow is the day. I myself together with 3 other students in my class in Sweden have been chosen to fly down to Toulouse, France to tie the project togeter by building a set of 6 drones, using every countries set of 6 parts they have built from scratch. We are traveling by plane and living on the school were the building and other activities are going to take place. We are going to visit the city of Tolouse, head to town and have a flying competition between all countries with smaller consumer drowns. Everyone, including me is pretty excited about this upcoming week that we are going to be spending Tolouse.',
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
          <br />
          <br />
          {text.paragraph4}
        </p>
      </div>
    )
  }
}
