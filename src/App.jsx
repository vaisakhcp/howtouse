import './App.css'

function App() {

  return (
    <>
      <div>
        <div className="help-article">
          <div className="frame-parent">
            <div className="using-the-mondaycom-app-parent">
              <b className="using-the-mondaycom">Using the Monday.com app</b>
              <div className="say-goodbye-to-container">
                <p className="body-container">
                  Say goodbye to tedious manual task transfers with our app
                  integration with Monday.com.
                </p>
                <p className="body-container">
                  To use this app, you must authorize Canva to access your
                  Monday.com workspace. Ensure that you have the Canva app installed
                  in your workspace by your workspace admin. Once installed, or if
                  it's already installed, proceed to the steps below.
                </p>
              </div>
            </div>
            <div className="how-to-access-tasks-from-monda-parent">
              <b className="how-to-access">How to access tasks from Monday.com</b>
              <div className="select-your-workspace-container">
                <ol className="select-your-workspace-numbered">
                  <li className="select-your-workspace">Select your workspace.</li>
                  <li className="select-your-workspace">
                    In the workspace, you can find all the boards and folders with tasks.
                    You can only sort by board, not by folder.
                  </li>
                  <li className="select-your-workspace">
                    Select a board to see item groups and sub-items. You can:
                  </li>
                  <ul className="select-your-workspace-non-numbered">
                    <li>Search for an item from the board.</li>
                    <li>
                      See the primary data fields for each item (prioritized based on
                      their column position).
                    </li>
                  </ul>
                  <li className="select-your-workspace">Select an item card to see more details, including all item columns.</li>
                  <li className="select-your-workspace">
                    On the search bar, select the % filter to filter items assigned to you or anyone.
                  </li>
                  <li className="select-your-workspace">
                    In the item detail view, you can see:
                  </li>
                  <ul className="select-your-workspace-non-numbered">
                    <li>Assigner name and creation time</li>
                    <li>Item title</li>
                    <li>First text column (if available)</li>
                    <li>Comments from updates</li>
                    <li>First Dropdown column (if available)</li>
                    <li>Date column (if available)</li>
                  </ul>
                  <li className="select-your-workspace">Select See all columns to view columns in your item. You can currently only change any dropdown column from the Monday.com app in Canva.</li>
                </ol>
              </div>

            </div>
            <div className="how-to-access-tasks-from-monda-parent">
              <b className="im-having-trouble">
                I'm having trouble with Monday.com
              </b>
              <p className="body-container">
                If you need help with the Monday.com app, please provide a
                screenshot of the issue and reach out to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
