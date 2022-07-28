import React from 'react'
import Adapter from 'enzyme-adapter-react-18'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App />)
configure({ adapter: new Adapter() })

it('renders correctly', () => {
	expect(app).tpMatchSnapshot()
})
