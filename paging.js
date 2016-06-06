/**
 * Created by BG200040 on 2016/5/13.
 */
var React = require('react');

class Paging extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var max = Math.ceil(this.props.size / this.props.length);
        var group = {
            width: 40,
            height: 30,
            lineHeight: "30px",
            float: "right",
            border: '1px solid #e5e5e5',
            marginRight: 5,
            textAlign: "center",
            cursor: 'pointer'
        };
        var checked = {
            width: 40,
            height: 30,
            lineHeight: "30px",
            float: "right",
            border: '1px solid #e5e5e5',
            marginRight: 5,
            textAlign: "center",
            backgroundColor: "#6faed9",
            cursor: 'pointer'
        };
        return (
            <div className="clearfix" style={{height:35}}>
                <div className="clearfix" style={{float:"right",height:35}}>
                    {(()=> {
                        if (this.props.num < max)
                            return <div onClick={event=>this.props.click(event,max)} style={group}><a href="javascript:void(0)">&gt;&gt;</a></div>;
                        else
                            return <div style={group}><a style={{color:'#e5e5e5'}} href="javascript:void(0)">&gt;&gt;</a></div>
                    })()}
                    {(()=> {
                        if (this.props.num < max)
                            return <div onClick={event=>this.props.click(event,this.props.num+1)} style={group}><a href="javascript:void(0)">&gt;</a></div>;
                        else
                            return <div style={group}><a style={{color:'#e5e5e5'}} href="javascript:void(0)">&gt;</a></div>
                    })()}
                    {(()=> {
                        if (this.props.num + 4 <= max) {
                            let arr = [];
                            for (let i = this.props.num + 4; i > this.props.num - 1; i--) {
                                arr.push(<div onClick={event=>this.props.click(event,i)} key={i} style={this.props.num==i?checked:group}><a
                                    href="javascript:void(0)">{i}</a>
                                </div>)
                            }
                            return arr
                        }
                        else if (this.props.num + 3 <= max) {
                            let arr = [];
                            for (let i = this.props.num + 3; i > this.props.num - 2 && i > 0; i--) {
                                arr.push(<div onClick={event=>this.props.click(event,i)} key={i} style={this.props.num==i?checked:group}><a
                                    href="javascript:void(0)">{i}</a>
                                </div>)
                            }
                            return arr
                        }
                        else if (this.props.num + 2 <= max) {
                            let arr = [];
                            for (let i = this.props.num + 2; i > this.props.num - 3 && i > 0; i--) {
                                arr.push(<div onClick={event=>this.props.click(event,i)} key={i} style={this.props.num==i?checked:group}><a
                                    href="javascript:void(0)">{i}</a>
                                </div>)
                            }
                            return arr
                        }
                        else if (this.props.num + 1 <= max) {
                            let arr = [];
                            for (let i = this.props.num + 1; i > this.props.num - 4 && i > 0; i--) {
                                arr.push(<div onClick={event=>this.props.click(event,i)} key={i} style={this.props.num==i?checked:group}><a
                                    href="javascript:void(0)">{i}</a>
                                </div>)
                            }
                            return arr
                        }
                        else if (this.props.num <= max) {
                            let arr = [];
                            for (let i = this.props.num; i > this.props.num - 5 && i > 0; i--) {
                                arr.push(<div onClick={event=>this.props.click(event,i)} key={i} style={this.props.num==i?checked:group}><a
                                    href="javascript:void(0)">{i}</a>
                                </div>)
                            }
                            return arr
                        }
                    })()}
                    {(()=> {
                        if (this.props.num > 1)
                            return <div onClick={event=>this.props.click(event,this.props.num-1)} style={group}><a href="javascript:void(0)">&lt;</a></div>;
                        else
                            return <div style={group}><a style={{color:'#e5e5e5'}} href="javascript:void(0)">&lt;</a></div>
                    })()}
                    {(()=> {
                        if (this.props.num > 1)
                            return <div onClick={event=>this.props.click(event,1)} style={group}><a href="javascript:void(0)">&lt;&lt;</a></div>;
                        else
                            return <div style={group}><a style={{color:'#e5e5e5'}} href="javascript:void(0)">&lt;&lt;</a></div>
                    })()}
                </div>
            </div>
        )
    }
}
module.exports = Paging;