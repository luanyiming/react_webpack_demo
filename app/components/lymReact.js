var React = require('react');
var style = require("../css/lymReact.css");
var ProductBox = React.createClass({
	getInitialState:function(){
		return{
			content:''
		}
	},
	handleFocus:function(){
		this.refs.textElDiv.style.borderColor = '#fa7d3c';
		this.refs.hot.style.display = 'none';
		this.refs.tips.style.display = 'block';
	},
	handleBlur:function(){
		this.refs.textElDiv.style.borderColor = '#ddd';
		this.refs.tips.style.display = 'none';
		this.refs.hot.style.display = 'block';
	},
	handleOnchange:function(e){
		this.setState({
			content:e.target.value
		})
	},
  render: function () {
    return (
  		<div className={style.publisher}>
  			<div className={style.title}>
  				<div ref='hot'>
  					<a href='#'>这里是热门新闻</a>
  				</div>
  				<div ref='tips' className={style.tips}>
					<span>{this.state.content.length > 140?'已经超出':'还可以输入'}</span><strong>{this.state.content.length > 140?this.state.content.length-140:140-this.state.content.length}</strong>
  				</div>
  			</div>
  			<div ref='textElDiv' className={style.textElDiv}>
				<textarea onChange={this.handleOnchange} onFocus={this.handleFocus} onBlur={this.handleBlur} name="" id="" cols="30" rows="10"></textarea>
  			</div>
  			<div className={style.btnWrap}>
  				<a className={'publishBtn' + ((this.state.content.length > 0 && this.state.content.length <= 140) ? '' :' disabled')}>发布</a>
  				
  			</div>
		</div>
    );
  }
});

module.exports = ProductBox;