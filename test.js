class Clock extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        let time = new Date().toLocaleString(this.props.locale, { timeZone: this.props.timeZone });
        return  <section>
                    <h1>{this.props.timeZone}</h1>
                    <div>It is {time}</div>
                </section >;
    };

}

function tick() {
    ReactDOM.render(
        <section>
            <h1>세계시간</h1>
            <hr />
            <Clock locale="ko-KR" timeZone="Asia/Seoul" />
            <hr />
            <Clock locale="en-US" timeZone="America/Toronto" />
            <hr />
        </section>
        , document.querySelector("#root"));
}

setInterval(tick, 1000);