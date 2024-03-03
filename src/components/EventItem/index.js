// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvent, eventClicked} = props
  const {imageUrl, name, location, registrationStatus} = eachEvent
  //   console.log(name)

  const oneventClicked = () => {
    eventClicked(registrationStatus)
  }

  return (
    <li>
      <button type="button" onClick={oneventClicked}>
        <img src={imageUrl} alt="event" className="eventImage" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
