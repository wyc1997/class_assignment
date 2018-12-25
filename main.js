var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentSubmissionForm = function (_React$Component) {
    _inherits(StudentSubmissionForm, _React$Component);

    function StudentSubmissionForm(props) {
        _classCallCheck(this, StudentSubmissionForm);

        var _this = _possibleConstructorReturn(this, (StudentSubmissionForm.__proto__ || Object.getPrototypeOf(StudentSubmissionForm)).call(this, props));

        _this.state = { value: "" };
        return _this;
    }

    _createClass(StudentSubmissionForm, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    "number of classes"
                ),
                React.createElement("input", null),
                React.createElement(
                    "div",
                    null,
                    "Teacher:"
                ),
                React.createElement(
                    "select",
                    null,
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
                    null,
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
                    null,
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
                    "button",
                    null,
                    "Submit"
                )
            );
        }
    }]);

    return StudentSubmissionForm;
}(React.Component);

var TimeTable = function (_React$Component2) {
    _inherits(TimeTable, _React$Component2);

    function TimeTable(props) {
        _classCallCheck(this, TimeTable);

        return _possibleConstructorReturn(this, (TimeTable.__proto__ || Object.getPrototypeOf(TimeTable)).call(this, props));
    }

    _createClass(TimeTable, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "table",
                    { style: { border: "1px solid black" } },
                    React.createElement(
                        "tbody",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Date"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "8:30"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "9:30"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "10:30"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "11:30"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "12:30"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "13:30"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "14:30"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "15:30"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "16:30"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "17:30"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "18:30"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "19:30"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TimeTable;
}(React.Component);

ReactDOM.render(React.createElement(TimeTable, null), document.getElementById("root"));