class StudentSubmissionForm extends React.Component
{
    constructor(props)
    {
        super(props)
        var arr=[]
        for (var i = 0; i < 13; i++)
        {
            arr.push(new Array(7).fill(0))
        }
        this.state={value:"", tableData:arr}
        
        this.tableToggle=this.tableToggle.bind(this)
    }

    tableToggle(row, col)
    {
        if (row < 0 || col < 0)
        {
            return
        }
        var listCopy = this.state.tableData
        if (listCopy[row][col]==0)
        {
            listCopy[row][col]=1
        }
        else
        {
            listCopy[row][col]=0
        }
        this.setState({tableData:listCopy}, ()=>console.log("hello"))
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
            <TimeTable data={this.state.tableData} tableToggle={this.tableToggle}/>
            <button>Submit</button>
            </div>)
    }
}

function Cell(props)
{
    var style
    if (props.cellData==1)
    {
        style = {
            width:50,
            height:80,
            border:"1px solid black",
            backgroundColor:"green"
        }
    }
    else
    {
        style = {
            width:50,
            height:80,
            border:"1px solid black",
            backgroundColor:"white"
        }
    }
    
    return <div style={style} key={props.col} onClick={() => props.tableToggle(props.row,props.col)}>{props.content}</div>
}

function Row(props)
{
    var list = []
    list.push(<Cell key={-1} row={props.row} col={-1} content={props.time} tableToggle={props.tableToggle}/>)
    for (var i = 0; i < 7; i++)
    {   
        list.push(<Cell key={i} row={props.row} col ={i} cellData={props.rowData[i]} content={props.content[i]} tableToggle={props.tableToggle}/>)
    }
    return <div style={{display:"flex"}} >{list}</div>
}

function TimeTable(props)
{
    var list = []
    for (var i = 0; i < 13; i++)
    {   
        var timeSlot = (i + 8).toString() + ":30"
        list.push(<Row key = {i} row={i} time={timeSlot} rowData={props.data[i]} content={[]} tableToggle={props.tableToggle}/>)
    }
    return (<div>
        <div style={{display:"flex"}}><Row row={-1} rowData={[]} time={"Time"} content={["MON","TUE","WED","THU","FRI","SAT","SUN"]} tableToggle={props.tableToggle}/></div>
        {list}
    </div>)
}


ReactDOM.render(
    <StudentSubmissionForm/>,
    document.getElementById("root")
)