import React from 'react';
import './Home.css'
import Footer from '../Footer'
import HomeForm from './HomeForm'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            projectType: 'hat'
        };
        this.body = document.querySelector('body');
    }

    componentDidMount = () => {
        this.body.classList.add('home');
    }

    componentWillUnmount = () => {
        this.body.classList.remove('home');
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="container home">
                <main>
                    <HomeForm 
                        onChange={this.handleChange}
                        projectType = {this.state.projectType} />
                    <Footer photographer="Soraya García" url ="https://unsplash.com/@sorayismo" />
                </main>
            </div>
        );
    }
}

export default Home;
