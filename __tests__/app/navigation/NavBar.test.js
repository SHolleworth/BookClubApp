import NavBar from '../../../src/app/NavBar'
import TestRenderer from 'react-test-renderer'

const testRenderer = TestRenderer.create(<NavBar />)
const testInstance = testRenderer.root

describe('NavBar touchable', () => {
    test('Home returns correct action payload', () => {
        const homeTab = testInstance.findByProps({ tab: 'Home' })
        expect()
    })
})
