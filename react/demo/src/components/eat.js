import React, { Component, Fragment } from 'react'
import '../style/eat.css'
import EatItem from './eatItem'
// import PropTypes from 'prop-types'

class Eat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [
        '宫保鸡丁', '酷溜肥肠', '辣子鸡'
      ]
    }
  }

  inputChange(e) {
    // console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }

  deleteItem(index) {
    console.log(index);
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <input className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}></input>
          <button onClick={this.addList.bind(this)}>点菜下单</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              // return <li key={index+item} onClick={this.deleteItem.bind(this, index)}
              // dangerouslySetInnerHTML={{__html: item}}
              // >
              //   {/* {item} */}
              //   </li>
              return(
                <div >
                  <EatItem 
                  key={index+item} 
                  index={index} 
                  content={item} 
                  list={this.state.list}
                  deleteItem={this.deleteItem.bind(this)} />
                </div>
              )
            })
          }
          
        </ul>
      </Fragment>
    )
  }
}

export default Eat