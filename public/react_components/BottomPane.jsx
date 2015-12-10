var React     = require('react');
var ReactDOM  = require('react-dom');

//function getEvent(callback) {
function getEvent() {
        var jsonData = {};
        $.ajax({
            type: 'GET',
            url: '/scot/api/v2/entry',
            dataType: 'json',
            async: false,
            success: function(data, status) {
            jsonData = data;
            console.log(jsonData);
        },
        error: function(err) {
            console.error(err.toString());
        }
        });
        return jsonData.records;
    /*var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callback(xhttp.responseText);        
        }
    };
    xhttp.open("GET", "/scot/api/v2/entry", true);
    xhttp.send();*/
};

var TableHeader = React.createClass({
    render: function() {
        return (
            <div className="" style={{}}>
                <div className="" style={{}}>{this.props.item.id}</div>
            </div>
        );
    }
});

var TableData = React.createClass({
    render: function() {
        return (
            <div className="row-fluid entry-outer todo_undefined_outer" style={{marginLeft: 'auto', marginRight: 'auto',width:'99.3%'}}>
                <div className="row-fluid entry-header todo_undefined">{this.props.item.id} {this.props.item.when} by {this.props.item.owner}</div>
                <div className="entry-body">{this.props.item.body_plain}</div>
            </div>
        );
    }
});

var Table = React.createClass({
    render: function() {
        var events = [];
        var rows = [];
        //myfunc = function(this.props.data) {    
        //    events.push(<TableHeader item = {data} />)
        //};
        this.props.data.forEach(function(data) { 
            rows.push(<TableData item = {data} />)
        });
        return (
            <div>
                <div width="100%" className="alerts events incidents tasks" style={{height: '800px', overflow: 'auto', display: 'block'}}>
                    <div>{header}</div>
                    <div>{rows}</div>
                </div>
            </div>
        );
    }
});

var displaydata = getEvent();
console.log(displaydata);
for (i = 0; i < displaydata.length; i++) {
    console.log("object each item of object: " + displaydata[i].id)
}
console.log("for loop ended");


ReactDOM.render(<Table data={displaydata}/>, document.getElementById('NewBottomDataPane'));
 
