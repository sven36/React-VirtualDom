import React ,{ Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
/*class Input extends React.Component{
	    constructor(props){
        super(props);
    }
    InputCheck(e)
    {
      var inputReds=document.querySelectorAll(".redBorder");
      if(inputReds.length>0){
      	inputReds[0].className=inputReds[0].className.replace('redBorder','');
      }
      var val=e.target.value;
      var id=e.target.id;
      if(!val){
         e.target.className+=" redBorder";
      }
      else{
        if (id == "CensusRegister" || id == "HouseAdrStreet") {
            if (val.length > 60) {
         e.target.className+=" redBorder";
            }
        }
        else if (id == "SellPerson") {
            if (/[^\u4E00-\u9FA5]/g.test(val)) {
              e.target.className+=" redBorder";
            }
        }
        else if (id == "BuildingArea" || id == "Buyhospend" || id == "ApplyFundMoney") {
                if (parseFloat(val) > 0) {
                    val = parseFloat(val);
                    val = val.toFixed(2);
                    e.target.value=val;
                }
            }
        else if (id == "PetitionerPhone") {
                if (val.length != 11) {
                    e.target.className+=" redBorder";;
                }
            }
      }
    }
	render(){
		return(
			<input type="text" id={this.props.id} name={this.props.id}  height="30" onBlur={this.InputCheck} className={this.props.css}  />
			);
	}
}
class Select extends React.Component{
	    constructor(props){
        super(props);
    }
    SelectChange(e){
    	if(e.target.id=="PetMarriage"){
      var val=e.target.value;
      if(val ==1){
      	document.getElementById("SpouseName").disabled=true;
      	document.getElementById("SpouseCardId").disabled=true;
      	document.getElementById("SpouseCard").disabled=true;
      }
      else{
      	document.getElementById("SpouseName").disabled=false;
      	document.getElementById("SpouseCardId").disabled=false;
      	document.getElementById("SpouseCard").disabled=false;
      }

    	}

    }

	render(){
		var options=[];
		      if(this.props.id==="PetMarriage")
             	{
             		options.push(<option value="1"> 单身</option>);
             		options.push(<option value="2">已婚</option>);
             	}
             	else if(this.props.id ==="BankId")
                {
                 options.push(<option value="1">建设银行</option>);
                 options.push(<option value="2">工商银行</option>);
                 options.push(<option value="3">农业银行</option>);
                 options.push(<option value="4">中国银行</option>);
                 options.push(<option value="5">交通银行</option>);
                 options.push(<option value="10">招商银行</option>);
                 options.push(<option value="21">北京银行</option>);
                 options.push(<option value="23">中信银行</option>);

                }
                else if(this.props.id ==="SpouseCardId")
                {
                 options.push(<option value="1">身份证</option>);
                 options.push(<option value="2">军官证</option>);
                 options.push(<option value="3">外籍人护照</option>);
                 options.push(<option value="16">港澳居民来往内地通行证</option>);
                 options.push(<option value="17">台湾居民来往内地通行证</option>);

                }
                else if (this.props.id ==="IsApplyFund")
                {
                 options.push(<option value="1" > 是</option>);
                 options.push(<option value="0">否</option>);
                }
                else if (this.props.id ==="StateAddressSort")
                {
                 options.push(<option value="1" selected=""> 单位地址</option>);
                 options.push(<option value="0">住宅地址</option>);
                }
		return(
			 <select id={this.props.id} name={this.props.id} onChange={this.SelectChange} >
             <option value="-1">请选择...</option>
             { options  }
             </select>
			);
	}
}

class  Ul extends React.Component{
	    constructor(props){
        super(props);
    }
    	render(){
		return(
		       <ul>
		       {
		           this.props.items.map(function (item) {
		          if (typeof item==="string"){
                  return <li >{item}</li>
		          }
		          else if(item.name.indexOf('input')>=0){
		                 return <li ><Input id={item.id} css={item.name}  /></li>
		          }else{
		                 return <li ><Select id={item.id} type={item.name} /></li>
		         }
                    })
		       }
                </ul>
		);
	}
	}



ReactDOM.render(<Input id="CensusRegister" css="input4"  />,document.getElementById('tt'));
ReactDOM.render(<Input id="PetitionerPhone" css="input1"  />,document.getElementById('tt2'));
ReactDOM.render(<Select id="PetMarriage" />,document.getElementById('tt3'));
ReactDOM.render(<Select id="BankId" />,document.getElementById('tt4'));
ReactDOM.render(<Select id="SpouseCardId" />,document.getElementById('tt8'));
ReactDOM.render(<Input id="CardNo" css="input1"  />,document.getElementById('tt5'));
ReactDOM.render(<Input id="CardNoAgain" css="input1"  />,document.getElementById('tt6'));
ReactDOM.render(<Input id="SpouseName" css="input1"  />,document.getElementById('tt7'));
ReactDOM.render(<Input id="SpouseCard" css="input1"  />,document.getElementById('tt9'));
ReactDOM.render(<Ul items={["购房合同编号：","是否已申请住房公积金贷款："]}  />,document.getElementById('tt10'));
ReactDOM.render(<Ul items={[{id:"HousePurchase",name:"input1"},{id:"IsApplyFund",name:"select"}]}  />,document.getElementById('tt11'));
ReactDOM.render(<Ul items={["房屋卖出人："]}  />,document.getElementById('tt12'));
ReactDOM.render(<Ul items={[{id:"SellPerson",name:"input1"}]}  />,document.getElementById('tt13'));
ReactDOM.render(<Ul items={["购房金额（元）：","提取限额（元）：","所购房屋坐落地址："]}  />,document.getElementById('tt14'));
ReactDOM.render(<Ul items={[{id:"Buyhospend",name:"input1"},{id:"ApplyFundMoney",name:"input1"},{id:"HouseAdrStreet",name:"input4"}]}  />,document.getElementById('tt15'));
ReactDOM.render(<Ul items={["建筑面积（平米）：","借款合同编号："]}  />,document.getElementById('tt18'));
ReactDOM.render(<Ul items={[{id:"BuildingArea",name:"input1"},{id:"LoanContractNo",name:"input1"}]}  />,document.getElementById('tt19'));
ReactDOM.render(<Ul items={["对账单邮寄地址类型：","对账单地址邮编："]}  />,document.getElementById('tt20'));
ReactDOM.render(<Ul items={[{id:"StateAddressSort",name:"select"},{id:"StateAddressCode",name:"input1"}]}  />,document.getElementById('tt21'));
ReactDOM.render(<Ul items={["具体邮寄地址："]}  />,document.getElementById('tt22'));
ReactDOM.render(<Ul items={[{id:"StateAddress",name:"input4"}]}  />,document.getElementById('tt23'));

class  Ul extends React.Component{
	    constructor(props){
        super(props);
        this.setState({squares:Array(9).fill(null)});
    }
handle(i){
    const squares=this.state.squares.slice();
    squares[i]='X';
this.setState({squares:squares});
}
    	render(){
            var lis=[];
            // var sArray=this.state.squares;
            for(var i=0;i<9;i++){
                lis.push(<LI value={i} fun={()=>this.handle(i)} className="li2"/>);
            }
		return(
		       <ul className="h300">
		       {
                  lis
		       }
                </ul>
		);
	}
	}
	class  LI extends React.Component{
	    constructor(props){
        super(props);
    }
    render(){
    	return(
    		<li className={this.props.className}  onClick={()=>this.props.fun()}>{this.props.value}</li>
    		);
    }
	}*/
class Clock extends React.Component{
    constructor(){
        super();
        this.state={time:null,isOn:true};
        this.handle=this.handle.bind(this);
    }
    componentDidMount(){
        this.timeId=setInterval(()=>this.tick(),1000);
    }
    tick(){
        this.setState({time:new Date().toString()});
    }
    componentWillUnmount(){
        this.setState({time:'end'});
    }
    handle(){
            this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
        // this.setState({isOn:!isOn});
    }
    render(){
        return (  
          <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.time}.</h2>
      <p onClick={this.handle}>{this.state.isOn ?'On~':'Off~'} </p>
    </div>);
    }
}


ReactDOM.render(<Clock/>,document.getElementById('dds'));
