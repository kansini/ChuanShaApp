import personList from './PersonList'
import eventList from './EventList'
const components = {
    personList,
    eventList

}

const install = (Vue, opts = {}) => {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key])
    })
}

export default install
