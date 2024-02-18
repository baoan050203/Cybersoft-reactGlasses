import React, { Component } from 'react';
import data from './dataGlasses.json'

class Glasses extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        imgUrl : './glassesImage/v1.png'
      }
    }
    changeGlasses = (number) => {
        const imgUrl = `./glassesImage/v${number}.png`
        this.setState({imgUrl})
    }
    render() {
        return (
            <div className = "container-fluid">
                <div className = " row model d-flex justify-content-around">
                    <div className='col-sm-3 mainModel ' >
                    <img src='./glassesImage/model.jpg' alt = 'model1' height ='400px' width = '100%'/>
                        <div className ='tryGlasses'>
                        <img src={this.state.imgUrl} alt="" srcset=""  height ='400px'/>
                         </div>
                    </div>
                   
                    <div className='model2 col-sm-3 '>
                        <img src='./glassesImage/model.jpg' alt = 'model1' height ='400px' width = '100%'/>
                    </div>
                </div>
                <div className = 'productLists   '>
                    <div className = ''>
                        <div className = 'row '>
                            
                            <div className ='col-sm ms-2' onClick ={ () => {this.changeGlasses('1')}}>
                            <img src="./glassesImage/g1.jpg" alt="g1" height ='200px' width = '200px'  />
                            <p>GUCCI G8850U</p>
                            </div>
                            
                            <div className ='col-sm ms-2' onClick ={ () => {this.changeGlasses('2')}}>
                            <img src="./glassesImage/g2.jpg" alt="g1" height ='200px' width = '200px'  />
                            <p>GUCCI G8850U</p>
                            </div>

                            <div className ='col-sm ms-2' onClick ={ () => {this.changeGlasses('3')}}>
                            <img src="./glassesImage/g3.jpg" alt="g1" height ='200px' width = '200px'  />
                            <p>GUCCI G8850U</p>
                            </div>

                            <div className ='col-sm ms-2' onClick ={ () => {this.changeGlasses('4')}}>
                            <img src="./glassesImage/g4.jpg" alt="g1" height ='200px' width = '200px'  />
                            <p>GUCCI G8850U</p>
                            </div>

                            <div className ='col-sm ms-2' onClick ={ () => {this.changeGlasses('5')}}>
                            <img src="./glassesImage/g5.jpg" alt="g1" height ='200px' width = '200px'  />
                            <p>GUCCI G8850U</p>
                            </div>

                            <div className ='col-sm ms-2' onClick ={ () => {this.changeGlasses('6')}}>
                            <img src="./glassesImage/g6.jpg" alt="g1" height ='200px' width = '200px'  />
                            <p>GUCCI G8850U</p>
                            </div>

                            <div className ='col-sm ms-2' onClick ={ () => {this.changeGlasses('7')}}>
                            <img src="./glassesImage/g7.jpg" alt="g1" height ='200px' width = '200px'  />
                            <p>GUCCI G8850U</p>
                            </div>

                            <div className ='col-sm ms-2' onClick ={ () => {this.changeGlasses('8')}}>
                            <img src="./glassesImage/g8.jpg" alt="g1" height ='200px' width = '200px'  />
                            <p>GUCCI G8850U</p>
                            </div>

                            <div className ='col-sm ms-2' onClick ={ () => {this.changeGlasses('9')}}>
                            <img src="./glassesImage/g9.jpg" alt="g1" height ='200px' width = '200px'  />
                            <p>GUCCI G8850U</p>
                            </div>

                            
                            

                          
                        
                          
                        </div>
                    </div>
                </div>
                <div className = "glasses"></div>
            </div>
        );
    }
}

export default Glasses;