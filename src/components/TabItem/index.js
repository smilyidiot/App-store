// Write your code here
import './index.css'

const TabItem = props => {
  const {isActive, tabItem, displayApp} = props
  const {tabId, displayText} = tabItem

  const returnTabId = () => {
    displayApp(tabId)
  }

  const activeTab = isActive ? 'activate' : ''

  return (
    <li className="tab-container">
      <button
        className={`tabs ${activeTab}`}
        onClick={returnTabId}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
