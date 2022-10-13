// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem
  //   const {appId, appName, imageUrl, category} = appItem

  return (
    <li className="card">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
