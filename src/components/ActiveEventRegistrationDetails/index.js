// Write your code here
import {Component} from 'react'

const registrationStatusDetails = {
  initial: 'INITIAL',
  YetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  constructor(props) {
    super(props)
    const {status} = this.props
    console.log(status)
    this.state = {
      registrationStatus: status,
    }
  }

  yetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button>Register Here</button>
    </div>
  )

  registered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  registrationsClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
    </div>
  )

  render() {
    const {registrationStatus} = this.state

    switch (registrationStatus) {
      case registrationStatusDetails.YetToRegister:
        return this.yetToRegister()
      case registrationStatusDetails.registered:
        return this.registered()
      case registrationStatusDetails.registrationsClosed:
        return this.registrationsClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
