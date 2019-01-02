var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentSubmissionForm = function (_React$Component) {
    _inherits(StudentSubmissionForm, _React$Component);

    function StudentSubmissionForm(props) {
        _classCallCheck(this, StudentSubmissionForm);

        var _this = _possibleConstructorReturn(this, (StudentSubmissionForm.__proto__ || Object.getPrototypeOf(StudentSubmissionForm)).call(this, props));

        var arr = [];
        for (var i = 0; i < 13; i++) {
            arr.push(new Array(7).fill(0));
        }
        _this.state = { value: "", tableData: arr, isMouseDown: false, numClass: "", teacher: "Teacher 1", subject: "Reading", location: "location 1" };
        _this.changeHandler = _this.changeHandler.bind(_this);
        _this.tableToggle = _this.tableToggle.bind(_this);
        _this.mouseDown = _this.mouseDown.bind(_this);
        _this.mouseOver = _this.mouseOver.bind(_this);
        _this.mouseUp = _this.mouseUp.bind(_this);
        return _this;
    }

    _createClass(StudentSubmissionForm, [{
        key: "mouseDown",
        value: function mouseDown(row, col) {
            this.setState({ isMouseDown: true });
            this.tableToggle(row, col);
        }
    }, {
        key: "mouseOver",
        value: function mouseOver(row, col) {
            if (this.state.isMouseDown) {
                this.tableToggle(row, col);
            }
        }
    }, {
        key: "mouseUp",
        value: function mouseUp() {
            this.setState({ isMouseDown: false });
        }
    }, {
        key: "tableToggle",
        value: function tableToggle(row, col) {
            if (row < 0 || col < 0) {
                return;
            }
            var listCopy = this.state.tableData;
            if (listCopy[row][col] == 0) {
                listCopy[row][col] = 1;
            } else {
                listCopy[row][col] = 0;
            }
            this.setState({ tableData: listCopy });
        }
    }, {
        key: "changeHandler",
        value: function changeHandler(event) {
            var _this2 = this;

            this.setState(_defineProperty({}, event.target.name, event.target.value), function () {
                return console.log(_this2.state);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var pickedTime = [];
            pickedTime.push({ day: "None", time: "" });
            for (var i = 0; i < 13; i++) {
                for (var j = 0; j < 7; j++) {
                    var _day;
                    switch (j) {
                        case 0:
                            _day = "MON";
                            break;
                        case 1:
                            _day = "TUE";
                            break;
                        case 2:
                            _day = "WED";
                            break;
                        case 3:
                            _day = "THU";
                            break;
                        case 4:
                            _day = "FRI";
                            break;
                        case 5:
                            _day = "SAT";
                            break;
                        case 6:
                            _day = "SUN";
                            break;
                    }
                    if (this.state.tableData[i][j]) {
                        pickedTime.push({ day: _day, time: (i + 8).toString() + ":30" });
                    }
                }
            }
            console.log(pickedTime);
            var preferredTimeSelect = [];
            for (var i = 0; i < this.state.numClass; i++) {
                preferredTimeSelect.push(React.createElement(
                    "select",
                    { name: "preferredTime" + i, key: i, onChange: function onChange() {
                            return _this3.changeHandler(event);
                        } },
                    pickedTime.map(function (item, index) {
                        return React.createElement(
                            "option",
                            { key: index },
                            item.day,
                            " ",
                            item.time
                        );
                    })
                ));
            }
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    "number of classes"
                ),
                React.createElement("input", { name: "numClass", value: this.state.numClass, onChange: function onChange() {
                        return _this3.changeHandler(event);
                    } }),
                React.createElement(
                    "div",
                    null,
                    "Teacher:"
                ),
                React.createElement(
                    "select",
                    { name: "teacher", value: this.state.teacher, onChange: function onChange() {
                            return _this3.changeHandler(event);
                        } },
                    React.createElement(
                        "option",
                        null,
                        "Teacher 1"
                    ),
                    React.createElement(
                        "option",
                        null,
                        "Teacher 2"
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    "Subject:"
                ),
                React.createElement(
                    "select",
                    { nmae: "subject", value: this.state.subject, onChange: function onChange() {
                            return _this3.changeHandler(event);
                        } },
                    React.createElement(
                        "option",
                        null,
                        "Reading"
                    ),
                    React.createElement(
                        "option",
                        null,
                        "Grammar"
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    "Location"
                ),
                React.createElement(
                    "select",
                    { name: "location", value: this.state.location, onChange: function onChange() {
                            return _this3.changeHandler(event);
                        } },
                    React.createElement(
                        "option",
                        null,
                        "location 1"
                    ),
                    React.createElement(
                        "option",
                        null,
                        "location 2"
                    )
                ),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    null,
                    "Click and drag to toggle available time slot for classes"
                ),
                React.createElement(TimeTable, { data: this.state.tableData, mouseDown: this.mouseDown, mouseOver: this.mouseOver, mouseUp: this.mouseUp }),
                React.createElement(
                    "div",
                    null,
                    "pick your preferred time:"
                ),
                preferredTimeSelect,
                React.createElement(
                    "button",
                    null,
                    "Submit"
                )
            );
        }
    }]);

    return StudentSubmissionForm;
}(React.Component);

function Cell(props) {
    var style;
    var check;
    if (props.cellData == 1) {
        style = {
            width: 50,
            height: 30,
            border: "1px solid black",
            backgroundColor: "green"
        };
    } else {
        style = {
            width: 50,
            height: 30,
            border: "1px solid black",
            backgroundColor: "white"
        };
    }

    return React.createElement(
        "div",
        { style: style, key: props.col, onMouseDown: function onMouseDown() {
                return props.mouseDown(props.row, props.col);
            }, onMouseOver: function onMouseOver() {
                return props.mouseOver(props.row, props.col);
            }, onMouseUp: function onMouseUp() {
                return props.mouseUp();
            } },
        props.content
    );
}

function Row(props) {
    var list = [];
    list.push(React.createElement(Cell, { key: -1, row: props.row, col: -1, content: props.time, mouseDown: props.mouseDown, mouseOver: props.mouseOver, mouseUp: props.mouseUp }));
    for (var i = 0; i < 7; i++) {
        list.push(React.createElement(Cell, { key: i, row: props.row, col: i, cellData: props.rowData[i], content: props.content[i], mouseDown: props.mouseDown, mouseOver: props.mouseOver, mouseUp: props.mouseUp }));
    }
    return React.createElement(
        "div",
        { style: { display: "flex" } },
        list
    );
}

function TimeTable(props) {
    var list = [];
    for (var i = 0; i < 13; i++) {
        var timeSlot = (i + 8).toString() + ":30";
        list.push(React.createElement(Row, { key: i, row: i, time: timeSlot, rowData: props.data[i], content: [], mouseDown: props.mouseDown, mouseOver: props.mouseOver, mouseUp: props.mouseUp }));
    }
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { style: { display: "flex" } },
            React.createElement(Row, { row: -1, rowData: [], time: "Time", content: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], mouseDown: props.mouseDown, mouseOver: props.mouseOver, mouseUp: props.mouseUp })
        ),
        list
    );
}

ReactDOM.render(React.createElement(StudentSubmissionForm, null), document.getElementById("root"));