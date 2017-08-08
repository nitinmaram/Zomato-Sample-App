import React from 'react';
// import ReactDOM from 'react-dom';
import {Button} from 'semantic-ui-react'
import {Container} from 'semantic-ui-react'
// import {Header} from 'semantic-ui-react'
import {Input} from 'semantic-ui-react'
import {Divider} from 'semantic-ui-react'

class Child1Component extends React.Component {
    constructor() {
        super();
        this.state = {
            cusine: "",
            rcity: ""
        }
    }
    changecity(e)
    {
        this.setState({rcity: e.target.value});
    }
    changecusine(e)
    {
        this.setState({cusine: e.target.value});
    }
    f() {
        this.props.handle(this.state.rcity, this.state.cusine);
    }
    f1() {
      navigator.geolocation.getCurrentPosition(this.success.bind(this),this.options.bind(this));
    }
    success (p){
this.props.locHandle(p.coords.latitude,p.coords.longitude);
}
options(){
         enableHighAccuracy: true
}
    render() {
        return (
            <Container textAlign="center">
                <Input focus placeholder='Search City' ref="rcity"
                onChange={this.changecity.bind(this)}/>
                <Input focus placeholder='Search Cusines...' ref="cusine"
                onChange={this.changecusine.bind(this)}/>
                <Button primary onClick={this.f.bind(this)}>Search</Button>
                <Button primary onClick={this.f1.bind(this)}>Near By Restaurants</Button>
                <Divider/>
            </Container>
        );
    }
}
// export default Child1Component;
Child1Component.propTypes = {
 handle: React.PropTypes.func,
 name: React.PropTypes.object
}
export default Child1Component;
