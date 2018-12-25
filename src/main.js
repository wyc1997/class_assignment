class StudentSubmissionForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={value:""}
    }
    render()
    {
        return (<div>
            <div>number of classes</div>
            <input/>
            <div>Teacher:</div>
            <select>
                <option>Teacher 1</option>
                <option>Teacher 2</option>
            </select>
            <div>Subject:</div>
            <select>
                <option>Reading</option>
                <option>Grammar</option>
            </select>
            <div>Location</div>
            <select>
                <option>location 1</option>
                <option>location 2</option>
            </select>
            <br/>
            <button>Submit</button>
            </div>)
    }
}

class TimeTable extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return (<div>
            <table style={{border:"1px solid black"}}><tbody>
                <tr>
                    <td>Date</td>
                    <td>8:30</td>
                    <td>9:30</td>
                    <td>10:30</td>
                    <td>11:30</td>
                    <td>12:30</td>
                    <td>13:30</td>
                    <td>14:30</td>
                    <td>15:30</td>
                    <td>16:30</td>
                    <td>17:30</td>
                    <td>18:30</td>
                    <td>19:30</td>
                </tr>
            </tbody></table>
        </div>)
    }
}

ReactDOM.render(
    <TimeTable/>,
    document.getElementById("root")
)